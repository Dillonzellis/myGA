// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// APR CACLUATION.

// **************************************************************

// BASE CALCULATION.

// Step 1.

I1 = I;

i = (I1 / 1200);

// Summation for step 1.

for (COUNTER = 0; COUNTER <= (TOTPER - 1); COUNTER++)
	{
		Q2 = 1 / Math.pow((1 + i), COUNTER);
		Q1 = (Q1 + Q2);
	}

A1 = (PMT * Q1) / (1 + i);

// **************************************************************

// Step 2.

I2 = .1 + Math.abs(I1);

j = (I2 / 1200);

// Summation for step 2.

for (COUNTER = 0; COUNTER <= (TOTPER - 1); COUNTER++)
	{
		R2 = 1 / Math.pow((1 + j), COUNTER);
		R1 = (R1 + R2);
	}

A2 = (PMT * R1) / (1 + j);

// **************************************************************

// Step 3.

// First, equate the old I to a check value, II.

II = I;

// Interpolation for the new I.

I = Math.abs(((A - A1) / (A2 - A1)) / 10) + Math.abs(I1);

// Equate I1 to the new I.

I1 = I;

// **************************************************************

// FIRST ITERATION.

// Conditional for first iteration.

if (II < I) {

// **************************************************************

// Reset variables.

i = 0;
j = 0;
Q1 = 0;
Q2 = 0;
R1 = 0;
R2 = 0;

// **************************************************************

// Step 1.

I1 = I;

i = (I1 / 1200);

// Summation for step 1.

for (COUNTER = 0; COUNTER <= (TOTPER - 1); COUNTER++)
	{
		Q2 = 1 / Math.pow((1 + i), COUNTER);
		Q1 = (Q1 + Q2);
	}

A1 = (PMT * Q1) / (1 + i);

// **************************************************************

// Step 2.

I2 = .1 + Math.abs(I1);

j = (I2 / 1200);

// Summation for step 2.

for (COUNTER = 0; COUNTER <= (TOTPER - 1); COUNTER++)
	{
		R2 = 1 / Math.pow((1 + j), COUNTER);
		R1 = (R1 + R2);
	}

A2 = (PMT * R1) / (1 + j);

// **************************************************************

// Step 3.

// First, equate the old I to a check value, II.

II = I;

// Interpolation for the new I.

I = Math.abs(((A - A1) / (A2 - A1)) / 10) + Math.abs(I1);

// Equate I1 to the new I.

I1 = I;

// **************************************************************

// Ending brace for first conditional.

}

// **************************************************************

// SECOND ITERATION.

// Conditional for second iteration.

if (II < I) {

// **************************************************************

// Reset variables.

i = 0;
j = 0;
Q1 = 0;
Q2 = 0;
R1 = 0;
R2 = 0;

// **************************************************************

// Step 1.

I1 = I;

i = (I1 / 1200);

// Summation for step 1.

for (COUNTER = 0; COUNTER <= (TOTPER - 1); COUNTER++)
	{
		Q2 = 1 / Math.pow((1 + i), COUNTER);
		Q1 = (Q1 + Q2);
	}

A1 = (PMT * Q1) / (1 + i);

// **************************************************************

// Step 2.

I2 = .1 + Math.abs(I1);

j = (I2 / 1200);

// Summation for step 2.

for (COUNTER = 0; COUNTER <= (TOTPER - 1); COUNTER++)
	{
		R2 = 1 / Math.pow((1 + j), COUNTER);
		R1 = (R1 + R2);
	}

A2 = (PMT * R1) / (1 + j);

// **************************************************************

// Step 3.

// First, equate the old I to a check value, II.

II = I;

// Interpolation for the new I.

I = Math.abs(((A - A1) / (A2 - A1)) / 10) + Math.abs(I1);

// Equate I1 to the new I.

I1 = I;

// **************************************************************

// Ending brace for second conditional.

}

// **************************************************************

// THIRD ITERATION.

// Conditional for third iteration.

if (II < I) {

// **************************************************************

// Reset variables.

i = 0;
j = 0;
Q1 = 0;
Q2 = 0;
R1 = 0;
R2 = 0;

// **************************************************************

// Step 1.

I1 = I;

i = (I1 / 1200);

// Summation for step 1.

for (COUNTER = 0; COUNTER <= (TOTPER - 1); COUNTER++)
	{
		Q2 = 1 / Math.pow((1 + i), COUNTER);
		Q1 = (Q1 + Q2);
	}

A1 = (PMT * Q1) / (1 + i);

// **************************************************************

// Step 2.

I2 = .1 + Math.abs(I1);

j = (I2 / 1200);

// Summation for step 2.

for (COUNTER = 0; COUNTER <= (TOTPER - 1); COUNTER++)
	{
		R2 = 1 / Math.pow((1 + j), COUNTER);
		R1 = (R1 + R2);
	}

A2 = (PMT * R1) / (1 + j);

// **************************************************************

// Step 3.

// First, equate the old I to a check value, II.

II = I;

// Interpolation for the new I.

I = Math.abs(((A - A1) / (A2 - A1)) / 10) + Math.abs(I1);

// Equate I1 to the new I.

I1 = I;

// **************************************************************

// Ending brace for third conditional.

}

// **************************************************************

// FOURTH ITERATION.

// Conditional for fourth iteration.

if (II < I) {

// **************************************************************

// Reset variables.

i = 0;
j = 0;
Q1 = 0;
Q2 = 0;
R1 = 0;
R2 = 0;

// **************************************************************

// Step 1.

I1 = I;

i = (I1 / 1200);

// Summation for step 1.

for (COUNTER = 0; COUNTER <= (TOTPER - 1); COUNTER++)
	{
		Q2 = 1 / Math.pow((1 + i), COUNTER);
		Q1 = (Q1 + Q2);
	}

A1 = (PMT * Q1) / (1 + i);

// **************************************************************

// Step 2.

I2 = .1 + Math.abs(I1);

j = (I2 / 1200);

// Summation for step 2.

for (COUNTER = 0; COUNTER <= (TOTPER - 1); COUNTER++)
	{
		R2 = 1 / Math.pow((1 + j), COUNTER);
		R1 = (R1 + R2);
	}

A2 = (PMT * R1) / (1 + j);

// **************************************************************

// Step 3.

// First, equate the old I to a check value, II.

II = I;

// Interpolation for the new I.

I = Math.abs(((A - A1) / (A2 - A1)) / 10) + Math.abs(I1);

// Equate I1 to the new I.

I1 = I;

// **************************************************************

// Ending brace for fourth conditional.

}

// **************************************************************

// FIFTH ITERATION.

// Conditional for fifth iteration.

if (II < I) {

// **************************************************************

// Reset variables.

i = 0;
j = 0;
Q1 = 0;
Q2 = 0;
R1 = 0;
R2 = 0;

// **************************************************************

// Step 1.

I1 = I;

i = (I1 / 1200);

// Summation for step 1.

for (COUNTER = 0; COUNTER <= (TOTPER - 1); COUNTER++)
	{
		Q2 = 1 / Math.pow((1 + i), COUNTER);
		Q1 = (Q1 + Q2);
	}

A1 = (PMT * Q1) / (1 + i);

// **************************************************************

// Step 2.

I2 = .1 + Math.abs(I1);

j = (I2 / 1200);

// Summation for step 2.

for (COUNTER = 0; COUNTER <= (TOTPER - 1); COUNTER++)
	{
		R2 = 1 / Math.pow((1 + j), COUNTER);
		R1 = (R1 + R2);
	}

A2 = (PMT * R1) / (1 + j);

// **************************************************************

// Step 3.

// First, equate the old I to a check value, II.

II = I;

// Interpolation for the new I.

I = Math.abs(((A - A1) / (A2 - A1)) / 10) + Math.abs(I1);

// Equate I1 to the new I.

I1 = I;

// **************************************************************

// Ending brace for fifth conditional.

}


// **************************************************************

APR = I;

document.write(roundingPad(APR)+"%");

// **************************************************************