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
	document.write(currencyPad(A));
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
	document.write("</TR>");
		
	var KK = 0;
	var JJ = 0;
	var H = 0;
	var TV = 0;
	TV = A;
	B = SR;
	var N = Math.pow(1 + B / 1200, C);
	var Z = (TV * (B / 1200)) / (1 - (1 / N));
	
	for (var I = 1; I <= 6; I++)
	{
		H = I;
		KK = B / 1200 * A;
		JJ = Z - KK;
		A = A - JJ;
		if (A <= 100) { A = 0 }
		if (KK <= 0) { A = 0 }
										
		var PPP = currencyPad(JJ);
		var III = currencyPad(KK);
		var AAA = currencyPad(A);
	
		document.write("<TR>");
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(H);
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
		
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(PPP);
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
		
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(III);
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
		
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(AAA);
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
		document.write("</TR>");
	}
		
	for (I = 1; I <= NORC - 1; I++)	
	{
		H = I + NORC;
		B = SR + (I * IR);
		var N = Math.pow(1 + B / 1200, C);
		var Z = (TV * (B / 1200)) / (1 - (1 / N));
		for (var L = (1 + (NORC * 6)); L <= (6 + (NORC * 6)); L++)
		{
			H = L - (NORC * 6) + (6 * I);
			KK = B / 1200 * A;
			JJ = Z - KK;
			A = A - JJ;
			
			if (A <= .25) { A = 0 }
			if (KK <= 0) { A = 0 }
					
			var PPP = currencyPad(JJ);
			var III = currencyPad(KK);
			var AAA = currencyPad(A);
		
			document.write("<TR>");
			document.write("<TD BGCOLOR=#EEFFEE>");
			document.write("<span class=FontFour>");
			document.write("<CENTER>");
			document.write(H);
			document.write("</CENTER>");
			document.write("</span>");
			document.write("</TD>");
			
			document.write("<TD BGCOLOR=#EEFFEE>");
			document.write("<span class=FontFour>");
			document.write("<CENTER>");
			document.write(PPP);
			document.write("</CENTER>");
			document.write("</span>");
			document.write("</TD>");
			
			document.write("<TD BGCOLOR=#EEFFEE>");
			document.write("<span class=FontFour>");
			document.write("<CENTER>");
			document.write(III);
			document.write("</CENTER>");
			document.write("</span>");
			document.write("</TD>");
				
			document.write("<TD BGCOLOR=#EEFFEE>");
			document.write("<span class=FontFour>");
			document.write("<CENTER>");
			document.write(AAA);
			document.write("</CENTER>");
			document.write("</span>");
			document.write("</TD>");
			document.write("</TR>");
		}
	}
		
	B = ER;
	var N = Math.pow(1 + B / 1200, C);
	var Z = (TV * (B / 1200)) / (1 - (1 / N));
	
	for (var I = (7 + ((NORC - 1) * 6)); I <= C; I++)
	{
		H = I;
		KK = B / 1200 * A;
		JJ = Z - KK;
		A = A - JJ;
		if (A <= 100) { A = 0 }
		if (KK <= 0) { A = 0 }
		if (KK <= .01) {
			break;
		}
				
		var PPP = currencyPad(JJ);
		var III = currencyPad(KK);
		var AAA = currencyPad(A);
		
		document.write("<TR>");
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(H);
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
		
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(PPP);
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
		
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(III);
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
		
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(AAA);
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