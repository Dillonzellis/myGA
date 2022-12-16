// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// Initialize variables.

	var INT = 0;
	var TOTPER = 0;
	var NUM = 0;
	var DEN = 0;
	var PMT = 0;
	var R = 0;
	var X = 0;
	var Y = 0;
	var U = 0;

// Interest rate per period.
// (Since this calculator uses a static monthly payment plan,
// there are always 12 payment periods per year.)

	INT = B / 1200;

// **************************************************************

// Total periods.

	TOTPER = C * 12;	

// **************************************************************

// Numerator of formula.

	NUM = A * INT;

// **************************************************************

// Denominator of formula.

	DEN = 1 - (1 / Math.pow(1 + INT, TOTPER));
	
// **************************************************************

// Payment amount.

	PMT = NUM / DEN;

// **************************************************************

// Calculate difference in payment amount.

	R = E - PMT;

// **************************************************************

// Determine mortgage points portion of closing costs.

	var X = A * (F / 100);

// **************************************************************

// Calculate total closing costs.

	var Y = Math.abs(D) + Math.abs(X);

// **************************************************************

// Determine break-even point.

	var U = (Y / R);

// **************************************************************

// Write result.

	document.write(currencyPad(PMT));

// **************************************************************
