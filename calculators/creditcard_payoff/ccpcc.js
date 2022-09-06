// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

	var V = A;
	var D = 0;
	var I = 0;
	var R = 0;
	var S = 0;
	var T = 0;
	var U = 0;
	var J = 0;
	var W = 0;
	var INT = 0;

	// Check for first payment; if greater
	// than balance, assign values and
	// exit out.

	D = V - E;

	if (D <= 0)
	{
		I = 1;
		J = 1;
		INT = 0;

	// If first payment is not greater
	// than balance, compute values.
		
	} else {

		for (I = 2; I <= 3601; I++)
		{
			R = (B / 100) / 365;
			S = 30 * R;
			T = S * D;
			U = E - T;
			D = D - U;
			INT = (INT + T);

	
			if (D <= 0)
			{
				if (I >= 3600)
				{
					J = 3600;
				} else {
					J = I;
				}
				break;
			}
		}
	}

	if (I >= 3600)
	{
		document.write("The credit card balance will never be paid off since the monthly payment is too low.");
	
		} else {
	
		J = I;
		document.write(J);
	}

	var W = INT;

// **************************************************************