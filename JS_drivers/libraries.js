export default {
  delay: {
  name: "delay",
  val: "#include <util/delay.h>",
  },
  dio: {
  name: "dio",
  val: '#include "drivers/MCAL/dio/dio.h"',
  },
  analog_sensors: {
  name: "analog_sensors",
  val: '#include "./drivers/HAL/Analog_sensors_module/analog_sensors.h"'
  },
  buzzer: {
  name: "buzzer",
  val: '#include "drivers/HAL/Buzzer_module/buzzer.h"'
  },
  dot_matrix: {
  name: "dot_matrix",
  val: '#include "./drivers/HAL/Dot_matrix_module/dot_matrix.h"'
  },
  EEPROM: {
  name: "EEPROM",
  val: '#include "./drivers/HAL/EEPROM_module/eeprom.h"'
  },
  four_digits_seven_segment: {
  name: "four_digits_seven_segment",
  val: '#include "./drivers/HAL/Four_digit_seven_segment_module/four_digit_seven_segment.h"'
  },
  keypad: {
  name: "keypad",
  val: '#include "./drivers/HAL/Keypad_module/keypad.h"'
  },
  LCD: {
  name: "LCD",
  val: '#include "./drivers/HAL/LCD_module/lcd.h"'
  },
  LED: {
  name: "LED",
  val: '#include "./drivers/HAL/LED_module/led.h"'
  },
  motor_driver: {
  name: "motor_driver",
  val: '#include "./drivers/HAL/Motor_driver_module/motor_driver.h"'
    },
  port_expander: {
  name: "port_expander",
  val: '#include "./drivers/HAL/Port_expander_module/port_expander.h"'
    },  
  push_button: {
  name: "push_button",
  val: '#include "./drivers/HAL/Push_button_module/push_buton.h"',
  },
  relay: {
  name: "relay",
  val: '#include "./drivers/HAL/Relay_module/relay.h"',
  },
  single_digit_seven_segment: {
  name: "single_digit_seven_segment",
  val: '#include "./drivers/HAL/Single_digit_seven_segment_module/single_digit_seven_segment.h"',
  },
  bit_manipulation: {
  name: "bit_manipulation",
  val: '#include "./drivers/utilities/bit_manipulation.h"',
  },
};
