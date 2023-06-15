#include "dio.h"

// Initialize the pin direction
void DIO_pin_init(uint8_t pinNumber, uint8_t portNumber, uint8_t direction){
  switch (portNumber) {
      case PORT_A:
        if (direction == OUT) {
          set_bit(DDRA, pinNumber);
          }
        else {
          clear_bit(DDRA, pinNumber);
          }
        break;
      case PORT_B:
        if (direction == OUT) {
          set_bit(DDRB, pinNumber);
          }
        else {
          clear_bit(DDRB, pinNumber);
          }
        break;
      case PORT_C:
        if (direction == OUT) {
          set_bit(DDRC, pinNumber);
          }
        else {
          clear_bit(DDRC, pinNumber);
          }
        break;
      case PORT_D:
        if (direction == OUT) {
          set_bit(DDRD, pinNumber);
          }
        else {
          clear_bit(DDRD, pinNumber);
          }
        break;
    }
}

// Initialize the port direction
void DIO_port_init(uint8_t portNumber, uint8_t direction){
  switch (portNumber) {
      case PORT_A:
        if (direction == OUT) {
          DDRA = 0xFF;
          }
        else {
          DDRA = 0x00;
          }
        break;
      case PORT_B:
        if (direction == OUT) {
          DDRB = 0xFF;
          }
        else {
          DDRB = 0x00;
          }
        break;
      case PORT_C:
        if (direction == OUT) {
          DDRC = 0xFF;
          }
        else {
          DDRC = 0x00;
          }
        break;
      case PORT_D:
        if (direction == OUT) {
          DDRD = 0xFF;
          }
        else {
          DDRD = 0x00;
          }
        break;
    }
}

// Write a value to a pin
void DIO_pin_write(uint8_t pinNumber, uint8_t portNumber, uint8_t value){
  switch (portNumber) {
      case PORT_A:
        if (value == HIGH) {
          set_bit(PORTA, pinNumber);
          }
        else {
          clear_bit(PORTA, pinNumber);
          }
        break;
      case PORT_B:
        if (value == HIGH) {
          set_bit(PORTB, pinNumber);
          }
        else {
          clear_bit(PORTB, pinNumber);
          }
        break;
      case PORT_C:
        if (value == HIGH) {
          set_bit(PORTC, pinNumber);
          }
        else {
          clear_bit(PORTC, pinNumber);
          }
        break;
      case PORT_D:
        if (value == HIGH) {
          set_bit(PORTD, pinNumber);
          }
        else {
          clear_bit(PORTD, pinNumber);
          }
        break;
    }
}

// Read a value from a pin
uint8_t DIO_pin_read(uint8_t pinNumber, uint8_t portNumber){
  switch (portNumber) {
      case PORT_A:
        return read_bit(PINA, pinNumber);
        break;
      case PORT_B:
        return read_bit(PINB, pinNumber);
        break;
      case PORT_C:
        return read_bit(PINC, pinNumber);
        break;
      case PORT_D:
        return read_bit(PIND, pinNumber);
        break;
    }
}

// Write a value to a port
void DIO_port_write(uint8_t portNumber, uint8_t value){
  switch (portNumber) {
      case PORT_A:
        if (value == HIGH) {
          PORTA = 0xFF;
          }
        else {
          PORTA = 0x00;
          }
        break;
      case PORT_B:
        if (value == HIGH) {
          PORTB = 0xFF;
          }
        else {
          PORTB = 0x00;
          }
        break;
      case PORT_C:
        if (value == HIGH) {
          PORTC = 0xFF;
          }
        else {
          PORTC = 0x00;
          }
        break;
      case PORT_D:
        if (value == HIGH) {
          PORTD = 0xFF;
          }
        else {
          PORTD = 0x00;
          }
        break;
    }
}

// Write a value to a port
void DIO_port_send(uint8_t portNumber, uint8_t value){
  switch (portNumber) {
      case PORT_A:
          PORTA = value;
        break;
      case PORT_B:
          PORTB = value;
        break;
      case PORT_C:
          PORTC = value;
        break;
      case PORT_D:
          PORTD = value;
        break;
    }
}

// Read a value from a port
uint8_t DIO_port_read(uint8_t portNumber){
  switch (portNumber) {
      case PORT_A:
        return PINA;
        break;
      case PORT_B:
        return PINB;
        break;
      case PORT_C:
        return PINC;
        break;
      case PORT_D:
        return PIND;
        break;
    }
}

// Toggle a pin
void DIO_pin_toggle(uint8_t pinNumber, uint8_t portNumber){
  switch (portNumber) {
      case PORT_A:
        toggle_bit(PORTA, pinNumber);
        break;
      case PORT_B:
        toggle_bit(PORTB, pinNumber);
        break;
      case PORT_C:
        toggle_bit(PORTC, pinNumber);
        break;
      case PORT_D:
        toggle_bit(PORTD, pinNumber);
        break;
    }
}