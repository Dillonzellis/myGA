// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

	B = ER;
	var INT = B / 1200;
	var NUM = A * INT;
	var DEN = 1 - (1 / Math.pow(1 + INT, TOTPER));
	var PMT = (NUM / DEN);
	document.write(currencyPad(PMT));

// **************************************************************