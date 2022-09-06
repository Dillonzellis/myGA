// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// Help window.

function help(form) {

	window.open("cichelp.html","newWindow","toolbar=yes,location=0,directories=yes,status=no,menubar=1,scrollbars=yes,resizable=0,copyhistory=1,width=300,height=200,top=200,left=450");

}

// **************************************************************

// Verification function for principal.

function checkPR(form) {

	function checkNumber(input, msg) {

		var M = form.Principal.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.Principal.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.Principal.focus();
		form.Principal.select();
		return;
	}

	if (M != "") {
		if ((M < 0) || (M > 1000000000)) {
			alert("Please enter a numeric value between 0 and 1 billion (a 1 followed by nine zeroes).");
			form.Principal.focus();
			form.Principal.select();
		}
	}
}

// **************************************************************

// Verification function for interest rate.

var DCS = 0

function checkIR(form) {

	function checkNumber(input, msg) {

		var M = form.InterestRate.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.InterestRate.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.InterestRate.focus();
		form.InterestRate.select();
		return;
	}

	if (M != "") {
		if ((M < 0) || (M > 40)) {
			alert("Please enter a numeric value between 0 and 40.");
			form.InterestRate.focus();
			form.InterestRate.select();
		}
	}
}

// **************************************************************

// Verification function for number of periods.

DCS = "Copyright &copy; 1998 - 2000 Desert Cactus Software Corporation."

function checkNP(form) {

	function checkNumber(input, msg) {

		var M = form.NumberOfPeriods.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.NumberOfPeriods.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.NumberOfPeriods.focus();
		form.NumberOfPeriods.select();
		return;
	}	

	if (M != "") {
		if ((M < 0) || (M > 18250)) {
			alert("Please enter a numeric value between 0 and 18,250.");
			form.NumberOfPeriods.focus();
			form.NumberOfPeriods.select();
		}
	}
}

// **************************************************************
