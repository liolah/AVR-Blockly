#ifndef BUZZER_H_
#define BUZZER_H_

//! This header files needs attention when creating the it's blocks.
//! To define the port you need use PORTB instead of PORT_B and you need to use DDRB, too
#ifndef DOT_MATRIX_MODULE_PORT
#define DOT_MATRIX_MODULE_PORT PORTB
#define DOT_MATRIX_MODULE_DDR DDRB
#endif

#ifndef F_CPU
#define F_CPU 16000000ul
#endif

#include "../../MCAL/DIO/dio.h"
#include <stdio.h>
#include <util/delay.h>
#include "ledmatrix7219d88/ledmatrix7219d88.h"

void Dot_matrix_init();

void Dot_matrix_display_char(int8_t x);

void Eight_digit_seven_segment_display(int8_t* x);

#endif /* BUZZER_H_ */
