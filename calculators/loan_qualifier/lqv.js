// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// Initialize income and debt ratios.

var M = 0;
var N = 0;

M = 28.0;
N = 36.0;

// **************************************************************

// Help window.

function help(form) {

	window.open("lqhelp.html","newWindow","toolbar=yes,location=0,directories=yes,status=no,menubar=1,scrollbars=yes,resizable=0,copyhistory=1,width=300,height=200,top=200,left=450");

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

// Verification function for number of months.

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

	if (M != "") {
		if ((M < 0) || (M > 600)) {
			alert("Please enter a numeric value between 0 and 600.");
			form.NumberOfMonths.focus();
			form.NumberOfMonths.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.NumberOfMonths.focus();
		form.NumberOfMonths.select();
		return;
	}	
}

// **************************************************************

// Verification function for buyer's monthly income.

function checkB(form) {

	function checkNumber(input, msg) {

		var M = form.BuyersMonthlyIncome.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.BuyersMonthlyIncome.value;

	if (M != "") {
		if ((M < 0) || (M > 1000000)) {
			alert("Please enter a numeric value between 0 and 1 million (a 1 followed by six zeroes).");
			form.BuyersMonthlyIncome.focus();
			form.BuyersMonthlyIncome.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.BuyersMonthlyIncome.focus();
		form.BuyersMonthlyIncome.select();
		return;
	}	
}

// **************************************************************

// Verification function for real estate liabilities.

function checkREL(form) {

	function checkNumber(input, msg) {

		var M = form.RealEstateLiabilities.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.RealEstateLiabilities.value;

	if (M != "") {
		if ((M < 0) || (M > 1000000)) {
			alert("Please enter a numeric value between 0 and 1 million (a 1 followed by six zeroes).");
			form.RealEstateLiabilities.focus();
			form.RealEstateLiabilities.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.RealEstateLiabilities.focus();
		form.RealEstateLiabilities.select();
		return;
	}	
}

// **************************************************************

// Verification function for homeowner's insurance.

function checkHI(form) {

	function checkNumber(input, msg) {

		var M = form.HomeownersInsurance.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.HomeownersInsurance.value;

	if (M != "") {
		if ((M < 0) || (M > 1000000)) {
			alert("Please enter a numeric value between 0 and 1 million (a 1 followed by six zeroes).");
			form.HomeownersInsurance.focus();
			form.HomeownersInsurance.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.HomeownersInsurance.focus();
		form.HomeownersInsurance.select();
		return;
	}	
}

// **************************************************************

// Verification function for PMI and HOA dues.

function checkPMI(form) {

	function checkNumber(input, msg) {

		var M = form.PMIandHOADues.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.PMIandHOADues.value;

	if (M != "") {
		if ((M < 0) || (M > 1000000)) {
			alert("Please enter a numeric value between 0 and 1 million (a 1 followed by six zeroes).");
			form.PMIandHOADues.focus();
			form.PMIandHOADues.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.PMIandHOADues.focus();
		form.PMIandHOADues.select();
		return;
	}	
}

// **************************************************************

// Verification function for other housing debt.

function checkOHD(form) {

	function checkNumber(input, msg) {

		var M = form.OtherHousingDebt.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.OtherHousingDebt.value;

	if (M != "") {
		if ((M < 0) || (M > 1000000)) {
			alert("Please enter a numeric value between 0 and 1 million (a 1 followed by six zeroes).");
			form.OtherHousingDebt.focus();
			form.OtherHousingDebt.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.OtherHousingDebt.focus();
		form.OtherHousingDebt.select();
		return;
	}	
}

// **************************************************************

// Verification function for car payments.

function checkCP(form) {

	function checkNumber(input, msg) {

		var M = form.CarPayments.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.CarPayments.value;

	if (M != "") {
		if ((M < 0) || (M > 1000000)) {
			alert("Please enter a numeric value between 0 and 1 million (a 1 followed by six zeroes).");
			form.CarPayments.focus();
			form.CarPayments.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.CarPayments.focus();
		form.CarPayments.select();
		return;
	}	
}

// **************************************************************

// Verification function for credit card payments.

function checkCCP(form) {

	function checkNumber(input, msg) {

		var M = form.CreditCardPayments.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.CreditCardPayments.value;

	if (M != "") {
		if ((M < 0) || (M > 1000000)) {
			alert("Please enter a numeric value between 0 and 1 million (a 1 followed by six zeroes).");
			form.CreditCardPayments.focus();
			form.CreditCardPayments.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.CreditCardPayments.focus();
		form.CreditCardPayments.select();
		return;
	}	
}

// **************************************************************

// Verification function for child care expenses.

var DCS = 0

function checkCCE(form) {

	function checkNumber(input, msg) {

		var M = form.ChildCareExpenses.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.ChildCareExpenses.value;

	if (M != "") {
		if ((M < 0) || (M > 1000000)) {
			alert("Please enter a numeric value between 0 and 1 million (a 1 followed by six zeroes).");
			form.ChildCareExpenses.focus();
			form.ChildCareExpenses.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.ChildCareExpenses.focus();
		form.ChildCareExpenses.select();
		return;
	}	
}

// **************************************************************

// Verification function for other non-housing debt.

DCS = "Copyright &copy; 1998 - 2000 Desert Cactus Software Corporation."

function checkONHD(form) {

	function checkNumber(input, msg) {

		var M = form.OtherNonHousingDebt.value;

			for (var I = 0; I < M.length; I++) {
				var J = M.substring(I, I + 1);
				if ((J < "0" || J > "9") && J != "." && J != "") {
				alert(msg);
				return false;
			}
		}

	return true;

	}

	var M = form.OtherNonHousingDebt.value;

	if (M != "") {
		if ((M < 0) || (M > 1000000)) {
			alert("Please enter a numeric value between 0 and 1 million (a 1 followed by six zeroes).");
			form.OtherNonHousingDebt.focus();
			form.OtherNonHousingDebt.select();
		}
	}

	if (!checkNumber(M, "Please enter a valid numeric expression.")) {
		form.OtherNonHousingDebt.focus();
		form.OtherNonHousingDebt.select();
		return;
	}	
}

// **************************************************************
