#include "buzzer.h"

void Buzzer_init(){
  DIO_pin_init(BUZZER_MODULE_PINS_SHIFT, BUZZER_MODULE_PORT, OUT);
}

void Buzzer_on(){
  DIO_pin_write(BUZZER_MODULE_PINS_SHIFT, BUZZER_MODULE_PORT, HIGH);
}

void Buzzer_off(){
  DIO_pin_write(BUZZER_MODULE_PINS_SHIFT, BUZZER_MODULE_PORT, LOW);
}