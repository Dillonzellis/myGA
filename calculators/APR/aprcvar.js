// **************************************************************
// InternetActive Calculators™
// Version 2.0
// Copyright © 1998 - 2001 Desert Cactus Software Corporation
// **************************************************************

// DECLARE INPUT VARIABLES.

// Principal (basis of loan).

var BASIS = 0;

// Interest rate.

var INTEREST_RATE = 0;

// Number of Years.

var NUMBER_OF_YEARS = 0;

// Origination fee.

var ORIGINATION_FEE = 0;

// Discount Points.

var DISCOUNT_POINTS = 0;

// Prepaid interest.

var PREPAID_INTEREST = 0;

// Lender's fees.

var LENDERS_FEES = 0;

// **************************************************************

// Obtain variables from input form.

BASIS = LA;

INTEREST_RATE = B;

NUMBER_OF_YEARS = C;

ORIGINATION_FEE = D;

DISCOUNT_POINTS = E;

PREPAID_INTEREST = F;

LENDERS_FEES = G; 

// **************************************************************

// DECLARE CALCULATION VARIABLES.

// Adjusted basis of principal (after reduced by costs).

var ADJUSTED_BASIS = 0;

// APR variable.

var APR = 0;

// Interim variables.

var A = 0;
var A1 = 0;
var A2 = 0;

var I = 0;
var I1 = 0;
var I2 = 0;
var II = 0;

var i = 0;
var j = 0;

var Q1 = 0;
var Q2 = 0;

var R1 = 0;
var R2 = 0;

var COUNTER = 0;

// **************************************************************


