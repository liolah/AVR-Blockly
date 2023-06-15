#include "port_expander.h"

void Port_expander_module_init() {
  I2C_init();
  }

void Port_expander_module_write(uint8_t chipNumber, int8_t data) {
  switch (chipNumber) {
      case 0:
        I2C_start();
        I2C_write(PORT_EXPANDER_MODULE_EXPANDER_CHIP_0_I2C_ADDRESS);
        I2C_write(data);
        I2C_stop();
        break;
      case 1:
        I2C_start();
        I2C_write(PORT_EXPANDER_MODULE_EXPANDER_CHIP_1_I2C_ADDRESS);
        I2C_write(data);
        I2C_stop();
        break;
    }
  }

uint8_t Port_expander_module_read(uint8_t chipNumber) {
  // TODO
  return 0;
  }
