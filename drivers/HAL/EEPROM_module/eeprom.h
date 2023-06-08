#ifndef EEPROM_H_
#define EEPROM_H_

#include "../../MCAL/I2C/i2c.h"

#define EEPROM_MODULE_PORT PORT_C

void EEPROM_init();

void EEPROM_write_byte(uint8_t page, uint8_t address, int8_t data);

uint8_t EEPROM_read_byte(uint8_t page, uint8_t address);

#endif /* EEPROM_H_ */