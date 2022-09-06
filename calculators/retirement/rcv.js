// **************************************************************
// InterenetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// Help window.

function help(form) {

	window.open("rchelp.html","newWindow","toolbar=yes,location=0,directories=yes,status=no,menubar=1,scrollbars=yes,resizable=0,copyhistory=1,width=300,height=200,top=200,left=450");

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

	if (M != "") {
		if ((M < 0) || (M > 1000000000)) {
			alert("Please enter a numeric value between 0 and 1 billion (a 1 followed by nine zeroes).");
			form.Principal.focus();
			form.Principal.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.Principal.focus();
		form.Principal.select();
		return;
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

	if (M != "") {
		if ((M < 0) || (M > 40)) {
			alert("Please enter a numeric value between 0 and 40.");
			form.InterestRate.focus();
			form.InterestRate.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.InterestRate.focus();
		form.InterestRate.select();
		return;
	}
}

// **************************************************************

// Verification function for annual contribution.

function checkAC(form) {

	function checkNumber(input, msg) {

		var M = form.AnnualContribution.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.AnnualContribution.value;

	if (M != "") {
		if ((M < 0) || (M > 1000000000)) {
			alert("Please enter a numeric value between 0 and 1 billion (a 1 followed by nine zeroes).");
			form.AnnualContribution.focus();
			form.AnnualContribution.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.AnnualContribution.focus();
		form.AnnualContribution.select();
		return;
	}	
}

// **************************************************************

// Verification function for annual income.

function checkAI(form) {

	function checkNumber(input, msg) {

		var M = form.AnnualIncome.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.AnnualIncome.value;

	if (M != "") {
		if ((M < 0) || (M > 1000000000)) {
			alert("Please enter a numeric value between 0 and 1 billion (a 1 followed by nine zeroes).");
			form.AnnualIncome.focus();
			form.AnnualIncome.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.AnnualIncome.focus();
		form.AnnualIncome.select();
		return;
	}	
}

// **************************************************************

// Verification function for present age.

function checkPresAge(form) {

var PA = 0;
var RA = 0;
var WA = 0;

PA = form.PresentAge.value;
RA = form.RetirementAge.value;
WA = form.WithdrawalAge.value;

	function checkNumber(input, msg) {

		var M = form.PresentAge.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.PresentAge.value;

	if (M != "") {
		if ((M < 0) || (M > 70)) {
			alert("Please enter a numeric value between 0 and 70.");
			form.PresentAge.focus();
			form.PresentAge.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.PresentAge.focus();
		form.PresentAge.select();
		return;
	}	
}

// **************************************************************

// Verification function for retirement age.

function checkRetAge(form) {

var PA = 0;
var RA = 0;
var WA = 0;

PA = form.PresentAge.value;
RA = form.RetirementAge.value;
WA = form.WithdrawalAge.value;

	function checkNumber(input, msg) {

		var M = form.RetirementAge.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.RetirementAge.value;

	if (M != "") {
		if ((M < PA) || (M > 95)) {
			alert("Please enter a numeric value between your present age and 95.");
			form.RetirementAge.focus();
			form.RetirementAge.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.RetirementAge.focus();
		form.RetirementAge.select();
		return;
	}	
}

// **************************************************************

// Verification function for withdrawals ending age.

var DCS = 0

function checkWithAge(form) {

var PA = 0;
var RA = 0;
var WA = 0;

PA = form.PresentAge.value;
RA = form.RetirementAge.value;
WA = form.WithdrawalAge.value;

	function checkNumber(input, msg) {

		var M = form.WithdrawalAge.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.WithdrawalAge.value;

	if (M != "") {
		if ((M < RA) || (M > 105)) {
			alert("Please enter a numeric value between your retirement age and 105.");
			form.WithdrawalAge.focus();
			form.WithdrawalAge.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.WithdrawalAge.focus();
		form.WithdrawalAge.select();
		return;
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

	if (M != "") {
		if ((M < 0) || (M > 40)) {
			alert("Please enter a numeric value between 0 and 40.");
			form.InflationRate.focus();
			form.InflationRate.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.InflationRate.focus();
		form.InflationRate.select();
		return;
	}	
}

// **************************************************************

