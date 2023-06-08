#include <stdio.h>
#include <avr/io.h>
#define F_CPU 16000000
#include <util/delay.h>
#include "ledmatrix7219d88/ledmatrix7219d88.h"

int main(void) {
	//init ledmatrix
	ledmatrix7219d88_init();

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
	ledmatrix7219d88_setmatrix(0, heart);
	_delay_ms(5000);
	}
