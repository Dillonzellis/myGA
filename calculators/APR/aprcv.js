// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// Help window.

function help(form) {

	window.open("aprchelp.html","newWindow","toolbar=yes,location=0,directories=yes,status=no,menubar=1,scrollbars=yes,resizable=0,copyhistory=1,width=300,height=200,top=200,left=450");

}

// **************************************************************

// Verification function for loan amount.

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

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.LoanAmount.focus();
		form.LoanAmount.select();
		return;
	}

	if (M != "") {
		if ((M < 0) || (M > 1000000000)) {
			alert("Please enter a numeric value between 0 and 1 billion (a 1 followed by nine zeroes).");
			form.LoanAmount.focus();
			form.LoanAmount.select();
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

// Verification function for number of years.

function checkNY(form) {

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

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.NumberOfYears.focus();
		form.NumberOfYears.select();
		return;
	}	

	if (M != "") {
		if ((M < 0) || (M > 18250)) {
			alert("Please enter a numeric value between 0 and 18,250.");
			form.NumberOfYears.focus();
			form.NumberOfYears.select();
		}
	}
}

// **************************************************************

// Verification function for prepaid interest.

var DCS = 0

function checkPPI(form) {

	function checkNumber(input, msg) {

		var M = form.PrepaidInterest.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.PrepaidInterest.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.PrepaidInterest.focus();
		form.PrepaidInterest.select();
		return;
	}

	if (M != "") {
		if ((M < 0) || (M > 1000000000)) {
			alert("Please enter a numeric value between 0 and 1 billion (a 1 followed by nine zeroes).");
			form.PrepaidInterest.focus();
			form.PrepaidInterest.select();
		}
	}
}

// **************************************************************

// Verification function for lender's fees.

DCS = "Copyright &copy; 1998 - 2000 Desert Cactus Software Corporation."

function checkLF(form) {

	function checkNumber(input, msg) {

		var M = form.LendersFees.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.LendersFees.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.LendersFees.focus();
		form.LendersFees.select();
		return;
	}

	if (M != "") {
		if ((M < 0) || (M > 1000000000)) {
			alert("Please enter a numeric value between 0 and 1 billion (a 1 followed by nine zeroes).");
			form.LendersFees.focus();
			form.LendersFees.select();
		}
	}
}

// **************************************************************