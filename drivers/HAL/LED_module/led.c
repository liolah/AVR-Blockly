#include "led.h"

void LED_module_init() {
  int i;
  for (i = LED_MODULE_PINS_SHIFT; i < 8;i++) {
    DIO_pin_init(i, LED_MODULE_PORT, OUT);
    }
  }

void LED_on(uint8_t LEDNumber) {
  if (LEDNumber + LED_MODULE_PINS_SHIFT < 8) {
    DIO_pin_write(LED_MODULE_PINS_SHIFT + LEDNumber, LED_MODULE_PORT, HIGH);
    }
}

void LED_off(uint8_t LEDNumber){ 
  if (LEDNumber + LED_MODULE_PINS_SHIFT < 8) {
    DIO_pin_write(LED_MODULE_PINS_SHIFT + LEDNumber, LED_MODULE_PORT, LOW);
    }
}

void LED_toggle(uint8_t LEDNumber){
  if (LEDNumber + LED_MODULE_PINS_SHIFT < 8) {
    DIO_pin_toggle(LED_MODULE_PINS_SHIFT + LEDNumber, LED_MODULE_PORT);
    }
}
