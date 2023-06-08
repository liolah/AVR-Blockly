#ifndef LCD_H_
#define LCD_H_

#include <avr/io.h>

//! Needs attention in blocks 
#ifndef LCD_MODULE_PORT
#define LCD_MODULE_PORT PORTB
#endif

#ifndef LCD_MODULE_DDR
#define LCD_MODULE_DDR DDRB
#endif

#ifndef LCD_MODULE_PINS_SHIFT
#define LCD_MODULE_PINS_SHIFT 0
#endif

#include "../../MCAL/DIO/dio.h"
#define F_CPU 16000000UL		
#include <util/delay.h>

#define RS (0 + LCD_MODULE_PINS_SHIFT)	
#define RW (1 + LCD_MODULE_PINS_SHIFT)	
#define EN (2 + LCD_MODULE_PINS_SHIFT) 		

void LCD_init(void);

void LCD_sendData(uint8_t data);

void LCD_sendCommand(uint8_t cmd);

void LCD_write_string(int8_t* str);

void LCD_move_cursor_xy(uint8_t x, uint8_t y);

void LCD_write_string_xy(uint8_t x, uint8_t y, int8_t* str);

void LCD_clear_screen();

#endif /* LCD_H_ */