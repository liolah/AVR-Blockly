/*
 * dio.h
 *
 * Created: 3/25/2023 3:20:38 PM
 *  Author: Hesham Hany
 */


#ifndef DIO_H_
#define DIO_H_

#include <stdbool.h>
#include <stdint.h>
#include <avr/io.h>
#include "../../utilities/bit_manipulation.h"

#define PORT_A 'A'
#define PORT_B 'B'
#define PORT_C 'C'
#define PORT_D 'D'

#define IN 0
#define OUT 1

#define LOW 0
#define HIGH 1

 // Initialize the pin direction
void DIO_pin_init(uint8_t pinNumber, uint8_t portNumber, uint8_t direction);

// Initialize the port direction
void DIO_port_init(uint8_t portNumber, uint8_t direction);

// Write a value to a pin
void DIO_pin_write(uint8_t pinNumber, uint8_t portNumber, uint8_t value);

// Read a value from a pin
uint8_t DIO_pin_read(uint8_t pinNumber, uint8_t portNumber);

// Write a value to a port
void DIO_port_write(uint8_t portNumber, uint8_t value);

// Read a value from a port
uint8_t DIO_port_read(uint8_t portNumber);

// Toggle a pin
void DIO_pin_toggle(uint8_t pinNumber, uint8_t portNumber);

#endif /* DIO_H_ */