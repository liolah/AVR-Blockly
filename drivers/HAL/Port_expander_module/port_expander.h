#ifndef PORT_EXPANDER_MODULE_H_
#define PORT_EXPANDER_MODULE_H_

#include "../../MCAL/DIO/dio.h"
#include "../../MCAL/I2C/i2c.h"

#define PORT_EXPANDER_MODULE_MODULE_PORT PORT_C

#define PORT_EXPANDER_MODULE_EXPANDER_CHIP_0_I2C_ADDRESS 0b01000000
#define PORT_EXPANDER_MODULE_EXPANDER_CHIP_1_I2C_ADDRESS 0b01000001

void Port_expander_module_init();

void Port_expander_module_write(uint8_t chipNumber, int8_t data);

uint8_t Port_expander_module_read(uint8_t chipNumber);

#endif /* PORT_EXPANDER_MODULE_H_ */