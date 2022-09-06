// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// **************************************************************

// Determine the number of compounding periods per year.

	if (N == 0)
	{
		var CY = 365;
	}
	if (N == 1)
	{
		CY = 52;
	}	
	if (N == 2)
	{
		CY = 26;
	}
	if (N == 3)
	{
		CY = 24;
	}
	if (N == 4)
	{
		CY = 12;
	}
	if (N == 5)
	{
		CY = 4;
	}
	if (N == 6)
	{
		CY = 2;
	}
	if (N == 7)
	{
		CY = 1;
	}

// **************************************************************

// Substitute variable for formula purposes.

	var PY = D;

// **************************************************************

// Determine value for X in formula.

	var X = (B / 100) / CY;

// **************************************************************

// Determine value for Y in formula.

	var Y = CY / PY;

// **************************************************************

// Determine first intermediate value.

	var IVA = X + 1;

// **************************************************************	

// Determine second intermediate value.

	var IVB = Math.log(IVA);

// **************************************************************

// Determine third intermediate value.

	var IVC = Y * IVB;
	
// **************************************************************

// Determine fourth intermediate value.

	var IVD = Math.exp(IVC);

// **************************************************************

// Find value for interest per period.

	var INT = IVD - 1;

// **************************************************************

// Calculate total number of periods.

	var TOTPER = C * PY;

// **************************************************************

// Determine fifth intermediate variable.

	var IVE = Math.pow(1 + INT, TOTPER);

// **************************************************************

// Determine sixth intermediate value.

	var IVF = IVE - 1;

// **************************************************************

// Calculate quotient of right side of equation.

	var QT = A / IVF;

// **************************************************************

// Calculate total of right side of equation.

	var RTSID = (Math.abs(A)) + (Math.abs(QT));

// **************************************************************

// Calculate payment.

	var PMT = (INT * RTSID) + (Math.abs(L));

// **************************************************************

// Break calculation when payments exceed loan amount
// (generally used for contingency of an additional payment
// per month).

	var K = 0;
	var J = 0;
	var H = 0;

	var M = A;

	for (I = 1; I <= TOTPER; I++)

	{
		K = INT * M;
		J = PMT - K;
		M = M - J;
	
		if (M <= J)
		
		{
			if (I > (TOTPER) - 1)
			{
				H = TOTPER;
			} else {
				H = I + 1;
			}
		break;
		}
	}

// **************************************************************

// Calculate total to be paid.

	var TOTPMT = H * PMT;

// **************************************************************

// Calculate total interest paid.

	var TOTINT = TOTPMT - A;

// **************************************************************

// Write result.

	document.write(currencyPad(PMT));

// **************************************************************