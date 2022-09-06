// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// **************************************************************

// Get values for both the number of months and the additional
// principal here since they will both have a significant
// effect on final results.

	var C = getValue(passed,'NumberOfMonths');
	if (C < 0) { C = 0 }

	var D = getValue(passed, 'AdditionalPrincipal');
	if (D < 0) { D = 0 }

// **************************************************************

// Interest rate per period.
// (Since this calculator uses a static monthly payment plan,
// there are always 12 payment periods per year.)

	var INT = B / 1200;

// **************************************************************

// Total periods.

	var TOTPER = C;	

// **************************************************************

// Numerator of formula.

	var NUM = A * INT;

// **************************************************************

// Denominator of formula.

	var DEN = 1 - (1 / Math.pow(1 + INT, TOTPER));
	
// **************************************************************

// Payment amount.

	var PMT = (NUM / DEN) + (Math.abs(D));

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

// Total amount in payments.

	var TOTPMT = H * PMT;

// **************************************************************

// Total interest paid.

	var TOTINT = TOTPMT - A;

// **************************************************************
	
// Write result for total number of months to pay.

	document.write(H);

// **************************************************************