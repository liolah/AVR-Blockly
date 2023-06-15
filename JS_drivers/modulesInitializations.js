export default {
  dio: {
    dio_pin_init: {
        name: "DIO_pin_init",
        val: (pinNumber, portNumber, direction) => {
            return `DIO_pin_init(${pinNumber}, ${portNumber}, ${direction});`;
        },
      },
    dio_port_init: {
        name: "DIO_port_init",
        val: (portNumber, direction) => {
            return `DIO_port_init(${portNumber}, ${direction});`;
        },
      },
    },
  analog_sensors: {
      analog_sensors_init: {
        name: "analog_sensors_init",
        val: () => {
            return `Analog_sensors_init();`;
        },
      },
    },
  buzzer: {
      buzzer_init: {
        name:"buzzer_init",
        val: () => {
            return `Buzzer_init();`;
      },
    },
  },
  dot_matrix: {
    dot_matrix_init: {
        name:"dot_matrix_init",
        val: () => {
          return `Dot_matrix_init();`;
        },
    },
  },
  EEPROM: {
    EEPROM_init: {
      name:"EEPROM_init",
      val:() => {
        return `EEPROM_init();`;
      },
    },
  },
  four_digits_seven_segment: {
    four_digits_seven_segment_init: {
      name:"four_digits_seven_segment_init",
      val: () => {
        return `Four_digits_seven_segment_init();`;
      },
    },
  },
  keypad: {
    keypad_init: {
      name:"keypad_init",
      val:() => {
        return `Keypad_init();`;
      },
    },
  },
  LCD: {
    LCD_init: {
      name:"LCD_init",
      val: () => {
        return `LCD_init();`
      },
    },
  },
  ADC: {
    ADC_init: {
      name:"ADC_init",
      val: () => {
        return `ADC_init();`;
      },
    },
  },
  LED: {
    LED_module_init: {
      name:"LED_module_init",
      val: () => {
        return `LED_module_init();`;
      },
    },
  },
  motor_driver: {
    motor_driver_init: {
      name: "motor_driver_init",
      val: () => {
        return `Motor_driver_init();`;
      },
    },
    servo_init: {
      name: "servo_init",
      val: () => {
        return `Servo_init();`;
      },
    },
  },
  port_expander: {
    port_expander_module_init: {
      name: "port_expander_module_init",
      val: () => {
        return `Port_expander_module_init();`;
      },
    },
  },
  relay: {
    relay_module_init: {
      name: "relay_module_init",
      val: () => {
        return `Relay_module_init();`;
      },
    },  
  },
  seven_segment: {
      single_digit_seven_segment_module_init: {
      name: "single_digit_seven_segment_module_init",
      val: () => {
        return `Single_digit_seven_segment_module_init();`;
      },
    },
  },
  push_button: {
    push_button_module_init: {
      name: "push_button_module_init",
      val: () => {
        return `Push_button_module_init();`;
      },
    },
  },
}
