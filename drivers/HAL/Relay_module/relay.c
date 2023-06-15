#include "relay.h"

void Relay_module_init() {
  int i;
  for (i = RELAY_MODULE_PINS_SHIFT; i < 8;i++) {
    DIO_pin_init(i, RELAY_MODULE_PORT, OUT);
    }
  }

void Relay_on(uint8_t relayNumber) {
  if (relayNumber + RELAY_MODULE_PINS_SHIFT < 8) {
    DIO_pin_write(RELAY_MODULE_PINS_SHIFT + relayNumber, RELAY_MODULE_PORT, HIGH);
    }
  }

void Relay_off(uint8_t relayNumber) {
  if (relayNumber + RELAY_MODULE_PINS_SHIFT < 8) {
    DIO_pin_write(RELAY_MODULE_PINS_SHIFT + relayNumber, RELAY_MODULE_PORT, LOW);
    }
  }

void Relay_toggle(uint8_t relayNumber) {
  if (relayNumber + RELAY_MODULE_PINS_SHIFT < 8) {
    DIO_pin_toggle(RELAY_MODULE_PINS_SHIFT + relayNumber, RELAY_MODULE_PORT);
    }
  }

void SSR_set_brightness(double dc) {
  PWM_init(OC_0, 0, PWM_FAST);
  PWM_set_DC(OC_0, dc);
  }
