// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

	document.write("<CENTER>");
	document.write("<TABLE Border=1 Cellpadding=7>");

	document.write("<TR>");
	document.write("<TD COLSPAN=3 BGCOLOR=#FFFFEE>");
	document.write("<span class=FontTwo>");
	document.write("<CENTER>");
	document.write("<STRONG>Savings Schedule</STRONG>");
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
	document.write("</TR>");

	document.write("<TR>");
	document.write("<TD BGCOLOR=#EEEEEE>");
	document.write("<span class=FontFour>");
	document.write("<CENTER>");
	document.write("<STRONG>Number</STRONG>");
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
	document.write("<STRONG>Total</STRONG>");
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
	document.write(currencyPad(A));
	document.write("</CENTER>");
	document.write("</span>");
	document.write("</TD>");
	document.write("</TR>");

	var G = 0;
	var M = 0;
	var N = 0;
	var MM = 0;
	var NN = 0;
	var AA = A;
	var UU = 0;
	var ZZ = 0;
									
	for (I = 0; I <= D - 1; I++)
	{
		G = I + 1;
		UU = C * (Math.pow((1 + (H / (CO * 100))), G - 1));
		AA = AA * (1 + ((B / 100) / CO));		
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
		document.write(currencyPad(ZZ));
		document.write("</CENTER>");
		document.write("</span>");
		document.write("</TD>");
		document.write("</TR>");
			
	}
			
		document.write("</TABLE>");
		document.write("<BR>");
			
		document.write("<span class=FontFive>");
		document.write("PLEASE NOTE: The effect of " +roundingPad((F*100.00)/100)+ "% annual inflation over " +D+ " " +strZ+ " translates " +currencyPad(ZZ)+ " into " +currencyPad(JJJ)+ " in today's dollars."); 
		document.write("</span>");

// **************************************************************