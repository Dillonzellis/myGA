// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// Help window.

function help(form) {

	window.open("rfchelp.html","newWindow","toolbar=yes,location=0,directories=yes,status=no,menubar=1,scrollbars=yes,resizable=0,copyhistory=1,width=300,height=200,top=200,left=450");

}

// **************************************************************

// Verification function for current payment.

function checkCP(form) {

	function checkNumber(input, msg) {

		var M = form.CurrentPayment.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.CurrentPayment.value;

	if (M != "") {
		if ((M < 0) || (M > 1000000000)) {
			alert("Please enter a numeric value between 0 and 1 billion (a 1 followed by nine zeroes).");
			form.CurrentPayment.focus();
			form.CurrentPayment.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.CurrentPayment.focus();
		form.CurrentPayment.select();
		return;
	}
}

// **************************************************************

// Verification function for principal amount.

function checkLA(form) {

	function checkNumber(input, msg) {

		var M = form.LoanAmount.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.LoanAmount.value;

	if (M != "") {
		if ((M < 0) || (M > 1000000000)) {
			alert("Please enter a numeric value between 0 and 1 billion (a 1 followed by nine zeroes).");
			form.LoanAmount.focus();
			form.LoanAmount.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.LoanAmount.focus();
		form.LoanAmount.select();
		return;
	}
}

// **************************************************************

// Verification function for number of years.

function checkY(form) {

	function checkNumber(input, msg) {

		var M = form.NumberOfYears.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.NumberOfYears.value;

	if (M != "") {
		if ((M < 0) || (M > 600)) {
			alert("Please enter a numeric value between 0 and 600.");
			form.NumberOfYears.focus();
			form.NumberOfYears.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.NumberOfYears.focus();
		form.NumberOfYears.select();
		return;
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

// Verification function for mortgage closing costs.

DCS = "Copyright &copy; 1998 - 2000 Desert Cactus Software Corporation."

function checkMCC(form) {

	function checkNumber(input, msg) {

		var M = form.MortgageClosingCosts.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.MortgageClosingCosts.value;

	if (M != "") {
		if ((M < 0) || (M > 1000000000)) {
			alert("Please enter a numeric value between 0 and 1 billion (a 1 followed by nine zeroes).");
			form.MortgageClosingCosts.focus();
			form.MortgageClosingCosts.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.MortgageClosingCosts.focus();
		form.MortgageClosingCosts.select();
		return;
	}
}

// **************************************************************

