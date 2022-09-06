// **************************************************************
// InterenetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

	document.write("<CENTER>");
	document.write("<TABLE Border=1 Cellpadding=7>");

	document.write("<TR>");
	document.write("<TD COLSPAN=4 BGCOLOR=#FFFFEE>");
	document.write("<span class=FontTwo>");
	document.write("<CENTER>");
	document.write("<STRONG>Retirement Schedule</STRONG>");
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
	document.write("</TR>");

	document.write("<TR>");
	document.write("<TD BGCOLOR=#EEEEEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write("<STRONG>Age</STRONG>");
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
		
	document.write("<TD BGCOLOR=#EEEEEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write("<STRONG>Deposit</STRONG>");
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
		
	document.write("<TD BGCOLOR=#EEEEEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write("<STRONG>Income</STRONG>");
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
			
	document.write("<TD BGCOLOR=#EEEEEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write("<STRONG>Balance</STRONG>");
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
		
	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write("$0.00");
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
		
	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write("$0.00");
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
			
	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	if (SO == 0) {
		document.write(currencyPad(A));
	}
	if (SO == 1) {
		document.write(currencyPad(A));
	}
	if (SO == 2) {
		document.write(currencyPad(Z));
	}
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
	document.write("</TR>");
			
	document.write("<BR>");

	var G = 0;
	var M = 0;
	var N = 0;
	var MM = 0;
	var NN = 0;
	
	if (SO == 0) {
		var AA = A;
	}
	if (SO == 1) {
		var AA = A;
	}
	if (SO == 2) {
		var AA = Z;
	}
	
	if (SO == 0) {
		var UU = C;
	}
	if (SO == 1) {
		var UU = Z;
	}
	if (SO == 2) {
		var UU = C;
	}
						
	document.write("<TR>");
	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write(PA);
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
	
	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write(currencyPad(UU));
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
	
	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write(currencyPad(MM));
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");

	if (SO == 0) {
		AA = (AA * (1 + (B / 100))) + Math.abs(C);
	}
	if (SO == 1) {
		AA = (AA * (1 + (B / 100))) + Math.abs(UU);
	}
	if (SO == 2) {
		AA = (AA * (1 + (B / 100))) + Math.abs(C);
	}

	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write(currencyPad(AA));
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
	document.write("</TR>");
			
	PA = parseInt(PA);
	
	for (I = PA; I <= RA - 2; I++)

	{
		G = I + 1;
				
		if (SO == 0) {
			UU = C * Math.pow(( 1 + (EE / 100)), G - PA);
		}
		if (SO == 1) {
			UU = Z * Math.pow(( 1 + (EE / 100)), G - PA);
		}
		if (SO == 2) {
			UU = C * Math.pow(( 1 + (EE / 100)), G - PA);
		}
												
		AA = AA * (1 + (B / 100));
				
		MM = 0;
				
		ZZ = AA + UU;
				
		AA = ZZ;

		document.write("<TR>");
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(G);
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
		
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(currencyPad(UU));
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
			
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(currencyPad(MM));
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
			
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(currencyPad(ZZ));
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
		document.write("</TR>");
			
	}
			
	var G = 0;
	var M = 0;
	var N = 0;
	if (SO == 0) {
		var MM = DDD;
	}
	if (SO == 1) {
		var MM = D;
	}
	if (SO == 2) {
		var MM = D;
	}
	var NN = 0;
	var AA = A;
	var UU = 0;

// *******************

	document.write("<TR>");
	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write(RA);
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
		
	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write(currencyPad(UU));
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
		
	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write(currencyPad(MM));
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
			
	ZZ = (ZZ * (1 + (B / 100))) - (MM * (1 + (B / 100)));

	document.write("<TD BGCOLOR=#EEFFEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write(currencyPad(ZZ));
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
	document.write("</TR>");
			
	RA = parseInt(RA);
						
	for (I = RA; I <= WA - 2; I++)
			
	{
		G = I + 1;
				
		UU = 0;
											
		AA = AA * (1 + (B / 100));
				
		MM = MM * (1 + (E / 100));
				
		ZZ = (ZZ * (1 + (B / 100))) - (MM * (1 + (B / 100)));
			
		AA = ZZ;
				
		if (ZZ <= MM) { ZZ = 0 }

		document.write("<TR>");
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(G);
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
		
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(currencyPad(UU));
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
			
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(currencyPad(MM));
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
			
		document.write("<TD BGCOLOR=#EEFFEE>");
		document.write("<span class=FontFour>");
		document.write("<CENTER>");
		document.write(currencyPad(ZZ));
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
		document.write("</TR>");
			
	}
							
	document.write("</TABLE>");

// **************************************************************