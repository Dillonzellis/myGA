// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

	var A = getValue(passed,'BeginningBalance');
	var B = getValue(passed,'InterestRate');
	var C = getValue(passed,'PeriodicContribution');
	var D = getValue(passed,'NumberOfPeriods');
	var E = getValue(passed,'EndingBalance');
	var F = getValue(passed,'InflationRate');
	if (A < 0) { A = 0 }
	if (B < 0) { B = 0 }
	if (C < 0) { C = 0 }
	if (D < 0) { D = 0 }
	if (E < 0) { E = 0 }
	if (F < 0) { F = 0 }

	var J = D - 1;
	var strY = "";
	var strZ = "";

	if (getValue(passed,'inflation') !='') {
		var H = F;
	} else {
		H = 0;
	}

	var TO = getValue(passed,'compound_option');
	if (TO == 0) {
		var CO = 52;
		strY = "Weekly";
		strZ = "weeks";
	}

	if (TO == 1) {
		var CO = 12;
		strY = "Monthly";
		strZ = "months" 
	}

	if (TO == 2) {
		var CO = 4;
		strY = "Quarterly";
		strZ = "quarters"
	}

	if (TO == 3) {
		var CO = 1;
		strY = "Annually"
		strZ = "years"
	}
	
	var HH = Math.pow((1 / (1 + F / (CO * 100))), D);
	var II = Math.pow((1 + F / (CO * 100)), D);

	var UO = getValue(passed,'calculate_option');

	if (UO == 0) {
		var G = 0;
		var M = 0;
		var N = 0;
		
		for (I = 0; I <= J; I++)
		{
			G = I;
			M = (Math.pow((1 + (B / (CO * 100))), (D - 1 - G))) * (Math.pow((1 + (H / (CO * 100))), G));
			N = N + M;
		}
		
		var E = (A * (Math.pow((1 + ((B / 100) / CO)), D))) + (C * N);
		
		if (getValue(passed,'today') !='') {
			var Z = E * HH;
		} else {
			Z = E;
		}
		
		var JJJ = E * HH;
		document.write(currencyPad(A));
	}

	if (UO == 1) {
		var G = 0;
		var M = 0;
		var N = 0;
		
		for (I = 0; I <= J; I++)

		{
			G = I;
			M = (Math.pow((1 + (B / (CO * 100))), (D - 1 - G))) * (Math.pow((1 + (H / (CO * 100))), G));
			N = N + M;
		}
		
		if (getValue(passed,'today') !='') {
			Z = E * II;
		} else {
			Z = E;
		}

		var A = (Z - (C * N)) / (Math.pow((1 + ((B / 100) / CO)), D));
		
		var JJJ = Z * HH;
		document.write(currencyPad(Z));
	}
	
	if (UO == 2) {
		var G = 0;
		var M = 0;
		var N = 0;
		
		for (I = 0; I <= J; I++)
		
		{
			G = I;
			M = (Math.pow((1 + (B / (CO * 100))), (D - 1 - G))) * (Math.pow((1 + (H / (CO * 100))), G));
			N = N + M;
		}
		
		if (getValue(passed,'today') !='') {
			Z = E * II;
		} else {
			Z = E;
		}
		
		var C = (Z - (A * Math.pow((1 + ((B / 100) / CO)), D))) / N;
		
		var JJJ = Z * HH;
		document.write(currencyPad(A));
	} 

// **************************************************************
	
