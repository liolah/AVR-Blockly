#ifndef ADC_H_
#define ADC_H_

#define ADC_VREF INTERNAL_VREF

#define AREF 0
#define AVCC 1
#define INTERNAL_VREF 2

#ifndef F_CPU
#define F_CPU 16000000ul
#endif

#include <avr/io.h>
#include <util/delay.h>
#include <stdint.h>
#include <stdbool.h>
#include "../../utilities/bit_manipulation.h"

#define READ_WAIT_DURATION_uS 100

// Initialize the ADC
void ADC_init();

// Read the input on a channel and passes the value by reference
uint16_t ADC_read(uint8_t channel);

// Select an ADC channel to read from
void ADC_select_channel(uint8_t channel);

#endif /* ADC_H_ */