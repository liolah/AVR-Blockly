#ifndef ANALOG_SENSOR_H_
#define ANALOG_SENSOR_H_

#include "../../MCAL/ADC/adc.h"
#include "../../MCAL/DIO/dio.h"

#ifndef F_CPU
#define F_CPU 16000000ul
#endif

#define ANALOG_SENSOR_MODULE_PORT PORT_A

void Analog_sensors_init();

// Returns temperature in C
uint16_t Temperature_read();

uint16_t Brightness_read();

uint16_t Sound_level_read();

uint16_t Builtin_POT_read();

uint16_t External_sensor_read(uint8_t sensorNUm);

#endif /* ANALOG_SENSOR_H_ */
