/*
max7219 lib 0x03

copyright (c) Davide Gironi, 2013

Released under GPLv3.
Please refer to LICENSE file for licensing information.
*/


#include <stdio.h>
#include <stdint.h>
#include <avr/io.h>
#include <util/atomic.h>

#include "max7219.h"


static volatile uint8_t max7219_values[MAX7219_ICNUMBER][8];

/*
 * shift out a byte
 */
void max7219_shiftout(uint8_t bytedata) {
	uint8_t j = 0;

// #if MAX7219_ATOMICMODEENABLED == 1
// 	// ATOMIC_BLOCK(ATOMIC_FORCEON)
// 	// {
// #endif
	//the shift is made in reverse order for this ic
	for(j=8; j>0; j--){
		uint8_t val = (bytedata & (1<<(j-1)))>>(j-1);
		MAX7219_CLKPORT &= ~(1 << MAX7219_CLKINPUT); //set the serial-clock pin low
		if(val)
			MAX7219_DINPORT |= (1 << MAX7219_DININPUT);
		else
			MAX7219_DINPORT &= ~(1 << MAX7219_DININPUT);
		MAX7219_CLKPORT |= (1 << MAX7219_CLKINPUT); //set the serial-clock pin high
	}
// #if MAX7219_ATOMICMODEENABLED == 1
// 	}
// #endif
}


/*
 * shift out data to a selected number
 */
void max7219_send(uint8_t icnum, uint8_t reg, uint8_t data) {
	uint8_t i = 0;

	if(icnum < MAX7219_ICNUMBER) {
		MAX7219_LOADPORT &= ~(1<<MAX7219_LOADINPUT); //load down
		//send no op to following ic
		for(i=icnum; i<(MAX7219_ICNUMBER-1); i++) {
			max7219_shiftout(MAX7219_REGNOOP); //no op reg
			max7219_shiftout(MAX7219_REGNOOP); //no op data
		}
		//send info to current ic
		max7219_shiftout(reg); //send reg
		max7219_shiftout(data); //send data
		//send no op to previous ic
		for(i=0; i<icnum; i++) {
			max7219_shiftout(MAX7219_REGNOOP); //no op reg
			max7219_shiftout(MAX7219_REGNOOP); //no op data
		}
		MAX7219_LOADPORT |= (1<<MAX7219_LOADINPUT); //load up
	}
}


/*
 * set shutdown for a selected ic
 */
void max7219_shutdown(uint8_t icnum, uint8_t value) {
	if(value == 0 || value == 1)
		max7219_send(icnum, MAX7219_REGSHUTDOWN, value);
}


/*
 * set brightness for a selected ic
 */
void max7219_intensity(uint8_t icnum, uint8_t value) {
	if(value < 16)
		max7219_send(icnum, MAX7219_REGINTENSITY, value);
}


/*
 * set test mode for a selected ic
 */
void max7219_test(uint8_t icnum, uint8_t value) {
	if(value == 0 || value == 1)
		max7219_send(icnum, MAX7219_REGTEST, value);
}


/*
 * set active outputs for a selected ic
 */
void max7219_scanlimit(uint8_t icnum, uint8_t value) {
	if(value < 8)
		max7219_send(icnum, MAX7219_REGSCANLIMIT, value);
}


/*
 * set decode mode for a selected ic
 */
void max7219_decode(uint8_t icnum, uint8_t value) {
	max7219_send(icnum, MAX7219_REGDECODE, value);
}

/*
 * set output 0 for a selected ic
 */
void max7219_digit0(uint8_t icnum, uint8_t value) {
	max7219_values[icnum][0] = value;
	max7219_send(icnum, MAX7219_REGDIGIT0, value);
}


/*
 * set output 1 for a selected ic
 */
void max7219_digit1(uint8_t icnum, uint8_t value) {
	max7219_values[icnum][1] = value;
	max7219_send(icnum, MAX7219_REGDIGIT1, value);
}


/*
 * set output 2 for a selected ic
 */
void max7219_digit2(uint8_t icnum, uint8_t value) {
	max7219_values[icnum][2] = value;
	max7219_send(icnum, MAX7219_REGDIGIT2, value);
}


/*
 * set output 3 for a selected ic
 */
void max7219_digit3(uint8_t icnum, uint8_t value) {
	max7219_values[icnum][3] = value;
	max7219_send(icnum, MAX7219_REGDIGIT3, value);
}

/*
 * set output 4 for a selected ic
 */
void max7219_digit4(uint8_t icnum, uint8_t value) {
	max7219_values[icnum][4] = value;
	max7219_send(icnum, MAX7219_REGDIGIT4, value);
}


/*
 * set ouput 0 for a selected ic
 */
void max7219_digit5(uint8_t icnum, uint8_t value) {
	max7219_values[icnum][5] = value;
	max7219_send(icnum, MAX7219_REGDIGIT5, value);
}

/*
 * set output 6 for a selected ic
 */
void max7219_digit6(uint8_t icnum, uint8_t value) {
	max7219_values[icnum][6] = value;
	max7219_send(icnum, MAX7219_REGDIGIT6, value);
}


/*
 * set output 7 for a selected ic
 */
void max7219_digit7(uint8_t icnum, uint8_t value) {
	max7219_values[icnum][7] = value;
	max7219_send(icnum, MAX7219_REGDIGIT7, value);
}


/*
 * set output digit for a selected ic
 */
void max7219_digit(uint8_t icnum, uint8_t digit, uint8_t value) {
	switch(digit) {
		case 0:
			max7219_digit0(icnum, value);
			break;
		case 1:
			max7219_digit1(icnum, value);
			break;
		case 2:
			max7219_digit2(icnum, value);
			break;
		case 3:
			max7219_digit3(icnum, value);
			break;
		case 4:
			max7219_digit4(icnum, value);
			break;
		case 5:
			max7219_digit5(icnum, value);
			break;
		case 6:
			max7219_digit6(icnum, value);
			break;
		case 7:
			max7219_digit7(icnum, value);
			break;
	}
}


/*
 * get digit 0 value for a selected ic
 */
uint8_t max7219_getdigit0(uint8_t icnum) {
	return max7219_values[icnum][0];
}


/*
 * get digit 1 value for a selected ic
 */
uint8_t max7219_getdigit1(uint8_t icnum) {
	return max7219_values[icnum][1];
}


/*
 * get digit 2 value for a selected ic
 */
uint8_t max7219_getdigit2(uint8_t icnum) {
	return max7219_values[icnum][2];
}


/*
 * get digit 3 value for a selected ic
 */
uint8_t max7219_getdigit3(uint8_t icnum) {
	return max7219_values[icnum][3];
}


/*
 * get digit 4 value for a selected ic
 */
uint8_t max7219_getdigit4(uint8_t icnum) {
	return max7219_values[icnum][4];
}


/*
 * get digit 5 value for a selected ic
 */
uint8_t max7219_getdigit5(uint8_t icnum) {
	return max7219_values[icnum][5];
}


/*
 * get digit 6 value for a selected ic
 */
uint8_t max7219_getdigit6(uint8_t icnum) {
	return max7219_values[icnum][6];
}


/*
 * get digit 7 value for a selected ic
 */
uint8_t max7219_getdigit7(uint8_t icnum) {
	return max7219_values[icnum][7];
}


/*
 * get digit value for a selected ic
 */
uint8_t max7219_getdigit(uint8_t icnum, uint8_t digit) {
	uint8_t value = 0;
	switch(digit) {
		case 0:
			value = max7219_getdigit0(icnum);
			break;
		case 1:
			value = max7219_getdigit1(icnum);
			break;
		case 2:
			value = max7219_getdigit2(icnum);
			break;
		case 3:
			value = max7219_getdigit3(icnum);
			break;
		case 4:
			value = max7219_getdigit4(icnum);
			break;
		case 5:
			value = max7219_getdigit5(icnum);
			break;
		case 6:
			value = max7219_getdigit6(icnum);
			break;
		case 7:
			value = max7219_getdigit7(icnum);
			break;
	}
	return value;
}


/*
 * init the shift register
 */
void max7219_init() {
	//output
	MAX7219_DINDDR |= (1 << MAX7219_DININPUT);
	MAX7219_CLKDDR |= (1 << MAX7219_CLKINPUT);
	MAX7219_LOADDDR |= (1 << MAX7219_LOADINPUT);
	//low
	MAX7219_DINPORT &= ~(1 << MAX7219_DININPUT);
	MAX7219_CLKPORT &= ~(1 << MAX7219_CLKINPUT);
	MAX7219_LOADPORT &= ~(1 << MAX7219_LOADINPUT);
}
