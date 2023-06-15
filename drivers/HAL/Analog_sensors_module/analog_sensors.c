#include "analog_sensors.h"

void Analog_sensors_init() {
  ADC_init();
  DIO_port_init(PORT_A, IN);
  }

// Returns temperature in C
uint16_t Temperature_read() {
  return ADC_read(1);
  }

uint16_t Brightness_read() {
  return ADC_read(0);
  }

uint16_t Sound_level_read() {
  return ADC_read(2);
  }

uint16_t Builtin_POT_read() {
  return ADC_read(3);
  }

uint16_t External_sensor_read(uint8_t sensorNum) {
  return ADC_read(sensorNum + 4);
  }