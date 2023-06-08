#include "I2C.h"

void I2C_init(void) {
  TWBR = BITRATE(TWSR = 0x00);
  }

void I2C_start() {
  TWCR = (1 << TWSTA) | (1 << TWEN) | (1 << TWINT);
  while (read_bit(TWCR, TWINT) == 0);
  }

void I2C_repeatedStart() {
  TWCR = (1 << TWSTA) | (1 << TWEN) | (1 << TWINT);
  while (read_bit(TWCR, TWINT) == 0);
  }

void I2C_write(uint8_t data) {
  TWDR = data;
  TWCR = (1 << TWEN) | (1 << TWINT);
  while (read_bit(TWCR, TWINT) == 0);
  }

uint8_t I2C_read_Ack() {
  TWCR = (1 << TWEA) | (1 << TWEN) | (1 << TWINT);
  while (read_bit(TWCR, TWINT) == 0);
  return TWDR;
  }

uint8_t I2C_read_Nack() {
  TWCR = (1 << TWEN) | (1 << TWINT);
  while (read_bit(TWCR, TWINT) == 0);
  return TWDR;
  }

void I2C_stop(void) {
  TWCR = (1 << TWSTO) | (1 << TWEN) | (1 << TWINT);
  while (read_bit(TWCR, TWSTO));
  }
