export default {
  delay: {
    delay_ms: {
      name: "delay_ms",
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
