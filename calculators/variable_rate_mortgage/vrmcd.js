// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// (1) Initialize interest rate for each six-month period.
// (2) Interest rate per period (static at 12 payments
//     per year).
// (3) Calculate payment for each six-month period.


	for (I = 1; I <= NORC - 1; I++)
		{
			B = SR + (I * IR);
			var INT = B / 1200;
			var NUM = A * INT;
			var DEN = 1 - (1 / Math.pow(1 + INT, TOTPER));
			var PMT = (NUM / DEN);
						
			document.write("<TR>");
			document.write("<TD BGCOLOR=#EEEEEE>");
			document.write("<span class=FontFour>");
			document.write("Monthly Payment (next six months):");
			document.write("</span>");
			document.write("</TD>");
			document.write("<TD BGCOLOR=#EEFFEE>");
			document.write("<span class=FontFour>");
			document.write(currencyPad(PMT));
			document.write("</span>");
			document.write("</TD>");
			document.write("</TR>");
		}


// **************************************************************

// Total amount in payments, thus far.

	var TOTPMT = 6 * PMT;

// **************************************************************