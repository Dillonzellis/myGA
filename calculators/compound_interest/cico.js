// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

	var E = getValue(passed,'compound_option');
	if (E == 0) {
		document.write("Daily");
	}	
	if (E == 1) {
		document.write("Weekly");
	}
	if (E == 2) {
		document.write("Bi-Weekly");
	}
	if (E == 3) {
		document.write("Semi-Monthly");
	}
	if (E == 4) {
		document.write("Monthly");
	}
	if (E == 5) {
		document.write("Quarterly");
	}
	if (E == 6) {
		document.write("Semi-Annual");
	}
	if (E == 7) {
		document.write("Annual");
	}

// **************************************************************
