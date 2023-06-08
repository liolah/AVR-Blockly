#ifndef UART_H_
#define UART_H_

#include <stdint.h>
#include <avr/io.h>
#include "../../utilities/bit_manipulation.h"

#ifndef F_CPU
#define F_CPU 16000000ul
#endif

// Initialize the UART interface
void UART_init();

// Send a Char using UART
void UART_sendChar(int8_t data);

// Receive a Char using UART
int8_t UART_receiveChar();

void UART_sendString(int8_t* str);

#endif /* UART_H_ */