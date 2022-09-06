// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

	var ZZZ = getValue(passed, 'calculate_option');
	if (ZZZ == 1) {

	document.write("<CENTER>");
	document.write("<TABLE Border=1 Cellpadding=7>");

	document.write("<TR>");
	document.write("<TD COLSPAN=4 BGCOLOR=#FFFFEE>");
	document.write("<span class=FontTwo>");
	document.write("<CENTER>");
	document.write("<STRONG>Amortization Schedule</STRONG>");
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
	document.write("</TR>");

	document.write("<TR>");
	document.write("<TD BGCOLOR=#EEEEEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write("<STRONG>Payment</STRONG>");
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
		
	document.write("<TD BGCOLOR=#EEEEEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write("<STRONG>Principal</STRONG>");
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
		
	document.write("<TD BGCOLOR=#EEEEEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write("<STRONG>Interest</STRONG>");
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
		
	document.write("<TD BGCOLOR=#EEEEEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write("<STRONG>Loan Balance</STRONG>");
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
	document.write("</TR>");

	document.write("<TR>");
	document.write("<TD BGCOLOR=#FFFFFF>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write("-");
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
		
	document.write("<TD BGCOLOR=#FFFFFF>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write("-");
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
		
	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write(""+roundingPad((B*100.00)/100)+"%");
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
		
	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write(currencyPad(A));
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
	document.write("</TR>");
		
	var KK = 0;
	var JJ = 0;
	var HH = 0;
						
	for (var I = 1; I <= H; I++) {

		HH = I;
			
		KK = INT * A;

		JJ = PMT - KK;
					
		A = A - JJ;
			
		if (A <= .25) { A = 0 }
		if (KK <= 0) { A = 0 }
			
	document.write("<TR>");
	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write(HH);
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
		
	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write(currencyPad(JJ));
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
		
	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write(currencyPad(KK));
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
		
	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write(currencyPad(A));
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
	document.write("</TR>");

	}

	document.write("</TABLE>");
	document.write("<BR>");
	document.write("<BR>");

	}

// **************************************************************