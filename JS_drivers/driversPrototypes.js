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
        return `DIO_pin_write(${pinNumber}, ${portNumber}, ${value});`;
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
      val: (duration = 0) => {
        return `_delay_ms(${duration});`;
      },
    },
    DIO_port_read: {
      name: "DIO_port_read",
      val: (duration = 0) => {
        return `_delay_ms(${duration});`;
      },
    },
    DIO_pin_toggle: {
      name: "DIO_pin_toggle",
      val: (duration = 0) => {
        return `_delay_ms(${duration});`;
      },
    },
  },
  test: {
    name: "test",
    val: (txt = "undefined") => {
      return `Hi, ${txt}!`;
    },
  },
};
