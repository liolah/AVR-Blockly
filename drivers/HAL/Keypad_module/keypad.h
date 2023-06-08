#ifndef KEYPAD_H_
#define KEYPAD_H_

#include "../../MCAL/DIO/dio.h"

#ifndef KEYPAD_MODULE_PORT
#define KEYPAD_MODULE_PORT PORT_D
#endif

#ifndef KEYPAD_MODULE_PINS_SHIFT
#define KEYPAD_MODULE_PINS_SHIFT 0
#endif

#define KEYPAD_BUTTON_VALUES  {{'7','8','9','/'},{'4','5','6','*'},{'1','2','3','-'},{'#','0','=','+'}}

#define KEYPAD_ROW_NUM  4
#define KEYPAD_COL_NUM  4

#define KEYPAD_NO_PRESSED_KEY_VALUE  0xFF

void Keypad_init();

uint8_t Keypad_getPressedKey();

#endif /* KEYPAD_H_ */