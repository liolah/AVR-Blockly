#include "eeprom.h"

void EEPROM_init(){
  I2C_init();
}

void EEPROM_write_byte(uint8_t page, uint8_t address, int8_t data){
  I2C_start();
  I2C_write(0xA0 + (page << 1)); // EEPROM address first part + page number
  I2C_write(address);
  I2C_write(data);
  I2C_stop();
  _delay_ms(10);
}

uint8_t EEPROM_read_byte(uint8_t page, uint8_t address){
  I2C_start();
  I2C_write(0xA0 + (page << 1)); // EEPROM address first part + page number
  I2C_write(address);
  I2C_start();
  I2C_write(0xA0 + (page << 1) + 1);
  uint8_t data = I2C_read_Nack();
  I2C_stop();
  return data;
  }