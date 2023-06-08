#ifndef RELAY_MODULE_H_
#define RELAY_MODULE_H_

#include "../../MCAL/DIO/dio.h"
#include "../../MCAL/PWM/pwm.h"

#ifndef RELAY_MODULE_PORT
#define RELAY_MODULE_PORT PORT_A
#endif

#ifndef RELAY_MODULE_PINS_SHIFT
#define RELAY_MODULE_PINS_SHIFT 0
#endif

void Relay_module_init();

void Relay_on(uint8_t relayNumber);

void Relay_off(uint8_t relayNumber);

void Relay_toggle(uint8_t relayNumber);

void SSR_set_brightness(double dc);

#endif /* RELAY_MODULE_H_ */