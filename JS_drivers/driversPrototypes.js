export default {
  delay: {
    delay_ms: {
      name: "delay_ms",
      val: (duration = 0) => {
        return `_delay_ms(${duration});`;
      },
    },
  },
  dio: {
    DIO_pin_write: {
      name: "DIO_pin_write",
      val: (pinNumber = 0, portNumber = 0, value = 0) => {
        return `DIO_port_write(${pinNumber}, ${portNumber}, ${value});`;
      },
    },
    DIO_pin_read: {
      name: "DIO_pin_read",
      val: (pinNumber, portNumber) => {
        return `DIO_pin_read(${pinNumber}, ${portNumber})`;
      },
    },
    DIO_port_write: {
      name: "DIO_port_write",
      val: (portNumber = 0, value = 0) => {
        return `DIO_port_write(${portNumber}, ${value});`;
      },
    },
    DIO_port_read: {
      name: "DIO_port_read",
      val: (portNumber = 0) => {
        return `DIO_port_read(${portNumber})`;
      },
    },
    DIO_pin_toggle: {
      name: "DIO_pin_toggle",
      val: (pinNumber = 0, portNumber = 0) => {
        return `DIO_port_toggle(${pinNumber}, ${portNumber});`;
      },
    },
  },
  bit_manipulation: {
    set_bit: {
      name: "set_bit",
      val: (portNumber = 0, pinNumber = 0) => {
        return `set_bit(${portNumber}, ${pinNumber});`;
      },
    },
    clear_bit: {
      name: "clear_bit",
      val: (portNumber = 0, pinNumber = 0) => {
        return `clear_bit(${portNumber}, ${pinNumber});`;
      },
    },
    toggle_bit: {
      name: "toggle_bit",
      val: (portNumber = 0, pinNumber = 0) => {
        return `toggle_bit(${portNumber}, ${pinNumber});`;
      },
    },
    read_bit: {
      name: "read_bit",
      val: (portNumber = 0, pinNumber = 0) => {
        return `read_bit(${portNumber}, ${pinNumber})`;
      },
    },
  },
  analog_sensors: {
    temperature_read: {
      name: "temperature_read",
      val: () => {
        return `Temperature_read()`;
      },
    },
    brightness_read: {
      name: "brightness_read",
      val: () => {
        return `Brightness_read()`;
      },
    },
    sound_level_read: {
      name: "sound_level_read",
      val: () => {
        return `Sound_level_read()`;
      },
    },
    external_sensor_read: {
      name: "external_sensor_read",
      val: (sensorNUm = 0) => {
        return `External_sensor_read(${sensorNUm})`;
      },
    },
  },
  adc: {
    adc: {
      name: "adc_read",
      val: (channel = 0) => {
        return `ADC_read(${channel})`;
      },
    },
  },
  buzzer: {
    buzzer_on: {
      name: "buzzer_on",
      val: () => {
        return `Buzzer_on();`;
      },
    },
    buzzer_off: {
      name: "buzzer_off",
      val: () => {
        return `Buzzer_off();`;
      },
    },
  },
  dot_matrix: {
    dot_matrix_display_char: {
      name: "dot_matrix_display_char",
      val: (x = 0) => {
        return `Dot_matrix_display_char(${x});`;
      },
    },
    eight_digit_seven_segment_display: {
      name: "eight_digit_seven_segment_display",
      val: (x = 0) => {
        return `Eight_digit_seven_segment_display(${x});`;
      },
    },
  },
  EEPROM: {
    EEPROM_write_byte: {
      name: "EEPROM_write_byte",
      val: (page = 0, address = 0, data = 0) => {
        return `EEPROM_write_byte(${page},${address},${data});`;
      },
    },
    EEPROM_read_byte: {
      name: "EEPROM_read_byte",
      val: (page = 0, address = 0) => {
        return `EEPROM_read_byte(${page},${address})`;
      },
    },
  },
  four_digits_seven_segment: {
    four_digits_seven_segment_display_num: {
      name: "four_digits_seven_segment_display_num",
      val: (x = 0) => {
        return `Four_digits_seven_segment_display_num(${x});`;
      },
    },
    four_digits_seven_segment_display_string: {
      name: "four_digits_seven_segment_display_string",
      val: (x = 0) => {
        return `Four_digits_seven_segment_display_num(${x});`;
      },
    },
    four_digits_seven_segment_brightness: {
      name: "four_digits_seven_segment_brightness",
      val: (brightness = 0) => {
        return `Four_digits_seven_segment_brightness(${brightness});`;
      },
    },
  },
  keypad: {
    keypad_getPressedKey: {
      name: "keypad_getPressedKey",
      val: () => {
        return `Keypad_getPressedKey()`;
      },
    },
  },
  LCD: {
    LCD_sendData: {
      name: "LCD_sendData",
      val: (data = 0) => {
        return `LCD_sendData(${data});`;
      },
    },
    LCD_sendCommand: {
      name: "LCD_sendCommand",
      val: (cmd = 0) => {
        return `LCD_sendCommand(${cmd});`;
      },
    },
    LCD_write_string: {
      name: "LCD_write_string",
      val: (str = 0) => {
        return `LCD_write_string(${str});`;
      },
    },
    LCD_move_cursor_xy: {
      name: "LCD_move_cursor_xy",
      val: (x = 0, y = 0) => {
        return `LCD_move_cursor_xy(${x},${y});`;
      },
    },
    LCD_write_string_xy: {
      name: "LCD_write_string_xy",
      val: (x = 0, y = 0, str = 0) => {
        return `LCD_write_string_xy(${x},${y},${str});`;
      },
    },
    LCD_clear_screen: {
      name: "LCD_clear_screen",
      val: (x = 0, y = 0, str = 0) => {
        return `LCD_clear_screen(${x},${y},${str});`;
      },
    },
  },
  LED: {
    LED_on: {
      name: "LED_on",
      val: (LEDNumber = 0) => {
        return `LED_on(${LEDNumber});`;
      },
    },
    LED_off: {
      name: "LED_off",
      val: (LEDNumber = 0) => {
        return `LED_off(${LEDNumber});`;
      },
    },
    LED_toggle: {
      name: "LED_toggle",
      val: (LEDNumber = 0) => {
        return `LED_toggle(${LEDNumber});`;
      },
    },
  },
  Motor: {
    motor_on: {
      name: "motor_on",
      val: (motorNumber = 0, direction = 0) => {
        return `Motor_on(${motorNumber}, ${direction});`;
      },
    },
    motor_off: {
      name: "motor_off",
      val: (motorNumber = 0) => {
        return `Motor_off(${motorNumber});`;
      },
    },
    servo_move_to_angle: {
      name: "servo_move_to_angle",
      val: (dc = 0) => {
        return `Servo_move_to_angle(${dc});`;
      },
    },
  },
  port_expander: {
    port_expander_module_write: {
      name: "port_expander_module_write",
      val: (chipNumber = 0, data = 0) => {
        return `Port_expander_module_write(${chipNumber}, ${data});`;
      },
    },
    port_expander_module_read: {
      name: "port_expander_module_read",
      val: (chipNumber = 0) => {
        return `Port_expander_module_read(${chipNumber})`;
      },
    },
  },
  relay: {
    relay_on: {
      name: "relay_on",
      val: (relayNumber = 0) => {
        return `Relay_on(${relayNumber});`;
      },
    },
    relay_off: {
      name: "relay_off",
      val: (relayNumber = 0) => {
        return `Relay_off(${relayNumber});`;
      },
    },
    relay_toggle: {
      name: "relay_toggle",
      val: (relayNumber = 0) => {
        return `Relay_toggle(${relayNumber});`;
      },
    },
    SSR_set_brightness: {
      name: "SSR_set_brightness",
      val: (dc = 0) => {
        return `SSR_set_brightness(${dc});`;
      },
    },
  },
  single_digit_seven_segment: {
    single_digit_seven_segment_show_hex_num: {
      name: "single_digit_seven_segment_show_hex_num",
      val: (num = 0) => {
        return `Single_digit_seven_segment_show_hex_num(${num});`;
      },
    },
  },
  push_button: {
    push_button_read: {
      name: "push_button_read",
      val: (button = 0) => {
        return `Push_button_read(${button})`;
      },
    },
  },
};
