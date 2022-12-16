// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

	var KK = 0;
	var JJ = 0;
	var H = 0;
	var TV = 0;
	TV = A;
	var TVV = A;
	B = SR;
	var N = Math.pow(1 + B / 1200, C);
	var Z = (TV * (B / 1200)) / (1 - (1 / N));
	
	for (var I = 1; I <= 6; I++)
	{
		H = I;
		KK = B / 1200 * TVV;
		JJ = Z - KK;
		TVV = TVV - JJ;
		if (TVV <= 100) { TVV = 0 }
		if (KK <= 0) { TVV = 0 }
	}

	for (I = 1; I <= NORC - 1; I++)	
	{
		H = I + NORC;
		B = SR + (I * IR);
		var N = Math.pow(1 + B / 1200, C);
		var Z = (TV * (B / 1200)) / (1 - (1 / N));
		for (var L = (1 + (NORC * 6)); L <= (6 + (NORC * 6)); L++)
		{
			H = L - (NORC * 6) + (6 * I);
			KK = B / 1200 * TVV;
			JJ = Z - KK;
			TVV = TVV - JJ;
		}
	}

	B = ER;
	var N = Math.pow(1 + B / 1200, C);
	var Z = (TV * (B / 1200)) / (1 - (1 / N));
	
	for (var I = (7 + ((NORC - 1) * 6)); I <= C; I++)
	{
		H = I;
		KK = B / 1200 * TVV;
		JJ = Z - KK;
		TVV = TVV - JJ;
		if (TVV <= 100) { TVV = 0 }
		if (KK <= 0) { TVV = 0 }
		if (KK <= .01) {
			break;
		}
	}

	var SSS = 0;
	var TTT = 0;
	var VVV = 0;
	var XXX = 0;

	B = SR;
	var N = Math.pow(1 + B / 1200, C);
	var SSS = (A * (B / 1200)) / (1 - (1 / N));
			
	for (I = 1; I <= NORC - 1; I++)
	{
		B = SR + (I * IR);
		var N = Math.pow(1 + B / 1200, C);
		var YYY = (A * (B / 1200)) / (1 - (1 / N));
		XXX = YYY * 6;
		VVV = VVV + XXX;
	}
		
	
	B = ER;
	var N = Math.pow(1 + B / 1200, C);
	var TTT = (A * (B / 1200)) / (1 - (1 / N));
	
	var TI = ((SSS * 6) + (((H - 1) - (NORC * 6)) * TTT) + VVV) - A;
	
	var UU = currencyPad(TI);
	document.write(UU);

// **************************************************************