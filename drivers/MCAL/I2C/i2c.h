#ifndef I2C_H_
#define I2C_H_

#include <stdbool.h>
#include <math.h>

#include <avr/io.h>
#include <stdint.h>
#include "../../utilities/bit_manipulation.h"

#ifndef F_CPU
#define F_CPU 16000000ul
#endif

#define SCL_CLK 100000
 /* Define bit rate */
#define BITRATE(TWSR)	((F_CPU / SCL_CLK) - 16) / (2 * pow(4, (TWSR & (( 1 << TWPS0) | (1 << TWPS1)))))

void I2C_init(void);

void I2C_start();

void I2C_repeatedStart();

void I2C_write(uint8_t data);

uint8_t I2C_read_Ack();

uint8_t I2C_read_Nack();

void I2C_stop(void);

#endif /* I2C_H_ */