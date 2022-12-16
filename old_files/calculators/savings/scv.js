// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// Help window.

function help(form) {

	window.open("schelp.html","newWindow","toolbar=yes,location=0,directories=yes,status=no,menubar=1,scrollbars=yes,resizable=0,copyhistory=1,width=300,height=200,top=200,left=450");

}

// **************************************************************

// Verification function for beginning balance.

function checkBB(form) {

	function checkNumber(input, msg) {

		var M = form.BeginningBalance.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.BeginningBalance.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.BeginningBalance.focus();
		form.BeginningBalance.select();
		return;
	}

	if (M != "") {
		if ((M < 0) || (M > 1000000000)) {
			alert("Please enter a numeric value between 0 and 1 billion (a 1 followed by nine zeroes).");
			form.BeginningBalance.focus();
			form.BeginningBalance.select();
		}
	}
}

// **************************************************************

// Verification function for interest rate.

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

// Verification function for periodic contribution.

function checkPC(form) {

	function checkNumber(input, msg) {

		var M = form.PeriodicContribution.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.PeriodicContribution.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.PeriodicContribution.focus();
		form.PeriodicContribution.select();
		return;
	}	

	if (M != "") {
		if ((M < 0) || (M > 1000000000)) {
			alert("Please enter a numeric value between 0 and 1 billion (a 1 followed by nine zeroes).");
			form.PeriodicContribution.focus();
			form.PeriodicContribution.select();
		}
	}
}

// **************************************************************

// Verification function for number of periods.

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
		if ((M < 0) || (M > 600)) {
			alert("Please enter a numeric value between 0 and 600.");
			form.NumberOfPeriods.focus();
			form.NumberOfPeriods.select();
		}
	}
}

// **************************************************************

// Verification function for ending balance.

var DCS = 0

function checkEB(form) {

	function checkNumber(input, msg) {

		var M = form.EndingBalance.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.EndingBalance.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.EndingBalance.focus();
		form.EndingBalance.select();
		return;
	}

	if (M != "") {
		if ((M < 0) || (M > 1000000000)) {
			alert("Please enter a numeric value between 0 and 1 billion (a 1 followed by nine zeroes).");
			form.EndingBalance.focus();
			form.EndingBalance.select();
		}
	}
}

// **************************************************************

// Verification function for inflation rate.

DCS = "Copyright &copy; 1998 - 2000 Desert Cactus Software Corporation."

function checkInf(form) {

	function checkNumber(input, msg) {

		var M = form.InflationRate.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.InflationRate.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.InflationRate.focus();
		form.InflationRate.select();
		return;
	}	

	if (M != "") {
		if ((M < 0) || (M > 40)) {
			alert("Please enter a numeric value between 0 and 40.");
			form.InflationRate.focus();
			form.InflationRate.select();
		}
	}
}

// **************************************************************
