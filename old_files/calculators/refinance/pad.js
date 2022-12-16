// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// Currency function.

function currencyPad(P, width) {

	P = "" + eval(P)
	Q = parseInt(P)
	strQ = "" + Math.abs(Q)

	if (Math.abs(Q)>=1000) {
		lenQ = strQ.length
		S = parseInt("" + (Q/1000))
		T = strQ.substring(lenQ - 3, lenQ)
		strQ = Math.abs(S)+","+T
	}

	if (Math.abs(Q)>=1000000) {
		lenQ = strQ.length
		S = parseInt("" + (Q/1000000))
		T = strQ.substring(lenQ - 7, lenQ)
		strQ = Math.abs(S)+","+T
	}

	if (Math.abs(Q)>=1000000000) {
		lenQ = strQ.length
		S = parseInt("" + (Q/1000000000))
		T = strQ.substring(lenQ - 12, lenQ)
		strQ = Math.abs(S)+","+T
	}
	
	nDollars = parseInt(P);
	rCents = Math.round((P - nDollars) * 100.00);
			
	if (rCents == 0) {
		if (Q < 0) {
			XXX = "($" + strQ + ".00" + ")";
		} else { 
		XXX = "$" + strQ + ".00";
		}
	}

	if (rCents > 0 && rCents < 10) {
		if (Q < 0) {
			XXX = "($" + strQ + ".0" + rCents + ")";
		} else {
		XXX = "$" + strQ + ".0" + rCents;
		}
	}

	if (rCents >= 10 && rCents < 100) {
		if (Q < 0) {
			XXX = "($" + strQ + "." + rCents + ")";
		} else {
		XXX = "$" + strQ + "." + rCents;
		}
	}
	
	if (rCents == 100) {
		if (Q < 0) {
			XXX = "($" + strQ + "." + (rCents - 1) + ")";
		} else {
		XXX = "$" + strQ + "." + (rCents - 1);
		}
	}
	
	return XXX
}

// **************************************************************

// Rounding function for percentages.

function roundingPad(P, width) {

	P = "" + eval(P)
	Q = parseInt(P)
	strQ = "" + Math.abs(Q)

	if (Math.abs(Q)>=1000) {
		lenQ = strQ.length
		S = parseInt("" + (Q/1000))
		T = strQ.substring(lenQ - 3, lenQ)
		strQ = Math.abs(S)+","+T
	}

	if (Math.abs(Q)>=1000000) {
		lenQ = strQ.length
		S = parseInt("" + (Q/1000000))
		T = strQ.substring(lenQ - 7, lenQ)
		strQ = Math.abs(S)+","+T
	}

	if (Math.abs(Q)>=1000000000) {
		lenQ = strQ.length
		S = parseInt("" + (Q/1000000000))
		T = strQ.substring(lenQ - 12, lenQ)
		strQ = Math.abs(S)+","+T
	}

	nWholeNumber = parseInt(P);
	rNumber = (P - nWholeNumber) * 100.00;
			
		if (rNumber < 99.5) {
			dNumber = Math.round(rNumber);
		} else {
			dNumber = rNumber;
		}
	nNumber = Math.abs(parseInt(dNumber));

	if (nNumber == 0) {
		if (Q < 0) {
			XXX = "(" + strQ + ".00" + ")";
		} else { 
		XXX = "" + strQ + ".00";
		}
	}

	if (nNumber > 0 && nNumber < 10) {
		if (Q < 0) {
			XXX = "(" + strQ + ".0" + nNumber + ")";
		} else {
		XXX = "" + strQ + ".0" + nNumber;
		}
	}

	if (nNumber >= 10 && nNumber < 100) {
		if (Q < 0) {
			XXX = "(" + strQ + "." + nNumber + ")";
		} else {
		XXX = "" + strQ + "." + nNumber;
		}
	}
	
	if (nNumber == 100) {
		if (Q < 0) {
			XXX = "(" + strQ + "." + (nNumber - 1) + ")";
		} else {
		XXX = "" + strQ + "." + (nNumber - 1);
		}
	}
	
	return XXX
}

// **************************************************************

// Integer pad for whole number fields.

function integerPad(P, width) {

	P = "" + eval(P)
	Q = parseInt(P)
	strQ = "" + Math.abs(Q)

	if (Math.abs(Q)>=1000) {
		lenQ = strQ.length
		S = parseInt("" + (Q/1000))
		T = strQ.substring(lenQ - 3, lenQ)
		strQ = Math.abs(S)+","+T
	}

	if (Math.abs(Q)>=1000000) {
		lenQ = strQ.length
		S = parseInt("" + (Q/1000000))
		T = strQ.substring(lenQ - 7, lenQ)
		strQ = Math.abs(S)+","+T
	}

	if (Math.abs(Q)>=1000000000) {
		lenQ = strQ.length
		S = parseInt("" + (Q/1000000000))
		T = strQ.substring(lenQ - 12, lenQ)
		strQ = Math.abs(S)+","+T
	}

	nWholeNumber = parseInt(P);
	rNumber = (P - nWholeNumber) * 100.00;
			
		if (rNumber < 99.5) {
			dNumber = Math.round(rNumber);
		} else {
			dNumber = rNumber;
		}
	nNumber = Math.abs(parseInt(dNumber));

	if (Q < 0) {
			XXX = "(" + strQ + ")";
		} else { 
		XXX = "" + strQ;
		}

	return XXX
}

// **************************************************************