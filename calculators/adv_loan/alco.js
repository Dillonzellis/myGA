// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

	var N = getValue(passed,'compound_option');
	if (N == 0)
	{
		document.write("Daily");
	}
	if (N == 1)
	{
		document.write("Weekly");
	}	
	if (N == 2)
	{
		document.write("Bi-Weekly");
	}
	if (N == 3)
	{
		document.write("Semi-Monthly");
	}
	if (N == 4)
	{
		document.write("Monthly");
	}
	if (N == 5)
	{
		document.write("Quarterly");
	}
	if (N == 6)
	{
		document.write("Semi-Annual");
	}
	if (N == 7)
	{
		document.write("Annual");
	}

// **************************************************************