// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// Initialize interest rate for first six months.

	var B = SR;

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

	var PMT = (NUM / DEN);

// **************************************************************

// Total amount in payments, thus far.

	var TOTPMT = 6 * PMT;

// **************************************************************

// Write result for initial payment.

	document.write(currencyPad(PMT));

// **************************************************************