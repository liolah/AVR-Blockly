#include "push_buton.h"

void Push_button_module_init() {
  int i;
  for (i = PUSH_BUTTON_MODULE_PINS_SHIFT; i < 8;i++) {
    DIO_pin_init(i, PUSH_BUTTON_MODULE_PORT, OUT);
    }
}

uint8_t Push_button_read(uint8_t button){
  if (button + PUSH_BUTTON_MODULE_PINS_SHIFT < 8) {
    return DIO_pin_read(PUSH_BUTTON_MODULE_PINS_SHIFT + button, PUSH_BUTTON_MODULE_PORT);
    }
  }