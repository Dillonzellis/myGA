// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// Help window.

function help(form) {

	window.open("clchelp.html","newWindow","toolbar=yes,location=0,directories=yes,status=no,menubar=1,scrollbars=yes,resizable=0,copyhistory=1,width=300,height=200,top=200,left=450");

}

// **************************************************************

// Verification function for cost of vehicle.

function checkCOV(form) {

	function checkNumber(input, msg) {

		var M = form.CostOfVehicle.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.CostOfVehicle.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.CostOfVehicle.focus();
		form.CostOfVehicle.select();
		return;
	}

	if (M != "") {
		if ((M < 0) || (M > 250000)) {
			alert("Please enter a numeric value between 0 and 250,000 (without the comma).");
			form.CostOfVehicle.focus();
			form.CostOfVehicle.select();
		}
	}
}

// **************************************************************

// Verification function for the down payment.

function checkDP(form) {

	function checkNumber(input, msg) {

		var M = form.DownPayment.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.DownPayment.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.DownPayment.focus();
		form.DownPayment.select();
		return;
	}

	if (M != "") {
		if ((M < 0) || (M > 250000)) {
			alert("Please enter a numeric value between 0 and 250,000 (without the comma).");
			form.DownPayment.focus();
			form.DownPayment.select();
		}
	}
}

// **************************************************************

// Verification function for the trade-in value of previous vehicle.

function checkTIV(form) {

	function checkNumber(input, msg) {

		var M = form.TradeInValue.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.TradeInValue.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.TradeInValue.focus();
		form.TradeInValue.select();
		return;
	}

	if (M != "") {
		if ((M < 0) || (M > 250000)) {
			alert("Please enter a numeric value between 0 and 250,000 (without the comma).");
			form.TradeInValue.focus();
			form.TradeInValue.select();
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

// Verification function for number of months.

var DCS = 0

function checkM(form) {

	function checkNumber(input, msg) {

		var M = form.NumberOfMonths.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.NumberOfMonths.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.NumberOfMonths.focus();
		form.NumberOfMonths.select();
		return;
	}	

	if (M != "") {
		if ((M < 0) || (M > 120)) {
			alert("Please enter a numeric value between 0 and 120.");
			form.NumberOfMonths.focus();
			form.NumberOfMonths.select();
		}
	}
}

// **************************************************************

// Verification function for additional principal.

DCS = "Copyright &copy; 1998 - 2000 Desert Cactus Software Corporation."

function checkAD(form) {

	function checkNumber(input, msg) {

		var M = form.AdditionalPrincipal.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.AdditionalPrincipal.value;

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.AdditionalPrincipal.focus();
		form.AdditionalPrincipal.select();
		return;
	}	

	if (M != "") {
		if ((M < 0) || (M > 250000)) {
			alert("Please enter a numeric value between 0 and 250,000 (without the comma).");
			form.AdditionalPrincipal.focus();
			form.AdditionalPrincipal.select();
		}
	}
}

// **************************************************************
