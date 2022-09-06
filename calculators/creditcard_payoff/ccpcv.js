// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// Help window.

function help(form) {

	window.open("ccpchelp.html","newWindow","toolbar=yes,location=0,directories=yes,status=no,menubar=1,scrollbars=yes,resizable=0,copyhistory=1,width=300,height=200,top=200,left=450");

}

// **************************************************************

// Verification function for current payment.

function checkMP(form) {

	function checkNumber(input, msg) {

		var M = form.MonthlyPayment.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.MonthlyPayment.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.MonthlyPayment.focus();
		form.MonthlyPayment.select();
		return;
	}

	if (M != "") {
		if ((M < 0) || (M > 1000000000)) {
			alert("Please enter a numeric value between 0 and 1 billion (a 1 followed by nine zeroes).");
			form.MonthlyPayment.focus();
			form.MonthlyPayment.select();
		}
	}
}

// **************************************************************

// Verification function for principal amount.

var DCS = 0

function checkCCB(form) {

	function checkNumber(input, msg) {

		var M = form.CreditCardBalance.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.CreditCardBalance.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.CreditCardBalance.focus();
		form.CreditCardBalance.select();
		return;
	}

	if (M != "") {
		if ((M < 0) || (M > 1000000000)) {
			alert("Please enter a numeric value between 0 and 1 billion (a 1 followed by nine zeroes).");
			form.CreditCardBalance.focus();
			form.CreditCardBalance.select();
		}
	}
}

// **************************************************************

// Verification function for interest rate.

DCS = "Copyright &copy; 1998 - 2000 Desert Cactus Software Corporation."

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

