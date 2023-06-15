#include "lcd.h"

void LCD_init(void) {
  LCD_MODULE_DDR = 0xFF;
  _delay_ms(20);

  LCD_sendCommand(0x02);
  LCD_sendCommand(0x28);
  LCD_sendCommand(0x0c);
  LCD_sendCommand(0x06);
  LCD_sendCommand(0x01);
  _delay_ms(5);
  }

void LCD_sendData(uint8_t data) {
  LCD_MODULE_PORT = (LCD_MODULE_PORT & 0b00000111) | ((data & 0xF0) >> 1);
  LCD_MODULE_PORT |= (1 << RS);
  LCD_MODULE_PORT |= (1 << EN);
  _delay_ms(3);
  LCD_MODULE_PORT &= ~(1 << EN);

  _delay_ms(3);

  LCD_MODULE_PORT = (LCD_MODULE_PORT & 0b00000111) | (data << 3);
  LCD_MODULE_PORT |= (1 << EN);
  _delay_ms(3);
  LCD_MODULE_PORT &= ~(1 << EN);
  _delay_ms(3);
  }

void LCD_sendCommand(uint8_t cmnd) {
  LCD_MODULE_PORT = (LCD_MODULE_PORT & 0b00000111) | ((cmnd & 0xF0) >> 1);
  LCD_MODULE_PORT &= ~(1 << RS);
  LCD_MODULE_PORT |= (1 << EN);
  _delay_ms(3);
  LCD_MODULE_PORT &= ~(1 << EN);

  _delay_ms(3);

  LCD_MODULE_PORT = (LCD_MODULE_PORT & 0b00000111) | (cmnd << 3);
  LCD_MODULE_PORT |= (1 << EN);
  _delay_ms(3);
  LCD_MODULE_PORT &= ~(1 << EN);
  _delay_ms(3);
  }

void LCD_write_string(int8_t* str) {
  int i;
  for (i = 0;str[i] != 0;i++) {
    LCD_sendData(str[i]);
    }
  }

void LCD_move_cursor_xy(uint8_t x, uint8_t y) {
  if (y == 0 && x < 16)
    LCD_sendCommand((x & 0x0F) | 0x80);
  else if (y == 1 && x < 16)
    LCD_sendCommand((x & 0x0F) | 0xC0);
  }

void LCD_write_string_xy(uint8_t x, uint8_t y, int8_t* str) {
  if (y == 0 && x < 16)
    LCD_sendCommand((x & 0x0F) | 0x80);
  else if (y == 1 && x < 16)
    LCD_sendCommand((x & 0x0F) | 0xC0);
  LCD_write_string(str);
  }

void LCD_clear_screen() {
  LCD_sendCommand(0x01);
  _delay_ms(3);
  LCD_sendCommand(0x80);
  }