// **************************************************************
// InterenetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

	var D = getValue(passed,'AnnualIncome');
	var PA = getValue(passed,'PresentAge');
	var RA = getValue(passed,'RetirementAge');
	var WA = getValue(passed,'WithdrawalAge');
	var E = getValue(passed,'InflationRate');

	if (A < 0) { A = 0 }
	if (B < 0) { B = 0 }
	if (C < 0) { C = 0 }
	if (D < 0) { D = 0 }
	
	if (PA < 0) { PA = 0 }
	if (RA < 0) { RA = 0 }
	if (WA < 0) { WA = 0 }

	if (E < 0) { E = 0 }
	
	var IA = RA - PA;
	var DA = WA - RA;
	
	if (IA < 0) { IA = 0 }
	if (DA < 0) { DA = 0 }
	
	IA = parseInt(IA);
	DA = parseInt(DA);

	if (getValue(passed,'inflation') !='') {
		var H = E;
	} else {
		H = 0;
	}
	
	if (getValue(passed,'inflation') !='') {
		var	EE = E;
	} else {
		EE = 0;
	}
	
	var HH = Math.pow(( 1 / (1 + E / 100)), IA);
	var II = Math.pow(( 1 + E / 100), IA);
		
	if (SO == 0) {
	
		D = 0;
			
		var G = 0;
		var L = 0;
		var M = 0;
		var N = 0;
		var MM = 0;
		var NN = 0;
		var Z = 0;
		
		L = Math.pow((1 + (B / 100)), IA);

		for (I = 0; I <= IA - 1; I++)

		{
			G = I;
			M = (Math.pow((1 + (B / 100)) , (IA - 1 - G))) * (Math.pow((1 + (H / 100)), G));
			N = N + M;
		}
		
		for (I = 0; I <= DA - 1; I++)
		
		{
			G = I;
			MM = (Math.pow((1 + (E / 100)) , (IA + G))) / (Math.pow(( 1 + (B / 100)) , G));
			NN = NN + MM;
		}
				
		Z = ((A * L) + (C * N)) / NN;
		
		if (getValue(passed,'today') !='') {
			DD = Z;
		} else {
			DD = Z * II;
		}
		
		var DDD = Z * II;

		document.write(currencyPad(C));
	}

	if (SO == 1) {
	
		C = 0;
			
		var G = 0;
		var L = 0;
		var M = 0;
		var N = 0;
		var MM = 0;
		var NN = 0;
		var Z = 0;
		
		L = Math.pow((1 + (B / 100)), IA);

		for (I = 0; I <= IA - 1; I++)

		{
			G = I;
			M = (Math.pow((1 + (B / 100)) , (IA - 1 - G))) * (Math.pow((1 + (H / 100)), G));
			N = N + M;
		}
		
		for (I = 0; I <= DA - 1; I++)
		
		{
			G = I;
			MM = (Math.pow((1 + (E / 100)) , (IA + G))) / (Math.pow(( 1 + (B / 100)) , G));
			NN = NN + MM;
		}
		
		Z = (((D * HH) * NN) - (A * L)) / N;
		
		if (getValue(passed,'today') !='') {
			var DD = D * HH;
		} else {
			DD = D;
		}
		
		document.write(currencyPad(DD));
	}

	if (SO == 2) {
	
		A = 0;
		
		var G = 0;
		var L = 0;
		var M = 0;
		var N = 0;
		var MM = 0;
		var NN = 0;
		var Z = 0;
		
		L = Math.pow((1 + (B / 100)), IA);

		for (I = 0; I <= IA - 1; I++)

		{
			G = I;
			M = (Math.pow((1 + (B / 100)) , (IA - 1 - G))) * (Math.pow((1 + (H / 100)), G));
			N = N + M;
		}
		
		for (I = 0; I <= DA - 1; I++)
		
		{
			G = I;
			MM = (Math.pow((1 + (E / 100)) , (IA + G))) / (Math.pow(( 1 + (B / 100)) , G));
			NN = NN + MM;
		}
		
		Z = (((D * HH) * NN) - (C * N)) / L;
		
		if (getValue(passed,'today') !='') {
			var DD = D * HH;
		} else {
			DD = D;
		}

		document.write(currencyPad(DD));
	}

// **************************************************************


