export default {
  dio: {
    DIO_pin_init: {
      name: "DIO_pin_init",
      val: (pinNumber, portNumber, direction) => {
        return `DIO_pin_init(${pinNumber}, ${portNumber}, ${direction});`;
      },
    },
    DIO_port_init: {
      name: "DIO_port_init",
      val: (portNumber, direction) => {
        return `DIO_port_init(${portNumber}, ${direction});`;
      },
    },
  },
};