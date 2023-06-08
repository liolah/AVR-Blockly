#ifndef BUZZER_H_
#define BUZZER_H_

#include "../../MCAL/I2C/i2c.h"

#ifndef BUZZER_MODULE_PORT
#define BUZZER_MODULE_PORT PORT_A
#endif

#ifndef BUZZER_MODULE_PINS_SHIFT
#define BUZZER_MODULE_PINS_SHIFT 0
#endif

void Buzzer_init();

void Buzzer_on();

void Buzzer_off();

#endif /* BUZZER_H_ */