#ifndef PUSH_BUTTON_MODULE_H_
#define PUSH_BUTTON_MODULE_H_

#include "../../MCAL/DIO/dio.h"

#ifndef PUSH_BUTTON_MODULE_PORT
#define PUSH_BUTTON_MODULE_PORT PORT_C
#endif

#ifndef PUSH_BUTTON_MODULE_PINS_SHIFT
#define PUSH_BUTTON_MODULE_PINS_SHIFT 0
#endif

void Push_button_module_init();

uint8_t Push_button_read(uint8_t button);

#endif /* PUSH_BUTTON_MODULE_H_ */