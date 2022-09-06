// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

var DCS = 0

DCS = "Copyright &copy; 1998 - 2001 Desert Cactus Software Corporation."

function getValue(string,value) {

	var startPos = string.indexOf(value + "=");
	if (startPos > -1) {
		startPos = startPos + value.length + 1;
		var endPos = string.indexOf("&",startPos);
		if (endPos == -1)
			endPos = string.length;
		return unescape(string.substring(startPos,endPos));
	}
	return '';
}

var passed = location.search.substring(1);

// **************************************************************
