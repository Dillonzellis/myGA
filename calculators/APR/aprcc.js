// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// **************************************************************

// COMPUTE PAYMENT AMOUNT.

	var INT = INTEREST_RATE / 1200;
	var TOTPER = NUMBER_OF_YEARS * 12;	
	var NUM = BASIS * INT;
	var DEN = 1 - (1 / Math.pow(1 + INT, TOTPER));
	var PMT = NUM / DEN;

// **************************************************************

// INITIAL CACLUATIONS FOR EVENTUAL APR COMPUTATION.

// Compute adjusted basis and equate to A for further calcuations.

ADJUSTED_BASIS = BASIS - (((ORIGINATION_FEE / 100) * BASIS) + ((DISCOUNT_POINTS / 100) * BASIS) + Math.abs(LENDERS_FEES) + Math.abs(PREPAID_INTEREST));

A = ADJUSTED_BASIS; 

// **************************************************************

// Equate interest rate to I for initial calculations and II for
// further calculations.

I = INTEREST_RATE;
II = INTEREST_RATE;

// **************************************************************