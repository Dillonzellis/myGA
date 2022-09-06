// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

	if (M < 0) { M = 0 }
	if (N < 0) { N = 0 }

	var S = 0;
	var T = 0;
	var V = 0;
	var W = 0;
	var X = 0;
	var Y = 0;
	var Z = 0;
	var SS = 0;
	var TT = 0;
	var WW = 0;
	var XX = 0;
	var YY = 0;
	var ZZ = 0;
	
	var QIR = 0;
	var QDR = 0;

	QIR = M / 100;
	QDR = N / 100;

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

	var PMT = NUM / DEN;

// **************************************************************

	S = D * QIR;
	T = D * QDR;

	V = PMT + Math.abs(E) + Math.abs(F) + Math.abs(G) + Math.abs(H);
	W = Math.abs(I) + Math.abs(J) + Math.abs(K) + Math.abs(L);

	X = V + W;

	SS = V / D;
	TT = X / D;
	
	var txtResult = ""

	if (V <= S) {
		if (X <= T) {
			txtResult = "The buyer(s)' pass both the income and debt ratio tests."
		}
	}

	if (V <= S) {
		if (X > T) {
			txtResult = "The buyer(s)' pass the income ratio test, but fail the debt ratio test."
		}
	}

	if (V > S) {
		if (X <= T) {
			txtResult = "The buyer(s)' pass the debt ratio test, but fail the income ratio test."
		}
	}

	if (V > S) {
		if (X > T) {
			txtResult = "The buyer(s)' fail both the income and debt ratio tests."
		}
	}

	document.write(txtResult);

// **************************************************************

