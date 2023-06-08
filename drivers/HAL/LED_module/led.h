#ifndef LED_MODULE_H_
#define LED_MODULE_H_

#include "../../MCAL/DIO/dio.h"

#ifndef LED_MODULE_PORT
#define LED_MODULE_PORT PORT_A
#endif

#ifndef LED_MODULE_PINS_SHIFT
#define LED_MODULE_PINS_SHIFT 0
#endif

void LED_module_init();

void LED_on(uint8_t LEDNumber);

void LED_off(uint8_t LEDNumber);

void LED_toggle(uint8_t LEDNumber);

#endif /* LED_MODULE_H_ */