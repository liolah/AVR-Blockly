//ledmatrix7219d88 output example

#include <stdio.h>
#include <avr/io.h>
#define F_CPU 1000000
#include <util/delay.h>

#include "ledmatrix7219d88/ledmatrix7219d88.h"

/*
 * main function
 */
int main(void) {
	//init ledmatrix
	ledmatrix7219d88_init();


	uint8_t ledmatrix = 0;

	//display test rows
	// uint8_t rows[8] = {
	// 		0b10000001,
	// 		0b01000010,
	// 		0b00100100,
	// 		0b00011000,
	// 		0b00011000,
	// 		0b00100100,
	// 		0b01000010,
	// 		0b10000001
	// 	};
	// ledmatrix = 0;

	// ledmatrix7219d88_setmatrix(0, rows);
	// _delay_ms(1000);
	uint8_t smile[8] = {
			0b00111100,
			0b01000010,
			0b10100101,
			0b10000001,
			0b10100101,
			0b10011001,
			0b01000010,
			0b00111100
		};
	ledmatrix = 0;
	ledmatrix7219d88_setmatrix(0, smile);
	_delay_ms(5000);
	uint8_t heart[8] = {
			0b01100110,
			0b11111111,
			0b11111111,
			0b11111111,
			0b01111110,
			0b00111100,
			0b00011000,
			0b00000000
	};
	ledmatrix = 0;
	ledmatrix7219d88_setmatrix(0, heart);
	_delay_ms(5000);
	uint8_t wink[8] = {
			0b00111100,
			0b01000010,
			0b10100101,
			0b10000001,
			0b10100101,
			0b10011001,
			0b01000010,
			0b00111100
		};
	ledmatrix = 0;
	ledmatrix7219d88_setmatrix(0, wink);
	_delay_ms(5000);
	// uint8_t h[8] = {
	// 		0b01000100,
	// 		0b01000100,
	// 		0b01000100,
	// 		0b01111100,
	// 		0b01000100,
	// 		0b01000100,
	// 		0b01000100,
	// 		0b00000000
	// 	};
	// ledmatrix = 0;
	// ledmatrix7219d88_setmatrix(0, h);
	// _delay_ms(5000);
	// uint8_t n[8] = {
	// 		0b01000100,
	// 		0b01000100,
	// 		0b01100100,
	// 		0b01010100,
	// 		0b01001100,
	// 		0b01000100,
	// 		0b01000100,
	// 		0b00000000
	// 	};
	// ledmatrix = 0;
	// ledmatrix7219d88_setmatrix(0, n);
	// _delay_ms(5000);

	//display test rows
	// ledmatrix = 0;
	// ledmatrix7219d88_setrow(ledmatrix, 0, 0b10000000);
	// ledmatrix7219d88_setrow(ledmatrix, 1, 0b01000000);
	// ledmatrix7219d88_setrow(ledmatrix, 2, 0b00100000);
	// ledmatrix7219d88_setrow(ledmatrix, 3, 0b00010000);
	// ledmatrix7219d88_setrow(ledmatrix, 4, 0b00001000);
	// ledmatrix7219d88_setrow(ledmatrix, 5, 0b00000100);
	// ledmatrix7219d88_setrow(ledmatrix, 6, 0b00000010);
	// ledmatrix7219d88_setrow(ledmatrix, 7, 0b00000001);
	// _delay_ms(1000);
	// ledmatrix7219d88_resetmatrix(0);
	// ledmatrix = 0;
	// ledmatrix7219d88_setrow(ledmatrix, 0, 0b10101010);
	// ledmatrix7219d88_setrow(ledmatrix, 1, 0b01010101);
	// ledmatrix7219d88_setrow(ledmatrix, 2, 0b10101010);
	// ledmatrix7219d88_setrow(ledmatrix, 3, 0b01010101);
	// ledmatrix7219d88_setrow(ledmatrix, 4, 0b10101010);
	// ledmatrix7219d88_setrow(ledmatrix, 5, 0b01010101);
	// ledmatrix7219d88_setrow(ledmatrix, 6, 0b10101010);
	// ledmatrix7219d88_setrow(ledmatrix, 7, 0b01010101);
	// _delay_ms(1000);
	// ledmatrix7219d88_resetmatrix(0);

	// //test loop
	// uint8_t p = 1;
	// for (;;) {

	// 	int8_t led = 0;
	// 	//loop every matrix
	// 	for (ledmatrix = 0; ledmatrix < LEDMATRIX7219D88_MAXLEDMATRIX; ledmatrix++) {
	// 		//loop every led
	// 		for (led = 0; led < 64; led++) {
	// 			if (p)
	// 				ledmatrix7219d88_setledon(ledmatrix, led);
	// 			else
	// 				ledmatrix7219d88_setledoff(ledmatrix, led);
	// 			_delay_ms(50);
	// 			}
	// 		ledmatrix7219d88_resetmatrix(ledmatrix);
	// 		}

	// 	if (p)
	// 		p = 0;
	// 	else
	// 		p = 1;

	// 	_delay_ms(300);
	// 	}
	}
