#include <avr/io.h>
#define F_CPU 16000000

#define BUZZER_MODULE_PORT PORT_A
#define BUZZER_MODULE_PINS_SHIFT 0

#include "drivers/HAL/Buzzer_module/buzzer.h"
#include <util/delay.h>

int main(void) {

Buzzer_init();

while(1) {
  Buzzer_on();
  _delay_ms(1000);
  Buzzer_off();
  _delay_ms(1000);

   }
}