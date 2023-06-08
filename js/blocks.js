// this files contains the functions that defines the appearance of the blocks
"use strict";

Blockly.Blocks.base = {};

import { profile } from "./avr.js";

// liolah
Blockly.Blocks.base_delay = {
  helpUrl: "",
  init: function () {
    this.setColour(120);
    this.appendValueInput("DELAY_TIME", "Number")
      .appendField("Delay")
      .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("Delay specific time");
  },
};

Blockly.Blocks.base_map = {
  helpUrl: "",
  init: function () {
    this.setColour(230);
    this.appendValueInput("NUM", "Number")
      .appendField("Map ")
      .setCheck("Number");
    this.appendValueInput("DMAX", "Number")
      .appendField("value to [0-")
      .setCheck("Number");
    this.appendDummyInput().appendField("]");
    this.setInputsInline(!0);
    this.setOutput(!0);
    this.setTooltip("Re-maps a number from [0-1024] to another.");
  },
};

// Blockly.Blocks.temperature_read = {
//   helpUrl: "",
//   init: function () {
//     this.setColour(350);
//     this.appendDummyInput().appendField("Read temperature value");
//     this.setOutput(!0, "Number");
//     this.setTooltip("Read brightness level from a sensor");
//   },
// };

Blockly.Blocks.temperature_read = {
  helpUrl: "",
  init: function () {
    this.setColour(230);
    this.appendDummyInput()
      .appendField("Read temperature value");
    this.setOutput(!0, "Number");
    this.setTooltip("Return value between 0 and 1024");
  },
};

Blockly.Blocks.brightness_read = {
  helpUrl: "",
  init: function () {
    this.setColour(350);
    this.appendDummyInput().appendField("Read brightness value");
    this.setOutput(!0);
    this.setTooltip("Read brightness level from a sensor");
  },
};
Blockly.Blocks.sound_level_read = {
  helpUrl: "",
  init: function () {
    this.setColour(350);
    this.appendDummyInput().appendField("Read sound level ");
    this.setOutput(!0);
    this.setTooltip("Read the sound level");
  },
};
Blockly.Blocks.external_sensor_read = {
  helpUrl: "",
  init: function () {
    this.setColour(350);
    this.appendDummyInput()
      .appendField("Read external sensor ")
      .appendField(
        new Blockly.FieldDropdown([
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
        ]),
        "sensors"
      );
    this.setOutput(!0, "Number");
    this.setTooltip("Read a value from an external sensor");
  },
};
Blockly.Blocks.buzzer_on = {
  helpUrl: "",
  init: function () {
    this.setColour(350);
    this.appendDummyInput().appendField("Turn Buzzer on");
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("Turns the buzzer on");
  },
};
Blockly.Blocks.buzzer_off = {
  helpUrl: "",
  init: function () {
    this.setColour(350);
    this.appendDummyInput().appendField("Turn Buzzer off");
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("Turns the buzzer off");
  },
};
Blockly.Blocks.dot_matrix_display_char = {
  helpUrl: "",
  init: function () {
    this.setColour(230);
    this.appendDummyInput()
      .appendField("Display character")
      .appendField(new Blockly.FieldTextInput("X"), "CHARACTER")
      .appendField("on dot matrix");
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("Display a character on a dot matrix display");
  },
};
Blockly.Blocks.eight_digit_seven_segment_display = {
  helpUrl: "",
  init: function () {
    this.setColour(270);
    this.appendDummyInput()
      .appendField("Display number")
      .appendField(
        new Blockly.FieldTextInput("0", Blockly.FieldTextInput.numberValidator),
        "NUMBER"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Display a number on an eight-digit seven-segment display");
  },
};
Blockly.Blocks.EEPROM_write_byte = {
  helpUrl: "",
  init: function () {
    this.setColour(180);
    this.appendDummyInput()
      .appendField("Write byte")
      .appendField(
        new Blockly.FieldTextInput("0", Blockly.FieldTextInput.numberValidator),
        "ADDRESS"
      )
      .appendField("to EEPROM")
      .appendField(
        new Blockly.FieldTextInput("0", Blockly.FieldTextInput.numberValidator),
        "VALUE"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Write a byte to EEPROM at a specific address");
  },
};
Blockly.Blocks.EEPROM_read_byte = {
  helpUrl: "",
  init: function () {
    this.setColour(210);
    this.appendDummyInput()
      .appendField("Read byte from EEPROM")
      .appendField(
        new Blockly.FieldTextInput("0", Blockly.FieldTextInput.numberValidator),
        "ADDRESS"
      );
    this.setOutput(true, null);
    this.setTooltip("Read a byte from EEPROM at a specific address");
  },
};

Blockly.Blocks.inout_buildin_led = {
  helpUrl: "",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("Build-in LED Stat")
      .appendField(
        new Blockly.FieldDropdown([
          ["HIGH", "HIGH"],
          ["LOW", "LOW"],
        ]),
        "STAT"
      );
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("light or off the build-in LED");
  },
};

// Edited by liolah
Blockly.Blocks.inout_digital_write = {
  helpUrl: "",
  init: function () {
    this.setColour(230);
    this.appendDummyInput()
      .appendField("Set the output of pin# ")
      .appendField(new Blockly.FieldDropdown(profile["default"].pins), "PIN")
      .appendField(" on port ")
      .appendField(new Blockly.FieldDropdown(profile["default"].ports), "PORT")
      .appendField(" to ")
      .appendField(
        new Blockly.FieldDropdown([
          ["HIGH", "HIGH"],
          ["LOW", "LOW"],
        ]),
        "STAT"
      );
    this.setPreviousStatement(1, null);
    this.setNextStatement(1, null);
    this.setTooltip("set the output state of a specific pin");
  },
};

Blockly.Blocks.inout_digital_read = {
  helpUrl: "",
  init: function () {
    this.setColour(230);
    this.appendDummyInput()
      .appendField("DigitalRead PIN#")
      .appendField(
        new Blockly.FieldDropdown(profile["default"].digital),
        "PIN"
      );
    this.setOutput(!0, "Boolean");
    this.setTooltip("");
  },
};

Blockly.Blocks.h = {
  helpUrl: "",
  init: function () {
    this.setColour(300);
    this.appendDummyInput()
      .appendField("Hello! I am a test!")
      .appendField(
        new Blockly.FieldDropdown([
          ["Lol", "lol"],
          ["Lmao", "dfaskolfasdjiod"],
        ]),
        "HAHA"
      );
    this.setTooltip("");
  },
};

Blockly.Blocks.inout_analog_write = {
  helpUrl: "",
  init: function () {
    this.setColour(230);
    this.appendDummyInput()
      .appendField("AnalogWrite PIN#")
      .appendField(
        new Blockly.FieldDropdown(profile["default"].digital),
        "PIN"
      );
    this.appendValueInput("NUM", "Number")
      .appendField("value")
      .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("Write analog value between 0 and 255 to a specific Port");
  },
};
Blockly.Blocks.inout_analog_read = {
  helpUrl: "",
  init: function () {
    this.setColour(230);
    this.appendDummyInput()
      .appendField("AnalogRead PIN#")
      .appendField(new Blockly.FieldDropdown(profile["default"].analog), "PIN");
    this.setOutput(!0, "Number");
    this.setTooltip("Return value between 0 and 1024");
  },
};
Blockly.Blocks.inout_tone = {
  helpUrl: "",
  init: function () {
    this.setColour(230);
    this.appendDummyInput()
      .appendField("Tone PIN#")
      .appendField(
        new Blockly.FieldDropdown(profile["default"].digital),
        "PIN"
      );
    this.appendValueInput("NUM", "Number")
      .appendField("frequency")
      .setCheck("Number");
    this.setInputsInline(!0);
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("Generate audio tones on a pin");
  },
};
Blockly.Blocks.inout_notone = {
  helpUrl: "",
  init: function () {
    this.setColour(230);
    this.appendDummyInput()
      .appendField("No tone PIN#")
      .appendField(
        new Blockly.FieldDropdown(profile["default"].digital),
        "PIN"
      );
    this.setInputsInline(!0);
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("Stop generating a tone on a pin");
  },
};
Blockly.Blocks.inout_highlow = {
  helpUrl: "",
  init: function () {
    this.setColour(230);
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["HIGH", "HIGH"],
        ["LOW", "LOW"],
      ]),
      "BOOL"
    );
    this.setOutput(!0, "Boolean");
    this.setTooltip("");
  },
};
Blockly.Blocks.servo_move = {
  helpUrl: "",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("Servo")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/images/product/EMAX%20Servo.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(
        new Blockly.FieldDropdown(profile["default"].digital),
        "PIN"
      );
    this.appendValueInput("DEGREE", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Degree (0~180)");
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("move between 0~180 degree");
  },
};
Blockly.Blocks.servo_read_degrees = {
  helpUrl: "",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("Servo")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/images/product/EMAX%20Servo.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(
        new Blockly.FieldDropdown(profile["default"].digital),
        "PIN"
      );
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Read Degrees");
    this.setOutput(!0, "Number");
    this.setTooltip("return that degree with the last servo move.");
  },
};
Blockly.Blocks.serial_print = {
  helpUrl: "",
  init: function () {
    this.setColour(230);
    this.appendValueInput("CONTENT", "String").appendField("Serial Print");
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip(
      "Prints data to the console/serial port as human-readable ASCII text."
    );
  },
};
// Copyright 2012 Google Inc.  Apache License 2.0
Blockly.Blocks.colour = {};
Blockly.Blocks.colour.HUE = 20;
Blockly.Blocks.colour_picker = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.COLOUR_PICKER_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendDummyInput().appendField(
      new Blockly.FieldColour("#ff0000"),
      "COLOUR"
    );
    this.setOutput(!0, "Colour");
    this.setTooltip(Blockly.Msg.COLOUR_PICKER_TOOLTIP);
  },
};
Blockly.Blocks.colour_random = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.COLOUR_RANDOM_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendDummyInput().appendField(Blockly.Msg.COLOUR_RANDOM_TITLE);
    this.setOutput(!0, "Colour");
    this.setTooltip(Blockly.Msg.COLOUR_RANDOM_TOOLTIP);
  },
};
Blockly.Blocks.colour_rgb = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.COLOUR_RGB_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendValueInput("RED")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOUR_RGB_TITLE)
      .appendField(Blockly.Msg.COLOUR_RGB_RED);
    this.appendValueInput("GREEN")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOUR_RGB_GREEN);
    this.appendValueInput("BLUE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOUR_RGB_BLUE);
    this.setOutput(!0, "Colour");
    this.setTooltip(Blockly.Msg.COLOUR_RGB_TOOLTIP);
  },
};
Blockly.Blocks.colour_blend = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.COLOUR_BLEND_HELPURL);
    this.setColour(Blockly.Blocks.colour.HUE);
    this.appendValueInput("COLOUR1")
      .setCheck("Colour")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOUR_BLEND_TITLE)
      .appendField(Blockly.Msg.COLOUR_BLEND_COLOUR1);
    this.appendValueInput("COLOUR2")
      .setCheck("Colour")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOUR_BLEND_COLOUR2);
    this.appendValueInput("RATIO")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.COLOUR_BLEND_RATIO);
    this.setOutput(!0, "Colour");
    this.setTooltip(Blockly.Msg.COLOUR_BLEND_TOOLTIP);
  },
};
Blockly.Blocks.grove = {};
Blockly.Blocks.grove_led = {
  helpUrl:
    "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("LED")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/images/product/groveblue%20white.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN")
      .appendField("stat")
      .appendField(
        new Blockly.FieldDropdown([
          ["HIGH", "HIGH"],
          ["LOW", "LOW"],
        ]),
        "STAT"
      );
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("green LED");
  },
};
Blockly.Blocks.grove_button = {
  helpUrl:
    "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Button",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("Button")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/images/product/bgpushb1.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(
        new Blockly.FieldDropdown(profile["default"].digital),
        "PIN"
      );
    this.setOutput(!0, "Boolean");
    this.setTooltip("Basic digital input");
  },
};
Blockly.Blocks.grove_rotary_angle = {
  helpUrl:
    "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Potentiometer",
  init: function () {
    this.setColour(10);
    this.appendDummyInput()
      .appendField("Rotary Angle")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/images/product/GroveRotaryP.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile["default"].analog), "PIN");
    this.setOutput(!0, "Number");
    this.setTooltip("Analog output between 0 and Vcc");
  },
};
Blockly.Blocks.grove_tilt_switch = {
  helpUrl:
    "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Tilt_switch",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("Tilt Switch")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/images/product/gbtlt.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(
        new Blockly.FieldDropdown(profile["default"].digital),
        "PIN"
      );
    this.setOutput(!0, "Boolean");
    this.setTooltip(
      "When the switch is level it is open, and when tilted, the switch closes."
    );
  },
};
Blockly.Blocks.grove_piezo_buzzer = {
  helpUrl:
    "http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b#Grove_.E2.80.93_Buzzer",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("Piezo Buzzer")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/images/107020000%201.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN")
      .appendField("stat")
      .appendField(
        new Blockly.FieldDropdown([
          ["HIGH", "HIGH"],
          ["LOW", "LOW"],
        ]),
        "STAT"
      );
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("Emit a tone when the output is high");
  },
};
Blockly.Blocks.grove_relay = {
  helpUrl: "http://www.seeedstudio.com/wiki/Grove_-_Relay",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("Relay")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/images/1030200051.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN")
      .appendField("stat")
      .appendField(
        new Blockly.FieldDropdown([
          ["HIGH", "HIGH"],
          ["LOW", "LOW"],
        ]),
        "STAT"
      );
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip(
      "capable of switching a much higher voltages and currents. The maximum voltage and current that can be controlled by this module upto 250V at 10 amps."
    );
  },
};
Blockly.Blocks.grove_temporature_sensor = {
  helpUrl: "http://www.seeedstudio.com/wiki/Project_Seven_-_Temperature",
  init: function () {
    this.setColour(10);
    this.appendDummyInput()
      .appendField("Temporature Sensor")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/images/101020015%201.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile["default"].analog), "PIN");
    this.setOutput(!0, "Number");
    this.setTooltip("return number of ambient temperature in \u2103");
  },
};
Blockly.Blocks.grove_serial_lcd_print = {
  helpUrl:
    "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Serial_LCD",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("Serial LCD")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/images/product/Serial%20LCD.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(
        new Blockly.FieldDropdown(profile["default"].digital),
        "PIN"
      );
    this.appendValueInput("TEXT", "String")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("print line1");
    this.appendValueInput("TEXT2", "String")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("print line2");
    this.appendValueInput("DELAY_TIME", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Delay");
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("print text on an 16 character by 2 line LCD.");
  },
};
Blockly.Blocks.grove_serial_lcd_power = {
  helpUrl:
    "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("Serial LCD")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/images/product/Serial%20LCD.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(
        new Blockly.FieldDropdown(profile["default"].digital),
        "PIN"
      );
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Power")
      .appendField(
        new Blockly.FieldDropdown([
          ["ON", "ON"],
          ["OFF", "OFF"],
        ]),
        "STAT"
      );
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("Turn LCD power on/off");
  },
};
Blockly.Blocks.grove_serial_lcd_effect = {
  helpUrl:
    "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("Serial LCD")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/images/product/Serial%20LCD.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(
        new Blockly.FieldDropdown(profile["default"].digital),
        "PIN"
      );
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Effect")
      .appendField(
        new Blockly.FieldDropdown([
          ["Scroll Left", "LEFT"],
          ["Scroll Right", "RIGHT"],
          ["Scroll Auto", "AUTO"],
        ]),
        "STAT"
      );
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("Turn LCD power on/off");
  },
};
Blockly.Blocks.grove_sound_sensor = {
  helpUrl: "http://www.seeedstudio.com/wiki/Grove_-_Sound_Sensor",
  init: function () {
    this.setColour(10);
    this.appendDummyInput()
      .appendField("Sound Sensor")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/seeed/img/2017-02/fhpNt4QmMYZRtWvB40LIiMrw.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile["default"].analog), "PIN");
    this.setOutput(!0, "Number");
    this.setTooltip("Detect the sound strength of the environment");
  },
};
Blockly.Blocks.grove_pir_motion_sensor = {
  helpUrl: "http://www.seeedstudio.com/wiki/Grove_-_PIR_Motion_Sensor",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("PIR Motion Sensor")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/images/product/Grove%20-%20PIR%20Motion%20Sensor.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(
        new Blockly.FieldDropdown(profile["default"].digital),
        "PIN"
      );
    this.setOutput(!0, "Number");
    this.setTooltip(
      "When anyone moves in it's detecting range, the sensor outputs HIGH."
    );
  },
};
Blockly.Blocks.grove_line_finder = {
  helpUrl: "http://www.seeedstudio.com/wiki/Grove_-_Line_Finder",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("Line Finder")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/seeed/img/2016-09/WcjECS8Y4O8dSFI1TxymsAtg.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(
        new Blockly.FieldDropdown(profile["default"].digital),
        "PIN"
      );
    this.setOutput(!0, "Boolean");
    this.setTooltip(
      "Output digital signal so the robot can reliably follow a black line on a white background"
    );
  },
};
Blockly.Blocks.grove_ultrasonic_ranger = {
  helpUrl: "http://www.seeedstudio.com/wiki/Grove_-_Ultrasonic_Ranger",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("Ultrasonic Ranger")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/seeed/img/2016-09/kIyY21sbC6ct7JYzCWf1mAPs.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile["default"].digital), "PIN")
      .appendField("unit")
      .appendField(
        new Blockly.FieldDropdown([
          ["cm", "cm"],
          ["inch", "inch"],
        ]),
        "UNIT"
      );
    this.setOutput(!0, "Number");
    this.setTooltip("Non-contact distance measurement module");
  },
};
Blockly.Blocks.grove_motor_shield = {
  helpUrl: "http://www.seeedstudio.com/wiki/Motor_Shield",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("Motor")
      .appendField(
        new Blockly.FieldImage(
          "http://wiki.seeedstudio.com/images/4/4d/Smotoshield2.jpg",
          64,
          64
        )
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["Stop", "stop"],
          ["Forward", "forward"],
          ["Right", "right"],
          ["Left", "left"],
          ["Backward", "backward"],
        ]),
        "DIRECTION"
      );
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("Drive two brushed DC motors");
  },
};
Blockly.Blocks.grove_thumb_joystick = {
  helpUrl: "http://www.seeedstudio.com/wiki/Grove_-_Thumb_Joystick",
  init: function () {
    this.setColour(10);
    this.appendDummyInput()
      .appendField("Thumb Joystick")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/images/product/bgjoy1.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(new Blockly.FieldDropdown(profile["default"].analog), "PIN")
      .appendField("axis")
      .appendField(
        new Blockly.FieldDropdown([
          ["x", "x"],
          ["y", "y"],
        ]),
        "AXIS"
      );
    this.setOutput(!0, "Number");
    this.setTooltip(
      "output two analog values(200~800) representing two directions"
    );
  },
};
Blockly.Blocks.grove_rgb_led = {
  helpUrl:
    "http://www.seeedstudio.com/wiki/index.php?title=Twig_-_Chainable_RGB_LED",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("Chainable RGB LED")
      .appendField(
        new Blockly.FieldImage(
          "https://statics3.seeedstudio.com/images/product/chanbalelednb1.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(
        new Blockly.FieldDropdown(profile["default"].digital),
        "PIN"
      );
    this.appendDummyInput("COLOR0")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Color 1")
      .appendField(new Blockly.FieldColour("#00ff00"), "RGB0");
    this.setMutator(new Blockly.Mutator(["grove_rgb_led_item"]));
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip(
      "256 color LED, currently Chainable feature is not support"
    );
    this.itemCount_ = 1;
  },
  mutationToDom: function () {
    var a = document.createElement("mutation");
    a.setAttribute("items", this.itemCount_);
    for (var b = 0; b < this.itemCount_; b++) {
      var c = this.getFieldValue("RGB0");
      a.setAttribute("RGB" + b, c);
    }
    return a;
  },
  domToMutation: function (a) {
    for (var b = 0; b < this.itemCount_; b++) this.removeInput("COLOR" + b);
    this.itemCount_ = window.parseInt(a.getAttribute("items"), 10);
    for (b = 0; b < this.itemCount_; b++) {
      var c = window.parseInt(a.getAttribute("RGB" + b), "#00ff00");
      this.appendDummyInput("COLOR" + b)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color " + (b + 1))
        .appendField(new Blockly.FieldColour(c), "RGB" + b);
    }
    0 == this.itemCount_ &&
      this.appendDummyInput("COLOR0")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color 1")
        .appendField(new Blockly.FieldColour("#00ff00"), "RGB0");
  },
  decompose: function (a) {
    var b = Blockly.Block.obtain(a, "grove_rgb_led_container");
    b.initSvg();
    for (
      var c = b.getInput("STACK").connection, d = 0;
      d < this.itemCount_;
      d++
    ) {
      var e = Blockly.Block.obtain(a, "grove_rgb_led_item");
      e.initSvg();
      c.connect(e.previousConnection);
      c = e.nextConnection;
    }
    return b;
  },
  compose: function (a) {
    if (0 == this.itemCount_) this.removeInput("COLOR0");
    else
      for (var b = this.itemCount_ - 1; 0 <= b; b--)
        this.removeInput("COLOR" + b);
    this.itemCount_ = 0;
    for (a = a.getInputTargetBlock("STACK"); a; ) {
      b = this.getFieldValue("RGB" + this.itemCount_);
      null == b && (b = "00ff00");
      var c = this.appendDummyInput("COLOR" + this.itemCount_);
      c.setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color " + (this.itemCount_ + 1))
        .appendField(new Blockly.FieldColour(b), "RGB" + this.itemCount_);
      a.valueConnection_ && c.connection.connect(a.valueConnection_);
      this.itemCount_++;
      a = a.nextConnection && a.nextConnection.targetBlock();
    }
    0 == this.itemCount_ &&
      this.appendDummyInput("COLOR0")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color 1")
        .appendField(new Blockly.FieldColour("#00ff00"), "RGB0");
  },
};
Blockly.Blocks.grove_rgb_led_container = {
  init: function () {
    this.setColour(190);
    this.appendDummyInput().appendField("Container");
    this.appendStatementInput("STACK");
    this.setTooltip("Add, remove items to reconfigure this chain");
    this.contextMenu = !1;
  },
};
Blockly.Blocks.grove_rgb_led_item = {
  init: function () {
    this.setColour(190);
    this.appendDummyInput().appendField("Item");
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip("Add an item to the chain");
    this.contextMenu = !1;
  },
};
Blockly.Blocks.grove_bluetooth_slave = {
  category: "Network",
  helpUrl: "http://www.seeedstudio.com/wiki/Grove_-_Serial_Bluetooth",
  init: function () {
    this.setColour(190);
    this.appendDummyInput()
      .appendField("Bluetooth Slave")
      .appendField(
        new Blockly.FieldImage(
          "http://www.seeedstudio.com/wiki/File:Twigbt00.jpg",
          64,
          64
        )
      )
      .appendField("PIN#")
      .appendField(
        new Blockly.FieldDropdown(profile["default"].digital),
        "PIN"
      );
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Name")
      .appendField(new Blockly.FieldTextInput("blocklyduino"), "NAME");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Pincode")
      .appendField(new Blockly.FieldTextInput("0000"), "PINCODE");
    this.appendStatementInput("RCV")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Receive");
    this.appendStatementInput("SNT")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Send");
    this.setPreviousStatement(!0, null);
    this.setNextStatement(!0, null);
    this.setTooltip("Bluetooth V2.0+EDR slave. Support single slave per board");
  },
};
Blockly.Blocks.lists = {};
Blockly.Blocks.lists.HUE = 260;
Blockly.Blocks.lists_create_empty = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.setOutput(!0, "Array");
    this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP);
  },
};
Blockly.Blocks.lists_create_with = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.LISTS_CREATE_WITH_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(!0, "Array");
    this.setMutator(new Blockly.Mutator(["lists_create_with_item"]));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
  },
  mutationToDom: function () {
    var a = document.createElement("mutation");
    a.setAttribute("items", this.itemCount_);
    return a;
  },
  domToMutation: function (a) {
    this.itemCount_ = parseInt(a.getAttribute("items"), 10);
    this.updateShape_();
  },
  decompose: function (a) {
    var b = Blockly.Block.obtain(a, "lists_create_with_container");
    b.initSvg();
    for (
      var c = b.getInput("STACK").connection, d = 0;
      d < this.itemCount_;
      d++
    ) {
      var e = Blockly.Block.obtain(a, "lists_create_with_item");
      e.initSvg();
      c.connect(e.previousConnection);
      c = e.nextConnection;
    }
    return b;
  },
  compose: function (a) {
    a = a.getInputTargetBlock("STACK");
    for (var b = [], c = 0; a; )
      (b[c] = a.valueConnection_),
        (a = a.nextConnection && a.nextConnection.targetBlock()),
        c++;
    this.itemCount_ = c;
    this.updateShape_();
    for (c = 0; c < this.itemCount_; c++)
      b[c] && this.getInput("ADD" + c).connection.connect(b[c]);
  },
  saveConnections: function (a) {
    a = a.getInputTargetBlock("STACK");
    for (var b = 0; a; ) {
      var c = this.getInput("ADD" + b);
      a.valueConnection_ = c && c.connection.targetConnection;
      b++;
      a = a.nextConnection && a.nextConnection.targetBlock();
    }
  },
  updateShape_: function () {
    if (this.getInput("EMPTY")) this.removeInput("EMPTY");
    else
      for (var a = 0; this.getInput("ADD" + a); )
        this.removeInput("ADD" + a), a++;
    if (0 == this.itemCount_)
      this.appendDummyInput("EMPTY").appendField(
        Blockly.Msg.LISTS_CREATE_EMPTY_TITLE
      );
    else
      for (a = 0; a < this.itemCount_; a++) {
        var b = this.appendValueInput("ADD" + a);
        0 == a && b.appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH);
      }
  },
};
Blockly.Blocks.lists_create_with_container = {
  init: function () {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput().appendField(
      Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD
    );
    this.appendStatementInput("STACK");
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
};
Blockly.Blocks.lists_create_with_item = {
  init: function () {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput().appendField(
      Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE
    );
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = !1;
  },
};
Blockly.Blocks.lists_repeat = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.LISTS_REPEAT_TITLE,
      args0: [
        { type: "input_value", name: "ITEM" },
        { type: "input_value", name: "NUM", check: "Number" },
      ],
      output: "Array",
      colour: Blockly.Blocks.lists.HUE,
      tooltip: Blockly.Msg.LISTS_REPEAT_TOOLTIP,
      helpUrl: Blockly.Msg.LISTS_REPEAT_HELPURL,
    });
  },
};
Blockly.Blocks.lists_length = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.LISTS_LENGTH_TITLE,
      args0: [
        { type: "input_value", name: "VALUE", check: ["String", "Array"] },
      ],
      output: "Number",
      colour: Blockly.Blocks.lists.HUE,
      tooltip: Blockly.Msg.LISTS_LENGTH_TOOLTIP,
      helpUrl: Blockly.Msg.LISTS_LENGTH_HELPURL,
    });
  },
};
Blockly.Blocks.lists_isEmpty = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.LISTS_ISEMPTY_TITLE,
      args0: [
        { type: "input_value", name: "VALUE", check: ["String", "Array"] },
      ],
      output: "Boolean",
      colour: Blockly.Blocks.lists.HUE,
      tooltip: Blockly.Msg.LISTS_ISEMPTY_TOOLTIP,
      helpUrl: Blockly.Msg.LISTS_ISEMPTY_HELPURL,
    });
  },
};
Blockly.Blocks.lists_indexOf = {
  init: function () {
    var a = [
      [Blockly.Msg.LISTS_INDEX_OF_FIRST, "FIRST"],
      [Blockly.Msg.LISTS_INDEX_OF_LAST, "LAST"],
    ];
    this.setHelpUrl(Blockly.Msg.LISTS_INDEX_OF_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.setOutput(!0, "Number");
    this.appendValueInput("VALUE")
      .setCheck("Array")
      .appendField(Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST);
    this.appendValueInput("FIND").appendField(
      new Blockly.FieldDropdown(a),
      "END"
    );
    this.setInputsInline(!0);
    this.setTooltip(Blockly.Msg.LISTS_INDEX_OF_TOOLTIP);
  },
};
Blockly.Blocks.lists_getIndex = {
  init: function () {
    var a = [
      [Blockly.Msg.LISTS_GET_INDEX_GET, "GET"],
      [Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"],
      [Blockly.Msg.LISTS_GET_INDEX_REMOVE, "REMOVE"],
    ];
    this.WHERE_OPTIONS = [
      [Blockly.Msg.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [Blockly.Msg.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [Blockly.Msg.LISTS_GET_INDEX_FIRST, "FIRST"],
      [Blockly.Msg.LISTS_GET_INDEX_LAST, "LAST"],
      [Blockly.Msg.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.setHelpUrl(Blockly.Msg.LISTS_GET_INDEX_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    a = new Blockly.FieldDropdown(a, function (a) {
      this.sourceBlock_.updateStatement_("REMOVE" == a);
    });
    this.appendValueInput("VALUE")
      .setCheck("Array")
      .appendField(Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST);
    this.appendDummyInput().appendField(a, "MODE").appendField("", "SPACE");
    this.appendDummyInput("AT");
    Blockly.Msg.LISTS_GET_INDEX_TAIL &&
      this.appendDummyInput("TAIL").appendField(
        Blockly.Msg.LISTS_GET_INDEX_TAIL
      );
    this.setInputsInline(!0);
    this.setOutput(!0);
    this.updateAt_(!0);
    var b = this;
    this.setTooltip(function () {
      var a = b.getFieldValue("MODE") + "_" + b.getFieldValue("WHERE");
      return Blockly.Msg["LISTS_GET_INDEX_TOOLTIP_" + a];
    });
  },
  mutationToDom: function () {
    var a = document.createElement("mutation");
    a.setAttribute("statement", !this.outputConnection);
    var b = this.getInput("AT").type == Blockly.INPUT_VALUE;
    a.setAttribute("at", b);
    return a;
  },
  domToMutation: function (a) {
    var b = "true" == a.getAttribute("statement");
    this.updateStatement_(b);
    a = "false" != a.getAttribute("at");
    this.updateAt_(a);
  },
  updateStatement_: function (a) {
    a != !this.outputConnection &&
      (this.unplug(!0, !0),
      a
        ? (this.setOutput(!1),
          this.setPreviousStatement(!0),
          this.setNextStatement(!0))
        : (this.setPreviousStatement(!1),
          this.setNextStatement(!1),
          this.setOutput(!0)));
  },
  updateAt_: function (a) {
    this.removeInput("AT");
    this.removeInput("ORDINAL", !0);
    a
      ? (this.appendValueInput("AT").setCheck("Number"),
        Blockly.Msg.ORDINAL_NUMBER_SUFFIX &&
          this.appendDummyInput("ORDINAL").appendField(
            Blockly.Msg.ORDINAL_NUMBER_SUFFIX
          ))
      : this.appendDummyInput("AT");
    var b = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function (b) {
      var d = "FROM_START" == b || "FROM_END" == b;
      if (d != a) {
        var e = this.sourceBlock_;
        e.updateAt_(d);
        e.setFieldValue(b, "WHERE");
        return null;
      }
    });
    this.getInput("AT").appendField(b, "WHERE");
    Blockly.Msg.LISTS_GET_INDEX_TAIL && this.moveInputBefore("TAIL", null);
  },
};
Blockly.Blocks.lists_setIndex = {
  init: function () {
    var a = [
      [Blockly.Msg.LISTS_SET_INDEX_SET, "SET"],
      [Blockly.Msg.LISTS_SET_INDEX_INSERT, "INSERT"],
    ];
    this.WHERE_OPTIONS = [
      [Blockly.Msg.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [Blockly.Msg.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [Blockly.Msg.LISTS_GET_INDEX_FIRST, "FIRST"],
      [Blockly.Msg.LISTS_GET_INDEX_LAST, "LAST"],
      [Blockly.Msg.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.setHelpUrl(Blockly.Msg.LISTS_SET_INDEX_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendValueInput("LIST")
      .setCheck("Array")
      .appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(a), "MODE")
      .appendField("", "SPACE");
    this.appendDummyInput("AT");
    this.appendValueInput("TO").appendField(
      Blockly.Msg.LISTS_SET_INDEX_INPUT_TO
    );
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.LISTS_SET_INDEX_TOOLTIP);
    this.updateAt_(!0);
    var b = this;
    this.setTooltip(function () {
      var a = b.getFieldValue("MODE") + "_" + b.getFieldValue("WHERE");
      return Blockly.Msg["LISTS_SET_INDEX_TOOLTIP_" + a];
    });
  },
  mutationToDom: function () {
    var a = document.createElement("mutation"),
      b = this.getInput("AT").type == Blockly.INPUT_VALUE;
    a.setAttribute("at", b);
    return a;
  },
  domToMutation: function (a) {
    a = "false" != a.getAttribute("at");
    this.updateAt_(a);
  },
  updateAt_: function (a) {
    this.removeInput("AT");
    this.removeInput("ORDINAL", !0);
    a
      ? (this.appendValueInput("AT").setCheck("Number"),
        Blockly.Msg.ORDINAL_NUMBER_SUFFIX &&
          this.appendDummyInput("ORDINAL").appendField(
            Blockly.Msg.ORDINAL_NUMBER_SUFFIX
          ))
      : this.appendDummyInput("AT");
    var b = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function (b) {
      var d = "FROM_START" == b || "FROM_END" == b;
      if (d != a) {
        var e = this.sourceBlock_;
        e.updateAt_(d);
        e.setFieldValue(b, "WHERE");
        return null;
      }
    });
    this.moveInputBefore("AT", "TO");
    this.getInput("ORDINAL") && this.moveInputBefore("ORDINAL", "TO");
    this.getInput("AT").appendField(b, "WHERE");
  },
};
Blockly.Blocks.lists_getSublist = {
  init: function () {
    this.WHERE_OPTIONS_1 = [
      [Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"],
      [Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"],
      [Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST, "FIRST"],
    ];
    this.WHERE_OPTIONS_2 = [
      [Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"],
      [Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"],
      [Blockly.Msg.LISTS_GET_SUBLIST_END_LAST, "LAST"],
    ];
    this.setHelpUrl(Blockly.Msg.LISTS_GET_SUBLIST_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendValueInput("LIST")
      .setCheck("Array")
      .appendField(Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST);
    this.appendDummyInput("AT1");
    this.appendDummyInput("AT2");
    Blockly.Msg.LISTS_GET_SUBLIST_TAIL &&
      this.appendDummyInput("TAIL").appendField(
        Blockly.Msg.LISTS_GET_SUBLIST_TAIL
      );
    this.setInputsInline(!0);
    this.setOutput(!0, "Array");
    this.updateAt_(1, !0);
    this.updateAt_(2, !0);
    this.setTooltip(Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP);
  },
  mutationToDom: function () {
    var a = document.createElement("mutation"),
      b = this.getInput("AT1").type == Blockly.INPUT_VALUE;
    a.setAttribute("at1", b);
    b = this.getInput("AT2").type == Blockly.INPUT_VALUE;
    a.setAttribute("at2", b);
    return a;
  },
  domToMutation: function (a) {
    var b = "true" == a.getAttribute("at1");
    a = "true" == a.getAttribute("at2");
    this.updateAt_(1, b);
    this.updateAt_(2, a);
  },
  updateAt_: function (a, b) {
    this.removeInput("AT" + a);
    this.removeInput("ORDINAL" + a, !0);
    b
      ? (this.appendValueInput("AT" + a).setCheck("Number"),
        Blockly.Msg.ORDINAL_NUMBER_SUFFIX &&
          this.appendDummyInput("ORDINAL" + a).appendField(
            Blockly.Msg.ORDINAL_NUMBER_SUFFIX
          ))
      : this.appendDummyInput("AT" + a);
    var c = new Blockly.FieldDropdown(this["WHERE_OPTIONS_" + a], function (c) {
      var e = "FROM_START" == c || "FROM_END" == c;
      if (e != b) {
        var f = this.sourceBlock_;
        f.updateAt_(a, e);
        f.setFieldValue(c, "WHERE" + a);
        return null;
      }
    });
    this.getInput("AT" + a).appendField(c, "WHERE" + a);
    1 == a &&
      (this.moveInputBefore("AT1", "AT2"),
      this.getInput("ORDINAL1") && this.moveInputBefore("ORDINAL1", "AT2"));
    Blockly.Msg.LISTS_GET_SUBLIST_TAIL && this.moveInputBefore("TAIL", null);
  },
};
Blockly.Blocks.lists_split = {
  init: function () {
    var a = this,
      b = new Blockly.FieldDropdown(
        [
          [Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"],
          [Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"],
        ],
        function (b) {
          "SPLIT" == b
            ? (a.outputConnection.setCheck("Array"),
              a.getInput("INPUT").setCheck("String"))
            : (a.outputConnection.setCheck("String"),
              a.getInput("INPUT").setCheck("Array"));
        }
      );
    this.setHelpUrl(Blockly.Msg.LISTS_SPLIT_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendValueInput("INPUT").setCheck("String").appendField(b, "MODE");
    this.appendValueInput("DELIM")
      .setCheck("String")
      .appendField(Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER);
    this.setInputsInline(!0);
    this.setOutput(!0, "Array");
    this.setTooltip(function () {
      var b = a.getFieldValue("MODE");
      if ("SPLIT" == b) return Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT;
      if ("JOIN" == b) return Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN;
      throw "Unknown mode: " + b;
    });
  },
};
Blockly.Blocks.logic = {};
Blockly.Blocks.logic.HUE = 210;
Blockly.Blocks.controls_if = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendValueInput("IF0")
      .setCheck("Boolean")
      .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
    this.appendStatementInput("DO0").appendField(
      Blockly.Msg.CONTROLS_IF_MSG_THEN
    );
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setMutator(
      new Blockly.Mutator(["controls_if_elseif", "controls_if_else"])
    );
    var a = this;
    this.setTooltip(function () {
      if (a.elseifCount_ || a.elseCount_) {
        if (!a.elseifCount_ && a.elseCount_)
          return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
        if (a.elseifCount_ && !a.elseCount_)
          return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
        if (a.elseifCount_ && a.elseCount_)
          return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
      } else return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
      return "";
    });
    this.elseCount_ = this.elseifCount_ = 0;
  },
  mutationToDom: function () {
    if (!this.elseifCount_ && !this.elseCount_) return null;
    var a = document.createElement("mutation");
    this.elseifCount_ && a.setAttribute("elseif", this.elseifCount_);
    this.elseCount_ && a.setAttribute("else", 1);
    return a;
  },
  domToMutation: function (a) {
    this.elseifCount_ = parseInt(a.getAttribute("elseif"), 10) || 0;
    this.elseCount_ = parseInt(a.getAttribute("else"), 10) || 0;
    for (a = 1; a <= this.elseifCount_; a++)
      this.appendValueInput("IF" + a)
        .setCheck("Boolean")
        .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF),
        this.appendStatementInput("DO" + a).appendField(
          Blockly.Msg.CONTROLS_IF_MSG_THEN
        );
    this.elseCount_ &&
      this.appendStatementInput("ELSE").appendField(
        Blockly.Msg.CONTROLS_IF_MSG_ELSE
      );
  },
  decompose: function (a) {
    var b = Blockly.Block.obtain(a, "controls_if_if");
    b.initSvg();
    for (
      var c = b.getInput("STACK").connection, d = 1;
      d <= this.elseifCount_;
      d++
    ) {
      var e = Blockly.Block.obtain(a, "controls_if_elseif");
      e.initSvg();
      c.connect(e.previousConnection);
      c = e.nextConnection;
    }
    this.elseCount_ &&
      ((a = Blockly.Block.obtain(a, "controls_if_else")),
      a.initSvg(),
      c.connect(a.previousConnection));
    return b;
  },
  compose: function (a) {
    this.elseCount_ && this.removeInput("ELSE");
    this.elseCount_ = 0;
    for (var b = this.elseifCount_; 0 < b; b--)
      this.removeInput("IF" + b), this.removeInput("DO" + b);
    this.elseifCount_ = 0;
    for (a = a.getInputTargetBlock("STACK"); a; ) {
      switch (a.type) {
        case "controls_if_elseif":
          this.elseifCount_++;
          var b = this.appendValueInput("IF" + this.elseifCount_)
              .setCheck("Boolean")
              .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF),
            c = this.appendStatementInput("DO" + this.elseifCount_);
          c.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
          a.valueConnection_ && b.connection.connect(a.valueConnection_);
          a.statementConnection_ &&
            c.connection.connect(a.statementConnection_);
          break;
        case "controls_if_else":
          this.elseCount_++;
          b = this.appendStatementInput("ELSE");
          b.appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
          a.statementConnection_ &&
            b.connection.connect(a.statementConnection_);
          break;
        default:
          throw "Unknown block type.";
      }
      a = a.nextConnection && a.nextConnection.targetBlock();
    }
  },
  saveConnections: function (a) {
    a = a.getInputTargetBlock("STACK");
    for (var b = 1; a; ) {
      switch (a.type) {
        case "controls_if_elseif":
          var c = this.getInput("IF" + b),
            d = this.getInput("DO" + b);
          a.valueConnection_ = c && c.connection.targetConnection;
          a.statementConnection_ = d && d.connection.targetConnection;
          b++;
          break;
        case "controls_if_else":
          d = this.getInput("ELSE");
          a.statementConnection_ = d && d.connection.targetConnection;
          break;
        default:
          throw "Unknown block type.";
      }
      a = a.nextConnection && a.nextConnection.targetBlock();
    }
  },
};
Blockly.Blocks.controls_if_if = {
  init: function () {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_IF_TITLE_IF);
    this.appendStatementInput("STACK");
    this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
    this.contextMenu = !1;
  },
};
Blockly.Blocks.controls_if_elseif = {
  init: function () {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput().appendField(
      Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF
    );
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
    this.contextMenu = !1;
  },
};
Blockly.Blocks.controls_if_else = {
  init: function () {
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendDummyInput().appendField(
      Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE
    );
    this.setPreviousStatement(!0);
    this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
    this.contextMenu = !1;
  },
};
Blockly.Blocks.logic_compare = {
  init: function () {
    var a = this.RTL
      ? [
          ["=", "EQ"],
          ["\u2260", "NEQ"],
          [">", "LT"],
          ["\u2265", "LTE"],
          ["<", "GT"],
          ["\u2264", "GTE"],
        ]
      : [
          ["=", "EQ"],
          ["\u2260", "NEQ"],
          ["<", "LT"],
          ["\u2264", "LTE"],
          [">", "GT"],
          ["\u2265", "GTE"],
        ];
    this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.setOutput(!0, "Boolean");
    this.appendValueInput("A");
    this.appendValueInput("B").appendField(new Blockly.FieldDropdown(a), "OP");
    this.setInputsInline(!0);
    var b = this;
    this.setTooltip(function () {
      var a = b.getFieldValue("OP");
      return {
        EQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
        NEQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
        LT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
        LTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
        GT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
        GTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE,
      }[a];
    });
    this.prevBlocks_ = [null, null];
  },
  onchange: function () {
    var a = this.getInputTargetBlock("A"),
      b = this.getInputTargetBlock("B");
    if (a && b && !a.outputConnection.checkType_(b.outputConnection))
      for (var c = 0; c < this.prevBlocks_.length; c++) {
        var d = this.prevBlocks_[c];
        if (d === a || d === b) d.setParent(null), d.bumpNeighbours_();
      }
    this.prevBlocks_[0] = a;
    this.prevBlocks_[1] = b;
  },
};
Blockly.Blocks.logic_operation = {
  init: function () {
    var a = [
      [Blockly.Msg.LOGIC_OPERATION_AND, "AND"],
      [Blockly.Msg.LOGIC_OPERATION_OR, "OR"],
    ];
    this.setHelpUrl(Blockly.Msg.LOGIC_OPERATION_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.setOutput(!0, "Boolean");
    this.appendValueInput("A").setCheck("Boolean");
    this.appendValueInput("B")
      .setCheck("Boolean")
      .appendField(new Blockly.FieldDropdown(a), "OP");
    this.setInputsInline(!0);
    var b = this;
    this.setTooltip(function () {
      var a = b.getFieldValue("OP");
      return {
        AND: Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND,
        OR: Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR,
      }[a];
    });
  },
};
Blockly.Blocks.logic_negate = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.LOGIC_NEGATE_TITLE,
      args0: [{ type: "input_value", name: "BOOL", check: "Boolean" }],
      output: "Boolean",
      colour: Blockly.Blocks.logic.HUE,
      tooltip: Blockly.Msg.LOGIC_NEGATE_TOOLTIP,
      helpUrl: Blockly.Msg.LOGIC_NEGATE_HELPURL,
    });
  },
};
Blockly.Blocks.logic_boolean = {
  init: function () {
    var a = [
      [Blockly.Msg.LOGIC_BOOLEAN_TRUE, "TRUE"],
      [Blockly.Msg.LOGIC_BOOLEAN_FALSE, "FALSE"],
    ];
    this.setHelpUrl(Blockly.Msg.LOGIC_BOOLEAN_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.setOutput(!0, "Boolean");
    this.appendDummyInput().appendField(new Blockly.FieldDropdown(a), "BOOL");
    this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP);
  },
};
Blockly.Blocks.logic_null = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.LOGIC_NULL_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.setOutput(!0);
    this.appendDummyInput().appendField(Blockly.Msg.LOGIC_NULL);
    this.setTooltip(Blockly.Msg.LOGIC_NULL_TOOLTIP);
  },
};
Blockly.Blocks.logic_ternary = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.LOGIC_TERNARY_HELPURL);
    this.setColour(Blockly.Blocks.logic.HUE);
    this.appendValueInput("IF")
      .setCheck("Boolean")
      .appendField(Blockly.Msg.LOGIC_TERNARY_CONDITION);
    this.appendValueInput("THEN").appendField(
      Blockly.Msg.LOGIC_TERNARY_IF_TRUE
    );
    this.appendValueInput("ELSE").appendField(
      Blockly.Msg.LOGIC_TERNARY_IF_FALSE
    );
    this.setOutput(!0);
    this.setTooltip(Blockly.Msg.LOGIC_TERNARY_TOOLTIP);
    this.prevParentConnection_ = null;
  },
  onchange: function () {
    var a = this.getInputTargetBlock("THEN"),
      b = this.getInputTargetBlock("ELSE"),
      c = this.outputConnection.targetConnection;
    if ((a || b) && c)
      for (var d = 0; 2 > d; d++) {
        var e = 1 == d ? a : b;
        e &&
          !e.outputConnection.checkType_(c) &&
          (c === this.prevParentConnection_
            ? (this.setParent(null), c.sourceBlock_.bumpNeighbours_())
            : (e.setParent(null), e.bumpNeighbours_()));
      }
    this.prevParentConnection_ = c;
  },
};
Blockly.Blocks.loops = {};
Blockly.Blocks.loops.HUE = 120;
Blockly.Blocks.controls_repeat = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.CONTROLS_REPEAT_TITLE,
      args0: [{ type: "field_input", name: "TIMES", text: "10" }],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Blocks.loops.HUE,
      tooltip: Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
      helpUrl: Blockly.Msg.CONTROLS_REPEAT_HELPURL,
    });
    this.appendStatementInput("DO").appendField(
      Blockly.Msg.CONTROLS_REPEAT_INPUT_DO
    );
    this.getField("TIMES").setChangeHandler(
      Blockly.FieldTextInput.nonnegativeIntegerValidator
    );
  },
};
Blockly.Blocks.controls_repeat_ext = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.CONTROLS_REPEAT_TITLE,
      args0: [{ type: "input_value", name: "TIMES", check: "Number" }],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Blocks.loops.HUE,
      tooltip: Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
      helpUrl: Blockly.Msg.CONTROLS_REPEAT_HELPURL,
    });
    this.appendStatementInput("DO").appendField(
      Blockly.Msg.CONTROLS_REPEAT_INPUT_DO
    );
  },
};
Blockly.Blocks.controls_whileUntil = {
  init: function () {
    var a = [
      [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, "WHILE"],
      [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, "UNTIL"],
    ];
    this.setHelpUrl(Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL);
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendValueInput("BOOL")
      .setCheck("Boolean")
      .appendField(new Blockly.FieldDropdown(a), "MODE");
    this.appendStatementInput("DO").appendField(
      Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO
    );
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    var b = this;
    this.setTooltip(function () {
      var a = b.getFieldValue("MODE");
      return {
        WHILE: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
        UNTIL: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL,
      }[a];
    });
  },
};
Blockly.Blocks.controls_for = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.CONTROLS_FOR_TITLE,
      args0: [
        { type: "field_variable", name: "VAR", variable: null },
        { type: "input_value", name: "FROM", check: "Number", align: "RIGHT" },
        { type: "input_value", name: "TO", check: "Number", align: "RIGHT" },
        { type: "input_value", name: "BY", check: "Number", align: "RIGHT" },
      ],
      inputsInline: !0,
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Blocks.loops.HUE,
      helpUrl: Blockly.Msg.CONTROLS_FOR_HELPURL,
    });
    this.appendStatementInput("DO").appendField(
      Blockly.Msg.CONTROLS_FOR_INPUT_DO
    );
    var a = this;
    this.setTooltip(function () {
      return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace(
        "%1",
        a.getFieldValue("VAR")
      );
    });
  },
  getVars: function () {
    return [this.getFieldValue("VAR")];
  },
  renameVar: function (a, b) {
    Blockly.Names.equals(a, this.getFieldValue("VAR")) &&
      this.setFieldValue(b, "VAR");
  },
  customContextMenu: function (a) {
    if (!this.isCollapsed()) {
      var b = { enabled: !0 },
        c = this.getFieldValue("VAR");
      b.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", c);
      c = goog.dom.createDom("field", null, c);
      c.setAttribute("name", "VAR");
      c = goog.dom.createDom("block", null, c);
      c.setAttribute("type", "variables_get");
      b.callback = Blockly.ContextMenu.callbackFactory(this, c);
      a.push(b);
    }
  },
};
Blockly.Blocks.controls_forEach = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.CONTROLS_FOREACH_TITLE,
      args0: [
        { type: "field_variable", name: "VAR", variable: null },
        { type: "input_value", name: "LIST", check: "Array" },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Blocks.loops.HUE,
      helpUrl: Blockly.Msg.CONTROLS_FOREACH_HELPURL,
    });
    this.appendStatementInput("DO").appendField(
      Blockly.Msg.CONTROLS_FOREACH_INPUT_DO
    );
    var a = this;
    this.setTooltip(function () {
      return Blockly.Msg.CONTROLS_FOREACH_TOOLTIP.replace(
        "%1",
        a.getFieldValue("VAR")
      );
    });
  },
  getVars: function () {
    return [this.getFieldValue("VAR")];
  },
  renameVar: function (a, b) {
    Blockly.Names.equals(a, this.getFieldValue("VAR")) &&
      this.setFieldValue(b, "VAR");
  },
  customContextMenu: Blockly.Blocks.controls_for.customContextMenu,
};
Blockly.Blocks.controls_flow_statements = {
  init: function () {
    var a = [
      [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK, "BREAK"],
      [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE, "CONTINUE"],
    ];
    this.setHelpUrl(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL);
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendDummyInput().appendField(new Blockly.FieldDropdown(a), "FLOW");
    this.setPreviousStatement(!0);
    var b = this;
    this.setTooltip(function () {
      var a = b.getFieldValue("FLOW");
      return {
        BREAK: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK,
        CONTINUE: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE,
      }[a];
    });
  },
  onchange: function () {
    var a = !1,
      b = this;
    do {
      if (
        "controls_repeat" == b.type ||
        "controls_repeat_ext" == b.type ||
        "controls_forEach" == b.type ||
        "controls_for" == b.type ||
        "controls_whileUntil" == b.type
      ) {
        a = !0;
        break;
      }
      b = b.getSurroundParent();
    } while (b);
    a
      ? this.setWarningText(null)
      : this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING);
  },
};

// Example on number input
Blockly.Blocks.math = {};
Blockly.Blocks.math.HUE = 230;
Blockly.Blocks.math_number = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput("0", Blockly.FieldTextInput.numberValidator),
      "NUM"
    );
    this.setOutput(!0, "Number");
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  },
};
Blockly.Blocks.math_arithmetic = {
  init: function () {
    var a = [
      [Blockly.Msg.MATH_ADDITION_SYMBOL, "ADD"],
      [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, "MINUS"],
      [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, "MULTIPLY"],
      [Blockly.Msg.MATH_DIVISION_SYMBOL, "DIVIDE"],
      [Blockly.Msg.MATH_POWER_SYMBOL, "POWER"],
    ];
    this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setOutput(!0, "Number");
    this.appendValueInput("A").setCheck("Number");
    this.appendValueInput("B")
      .setCheck("Number")
      .appendField(new Blockly.FieldDropdown(a), "OP");
    this.setInputsInline(!0);
    var b = this;
    this.setTooltip(function () {
      var a = b.getFieldValue("OP");
      return {
        ADD: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
        MINUS: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
        MULTIPLY: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
        DIVIDE: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
        POWER: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER,
      }[a];
    });
  },
};
Blockly.Blocks.math_single = {
  init: function () {
    var a = [
      [Blockly.Msg.MATH_SINGLE_OP_ROOT, "ROOT"],
      [Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE, "ABS"],
      ["-", "NEG"],
      ["ln", "LN"],
      ["log10", "LOG10"],
      ["e^", "EXP"],
      ["10^", "POW10"],
    ];
    this.setHelpUrl(Blockly.Msg.MATH_SINGLE_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setOutput(!0, "Number");
    this.appendValueInput("NUM")
      .setCheck("Number")
      .appendField(new Blockly.FieldDropdown(a), "OP");
    var b = this;
    this.setTooltip(function () {
      var a = b.getFieldValue("OP");
      return {
        ROOT: Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT,
        ABS: Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS,
        NEG: Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG,
        LN: Blockly.Msg.MATH_SINGLE_TOOLTIP_LN,
        LOG10: Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10,
        EXP: Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP,
        POW10: Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10,
      }[a];
    });
  },
};
Blockly.Blocks.math_trig = {
  init: function () {
    var a = [
      [Blockly.Msg.MATH_TRIG_SIN, "SIN"],
      [Blockly.Msg.MATH_TRIG_COS, "COS"],
      [Blockly.Msg.MATH_TRIG_TAN, "TAN"],
      [Blockly.Msg.MATH_TRIG_ASIN, "ASIN"],
      [Blockly.Msg.MATH_TRIG_ACOS, "ACOS"],
      [Blockly.Msg.MATH_TRIG_ATAN, "ATAN"],
    ];
    this.setHelpUrl(Blockly.Msg.MATH_TRIG_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setOutput(!0, "Number");
    this.appendValueInput("NUM")
      .setCheck("Number")
      .appendField(new Blockly.FieldDropdown(a), "OP");
    var b = this;
    this.setTooltip(function () {
      var a = b.getFieldValue("OP");
      return {
        SIN: Blockly.Msg.MATH_TRIG_TOOLTIP_SIN,
        COS: Blockly.Msg.MATH_TRIG_TOOLTIP_COS,
        TAN: Blockly.Msg.MATH_TRIG_TOOLTIP_TAN,
        ASIN: Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN,
        ACOS: Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS,
        ATAN: Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN,
      }[a];
    });
  },
};
Blockly.Blocks.math_constant = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.MATH_CONSTANT_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setOutput(!0, "Number");
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ["\u03c0", "PI"],
        ["e", "E"],
        ["\u03c6", "GOLDEN_RATIO"],
        ["sqrt(2)", "SQRT2"],
        ["sqrt(\u00bd)", "SQRT1_2"],
        ["\u221e", "INFINITY"],
      ]),
      "CONSTANT"
    );
    this.setTooltip(Blockly.Msg.MATH_CONSTANT_TOOLTIP);
  },
};
Blockly.Blocks.math_number_property = {
  init: function () {
    var a = [
      [Blockly.Msg.MATH_IS_EVEN, "EVEN"],
      [Blockly.Msg.MATH_IS_ODD, "ODD"],
      [Blockly.Msg.MATH_IS_PRIME, "PRIME"],
      [Blockly.Msg.MATH_IS_WHOLE, "WHOLE"],
      [Blockly.Msg.MATH_IS_POSITIVE, "POSITIVE"],
      [Blockly.Msg.MATH_IS_NEGATIVE, "NEGATIVE"],
      [Blockly.Msg.MATH_IS_DIVISIBLE_BY, "DIVISIBLE_BY"],
    ];
    this.setColour(Blockly.Blocks.math.HUE);
    this.appendValueInput("NUMBER_TO_CHECK").setCheck("Number");
    a = new Blockly.FieldDropdown(a, function (a) {
      this.sourceBlock_.updateShape_("DIVISIBLE_BY" == a);
    });
    this.appendDummyInput().appendField(a, "PROPERTY");
    this.setInputsInline(!0);
    this.setOutput(!0, "Boolean");
    this.setTooltip(Blockly.Msg.MATH_IS_TOOLTIP);
  },
  mutationToDom: function () {
    var a = document.createElement("mutation"),
      b = "DIVISIBLE_BY" == this.getFieldValue("PROPERTY");
    a.setAttribute("divisor_input", b);
    return a;
  },
  domToMutation: function (a) {
    a = "true" == a.getAttribute("divisor_input");
    this.updateShape_(a);
  },
  updateShape_: function (a) {
    var b = this.getInput("DIVISOR");
    a
      ? b || this.appendValueInput("DIVISOR").setCheck("Number")
      : b && this.removeInput("DIVISOR");
  },
};
Blockly.Blocks.math_change = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.MATH_CHANGE_TITLE,
      args0: [
        {
          type: "field_variable",
          name: "VAR",
          variable: Blockly.Msg.MATH_CHANGE_TITLE_ITEM,
        },
        { type: "input_value", name: "DELTA", check: "Number" },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Blocks.math.HUE,
      helpUrl: Blockly.Msg.MATH_CHANGE_HELPURL,
    });
    var a = this;
    this.setTooltip(function () {
      return Blockly.Msg.MATH_CHANGE_TOOLTIP.replace(
        "%1",
        a.getFieldValue("VAR")
      );
    });
  },
  getVars: function () {
    return [this.getFieldValue("VAR")];
  },
  renameVar: function (a, b) {
    Blockly.Names.equals(a, this.getFieldValue("VAR")) &&
      this.setFieldValue(b, "VAR");
  },
};
Blockly.Blocks.math_round = {
  init: function () {
    var a = [
      [Blockly.Msg.MATH_ROUND_OPERATOR_ROUND, "ROUND"],
      [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP, "ROUNDUP"],
      [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN, "ROUNDDOWN"],
    ];
    this.setHelpUrl(Blockly.Msg.MATH_ROUND_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setOutput(!0, "Number");
    this.appendValueInput("NUM")
      .setCheck("Number")
      .appendField(new Blockly.FieldDropdown(a), "OP");
    this.setTooltip(Blockly.Msg.MATH_ROUND_TOOLTIP);
  },
};
Blockly.Blocks.math_on_list = {
  init: function () {
    var a = [
        [Blockly.Msg.MATH_ONLIST_OPERATOR_SUM, "SUM"],
        [Blockly.Msg.MATH_ONLIST_OPERATOR_MIN, "MIN"],
        [Blockly.Msg.MATH_ONLIST_OPERATOR_MAX, "MAX"],
        [Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE, "AVERAGE"],
        [Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN, "MEDIAN"],
        [Blockly.Msg.MATH_ONLIST_OPERATOR_MODE, "MODE"],
        [Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV, "STD_DEV"],
        [Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM, "RANDOM"],
      ],
      b = this;
    this.setHelpUrl(Blockly.Msg.MATH_ONLIST_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setOutput(!0, "Number");
    a = new Blockly.FieldDropdown(a, function (a) {
      "MODE" == a
        ? b.outputConnection.setCheck("Array")
        : b.outputConnection.setCheck("Number");
    });
    this.appendValueInput("LIST").setCheck("Array").appendField(a, "OP");
    this.setTooltip(function () {
      var a = b.getFieldValue("OP");
      return {
        SUM: Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM,
        MIN: Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN,
        MAX: Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX,
        AVERAGE: Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE,
        MEDIAN: Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN,
        MODE: Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE,
        STD_DEV: Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV,
        RANDOM: Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM,
      }[a];
    });
  },
};
Blockly.Blocks.math_modulo = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.MATH_MODULO_TITLE,
      args0: [
        { type: "input_value", name: "DIVIDEND", check: "Number" },
        { type: "input_value", name: "DIVISOR", check: "Number" },
      ],
      inputsInline: !0,
      output: "Number",
      colour: Blockly.Blocks.math.HUE,
      tooltip: Blockly.Msg.MATH_MODULO_TOOLTIP,
      helpUrl: Blockly.Msg.MATH_MODULO_HELPURL,
    });
  },
};
Blockly.Blocks.math_constrain = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.MATH_CONSTRAIN_TITLE,
      args0: [
        { type: "input_value", name: "VALUE", check: "Number" },
        { type: "input_value", name: "LOW", check: "Number" },
        { type: "input_value", name: "HIGH", check: "Number" },
      ],
      inputsInline: !0,
      output: "Number",
      colour: Blockly.Blocks.math.HUE,
      tooltip: Blockly.Msg.MATH_CONSTRAIN_TOOLTIP,
      helpUrl: Blockly.Msg.MATH_CONSTRAIN_HELPURL,
    });
  },
};
Blockly.Blocks.math_random_int = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.MATH_RANDOM_INT_TITLE,
      args0: [
        { type: "input_value", name: "FROM", check: "Number" },
        { type: "input_value", name: "TO", check: "Number" },
      ],
      inputsInline: !0,
      output: "Number",
      colour: Blockly.Blocks.math.HUE,
      tooltip: Blockly.Msg.MATH_RANDOM_INT_TOOLTIP,
      helpUrl: Blockly.Msg.MATH_RANDOM_INT_HELPURL,
    });
  },
};
Blockly.Blocks.math_random_float = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setOutput(!0, "Number");
    this.appendDummyInput().appendField(
      Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM
    );
    this.setTooltip(Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP);
  },
};
Blockly.Blocks.procedures = {};
Blockly.Blocks.procedures.HUE = 290;
Blockly.Blocks.procedures_defnoreturn = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
    this.setColour(Blockly.Blocks.procedures.HUE);
    var a = Blockly.Procedures.findLegalName(
        Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,
        this
      ),
      a = new Blockly.FieldTextInput(a, Blockly.Procedures.rename);
    a.setSpellcheck(!1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE)
      .appendField(a, "NAME")
      .appendField("", "PARAMS");
    this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
    this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.arguments_ = [];
    this.setStatements_(!0);
    this.statementConnection_ = null;
  },
  setStatements_: function (a) {
    this.hasStatements_ !== a &&
      (a
        ? (this.appendStatementInput("STACK").appendField(
            Blockly.Msg.PROCEDURES_DEFNORETURN_DO
          ),
          this.getInput("RETURN") && this.moveInputBefore("STACK", "RETURN"))
        : this.removeInput("STACK", !0),
      (this.hasStatements_ = a));
  },
  updateParams_: function () {
    for (var a = !1, b = {}, c = 0; c < this.arguments_.length; c++) {
      if (b["arg_" + this.arguments_[c].toLowerCase()]) {
        a = !0;
        break;
      }
      b["arg_" + this.arguments_[c].toLowerCase()] = !0;
    }
    a
      ? this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING)
      : this.setWarningText(null);
    a = "";
    this.arguments_.length &&
      (a =
        Blockly.Msg.PROCEDURES_BEFORE_PARAMS +
        " " +
        this.arguments_.join(", "));
    this.setFieldValue(a, "PARAMS");
  },
  mutationToDom: function () {
    for (
      var a = document.createElement("mutation"), b = 0;
      b < this.arguments_.length;
      b++
    ) {
      var c = document.createElement("arg");
      c.setAttribute("name", this.arguments_[b]);
      a.appendChild(c);
    }
    this.hasStatements_ || a.setAttribute("statements", "false");
    return a;
  },
  domToMutation: function (a) {
    this.arguments_ = [];
    for (var b = 0, c; (c = a.childNodes[b]); b++)
      "arg" == c.nodeName.toLowerCase() &&
        this.arguments_.push(c.getAttribute("name"));
    this.updateParams_();
    this.setStatements_("false" !== a.getAttribute("statements"));
  },
  decompose: function (a) {
    var b = Blockly.Block.obtain(a, "procedures_mutatorcontainer");
    b.initSvg();
    this.getInput("RETURN")
      ? b.setFieldValue(this.hasStatements_ ? "TRUE" : "FALSE", "STATEMENTS")
      : b.getInput("STATEMENT_INPUT").setVisible(!1);
    for (
      var c = b.getInput("STACK").connection, d = 0;
      d < this.arguments_.length;
      d++
    ) {
      var e = Blockly.Block.obtain(a, "procedures_mutatorarg");
      e.initSvg();
      e.setFieldValue(this.arguments_[d], "NAME");
      e.oldLocation = d;
      c.connect(e.previousConnection);
      c = e.nextConnection;
    }
    Blockly.Procedures.mutateCallers(
      this.getFieldValue("NAME"),
      this.workspace,
      this.arguments_,
      null
    );
    return b;
  },
  compose: function (a) {
    this.arguments_ = [];
    this.paramIds_ = [];
    for (var b = a.getInputTargetBlock("STACK"); b; )
      this.arguments_.push(b.getFieldValue("NAME")),
        this.paramIds_.push(b.id),
        (b = b.nextConnection && b.nextConnection.targetBlock());
    this.updateParams_();
    Blockly.Procedures.mutateCallers(
      this.getFieldValue("NAME"),
      this.workspace,
      this.arguments_,
      this.paramIds_
    );
    a = a.getFieldValue("STATEMENTS");
    if (null !== a && ((a = "TRUE" == a), this.hasStatements_ != a))
      if (a)
        this.setStatements_(!0),
          (a = this.getInput("STACK").connection),
          a.targetConnection ||
          !this.statementConnection_ ||
          this.statementConnection_.targetConnection ||
          this.statementConnection_.sourceBlock_.workspace != this.workspace
            ? (this.statementConnection_ = null)
            : a.connect(this.statementConnection_);
      else {
        a = this.getInput("STACK").connection;
        if ((this.statementConnection_ = a.targetConnection))
          (a = a.targetBlock()), a.setParent(null), a.bumpNeighbours_();
        this.setStatements_(!1);
      }
  },
  dispose: function () {
    var a = this.getFieldValue("NAME");
    Blockly.Procedures.disposeCallers(a, this.workspace);
    this.constructor.prototype.dispose.apply(this, arguments);
  },
  getProcedureDef: function () {
    return [this.getFieldValue("NAME"), this.arguments_, !1];
  },
  getVars: function () {
    return this.arguments_;
  },
  renameVar: function (a, b) {
    for (var c = !1, d = 0; d < this.arguments_.length; d++)
      Blockly.Names.equals(a, this.arguments_[d]) &&
        ((this.arguments_[d] = b), (c = !0));
    if (c && (this.updateParams_(), this.mutator.isVisible()))
      for (
        var c = this.mutator.workspace_.getAllBlocks(), d = 0, e;
        (e = c[d]);
        d++
      )
        "procedures_mutatorarg" == e.type &&
          Blockly.Names.equals(a, e.getFieldValue("NAME")) &&
          e.setFieldValue(b, "NAME");
  },
  customContextMenu: function (a) {
    var b = { enabled: !0 },
      c = this.getFieldValue("NAME");
    b.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1", c);
    var d = goog.dom.createDom("mutation");
    d.setAttribute("name", c);
    for (var e = 0; e < this.arguments_.length; e++)
      (c = goog.dom.createDom("arg")),
        c.setAttribute("name", this.arguments_[e]),
        d.appendChild(c);
    d = goog.dom.createDom("block", null, d);
    d.setAttribute("type", this.callType_);
    b.callback = Blockly.ContextMenu.callbackFactory(this, d);
    a.push(b);
    if (!this.isCollapsed())
      for (e = 0; e < this.arguments_.length; e++)
        (b = { enabled: !0 }),
          (c = this.arguments_[e]),
          (b.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", c)),
          (d = goog.dom.createDom("field", null, c)),
          d.setAttribute("name", "VAR"),
          (d = goog.dom.createDom("block", null, d)),
          d.setAttribute("type", "variables_get"),
          (b.callback = Blockly.ContextMenu.callbackFactory(this, d)),
          a.push(b);
  },
  callType_: "procedures_callnoreturn",
};
Blockly.Blocks.procedures_defreturn = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
    this.setColour(Blockly.Blocks.procedures.HUE);
    var a = Blockly.Procedures.findLegalName(
        Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE,
        this
      ),
      a = new Blockly.FieldTextInput(a, Blockly.Procedures.rename);
    a.setSpellcheck(!1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
      .appendField(a, "NAME")
      .appendField("", "PARAMS");
    this.appendValueInput("RETURN")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN)
      .setCheck(["Number", "Boolean"]);
    this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
    this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
    this.arguments_ = [];
    this.setStatements_(!0);
    this.statementConnection_ = null;
  },
  setStatements_: Blockly.Blocks.procedures_defnoreturn.setStatements_,
  updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_,
  mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom,
  domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation,
  decompose: Blockly.Blocks.procedures_defnoreturn.decompose,
  compose: Blockly.Blocks.procedures_defnoreturn.compose,
  dispose: Blockly.Blocks.procedures_defnoreturn.dispose,
  getProcedureDef: function () {
    return [this.getFieldValue("NAME"), this.arguments_, !0];
  },
  getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
  renameVar: Blockly.Blocks.procedures_defnoreturn.renameVar,
  customContextMenu: Blockly.Blocks.procedures_defnoreturn.customContextMenu,
  callType_: "procedures_callreturn",
};
Blockly.Blocks.procedures_mutatorcontainer = {
  init: function () {
    this.setColour(Blockly.Blocks.procedures.HUE);
    this.appendDummyInput().appendField(
      Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE
    );
    this.appendStatementInput("STACK");
    this.appendDummyInput("STATEMENT_INPUT")
      .appendField(Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS)
      .appendField(new Blockly.FieldCheckbox("TRUE"), "STATEMENTS");
    this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
};
Blockly.Blocks.procedures_mutatorarg = {
  init: function () {
    this.setColour(Blockly.Blocks.procedures.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE)
      .appendField(new Blockly.FieldTextInput("x", this.validator_), "NAME");
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
    this.contextMenu = !1;
  },
  validator_: function (a) {
    return (a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")) || null;
  },
};
Blockly.Blocks.procedures_callnoreturn = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL);
    this.setColour(Blockly.Blocks.procedures.HUE);
    this.appendDummyInput("TOPROW")
      .appendField(Blockly.Msg.PROCEDURES_CALLNORETURN_CALL)
      .appendField("", "NAME");
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.arguments_ = [];
    this.quarkConnections_ = {};
    this.quarkArguments_ = null;
  },
  getProcedureCall: function () {
    return this.getFieldValue("NAME");
  },
  renameProcedure: function (a, b) {
    Blockly.Names.equals(a, this.getProcedureCall()) &&
      (this.setFieldValue(b, "NAME"),
      this.setTooltip(
        (this.outputConnection
          ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP
          : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP
        ).replace("%1", b)
      ));
  },
  setProcedureParameters: function (a, b) {
    if (b)
      if (goog.array.equals(this.arguments_, a)) this.quarkArguments_ = b;
      else {
        this.setCollapsed(!1);
        if (b.length != a.length)
          throw "Error: paramNames and paramIds must be the same length.";
        this.quarkArguments_ ||
          ((this.quarkConnections_ = {}),
          a.join("\n") == this.arguments_.join("\n")
            ? (this.quarkArguments_ = b)
            : (this.quarkArguments_ = []));
        var c = this.rendered;
        this.rendered = !1;
        for (var d = this.arguments_.length - 1; 0 <= d; d--) {
          var e = this.getInput("ARG" + d);
          if (e) {
            var f = e.connection.targetConnection;
            this.quarkConnections_[this.quarkArguments_[d]] = f;
            this.removeInput("ARG" + d);
          }
        }
        this.arguments_ = [].concat(a);
        this.renderArgs_();
        if ((this.quarkArguments_ = b))
          for (d = 0; d < this.arguments_.length; d++) {
            var e = this.getInput("ARG" + d),
              g = this.quarkArguments_[d];
            g in this.quarkConnections_ &&
              ((f = this.quarkConnections_[g]),
              !f ||
              f.targetConnection ||
              f.sourceBlock_.workspace != this.workspace
                ? delete this.quarkConnections_[g]
                : e.connection.connect(f));
          }
        (this.rendered = c) && this.render();
      }
    else (this.quarkConnections_ = {}), (this.quarkArguments_ = null);
  },
  renderArgs_: function () {
    for (var a = 0; a < this.arguments_.length; a++) {
      var b = this.appendValueInput("ARG" + a)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(this.arguments_[a]);
      b.init();
    }
    if ((b = this.getInput("TOPROW")))
      this.arguments_.length
        ? this.getField("WITH") ||
          (b.appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"),
          b.init())
        : this.getField("WITH") && b.removeField("WITH");
  },
  mutationToDom: function () {
    var a = document.createElement("mutation");
    a.setAttribute("name", this.getProcedureCall());
    for (var b = 0; b < this.arguments_.length; b++) {
      var c = document.createElement("arg");
      c.setAttribute("name", this.arguments_[b]);
      a.appendChild(c);
    }
    return a;
  },
  domToMutation: function (a) {
    var b = a.getAttribute("name");
    this.setFieldValue(b, "NAME");
    this.setTooltip(
      (this.outputConnection
        ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP
        : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP
      ).replace("%1", b)
    );
    if (
      (b = Blockly.Procedures.getDefinition(b, this.workspace)) &&
      b.mutator &&
      b.mutator.isVisible()
    )
      this.setProcedureParameters(b.arguments_, b.paramIds_);
    else {
      for (var b = [], c = 0, d; (d = a.childNodes[c]); c++)
        "arg" == d.nodeName.toLowerCase() && b.push(d.getAttribute("name"));
      this.setProcedureParameters(b, b);
    }
  },
  renameVar: function (a, b) {
    for (var c = 0; c < this.arguments_.length; c++)
      Blockly.Names.equals(a, this.arguments_[c]) &&
        ((this.arguments_[c] = b),
        this.getInput("ARG" + c).fieldRow[0].setText(b));
  },
  customContextMenu: function (a) {
    var b = { enabled: !0 };
    b.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
    var c = this.getProcedureCall(),
      d = this.workspace;
    b.callback = function () {
      var a = Blockly.Procedures.getDefinition(c, d);
      a && a.select();
    };
    a.push(b);
  },
};
Blockly.Blocks.procedures_callreturn = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL);
    this.setColour(Blockly.Blocks.procedures.HUE);
    this.appendDummyInput("TOPROW")
      .appendField(Blockly.Msg.PROCEDURES_CALLRETURN_CALL)
      .appendField("", "NAME");
    this.setOutput(!0);
    this.arguments_ = [];
    this.quarkConnections_ = {};
    this.quarkArguments_ = null;
  },
  getProcedureCall: Blockly.Blocks.procedures_callnoreturn.getProcedureCall,
  renameProcedure: Blockly.Blocks.procedures_callnoreturn.renameProcedure,
  setProcedureParameters:
    Blockly.Blocks.procedures_callnoreturn.setProcedureParameters,
  renderArgs_: Blockly.Blocks.procedures_callnoreturn.renderArgs_,
  mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom,
  domToMutation: Blockly.Blocks.procedures_callnoreturn.domToMutation,
  renameVar: Blockly.Blocks.procedures_callnoreturn.renameVar,
  customContextMenu: Blockly.Blocks.procedures_callnoreturn.customContextMenu,
};
Blockly.Blocks.procedures_ifreturn = {
  init: function () {
    this.setHelpUrl("http://c2.com/cgi/wiki?GuardClause");
    this.setColour(Blockly.Blocks.procedures.HUE);
    this.appendValueInput("CONDITION")
      .setCheck("Boolean")
      .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
    this.appendValueInput("VALUE").appendField(
      Blockly.Msg.PROCEDURES_DEFRETURN_RETURN
    );
    this.setInputsInline(!0);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP);
    this.hasReturnValue_ = !0;
  },
  mutationToDom: function () {
    var a = document.createElement("mutation");
    a.setAttribute("value", Number(this.hasReturnValue_));
    return a;
  },
  domToMutation: function (a) {
    this.hasReturnValue_ = 1 == a.getAttribute("value");
    this.hasReturnValue_ ||
      (this.removeInput("VALUE"),
      this.appendDummyInput("VALUE").appendField(
        Blockly.Msg.PROCEDURES_DEFRETURN_RETURN
      ));
  },
  onchange: function () {
    var a = !1,
      b = this;
    do {
      if (
        "procedures_defnoreturn" == b.type ||
        "procedures_defreturn" == b.type
      ) {
        a = !0;
        break;
      }
      b = b.getSurroundParent();
    } while (b);
    a
      ? ("procedures_defnoreturn" == b.type && this.hasReturnValue_
          ? (this.removeInput("VALUE"),
            this.appendDummyInput("VALUE").appendField(
              Blockly.Msg.PROCEDURES_DEFRETURN_RETURN
            ),
            (this.hasReturnValue_ = !1))
          : "procedures_defreturn" != b.type ||
            this.hasReturnValue_ ||
            (this.removeInput("VALUE"),
            this.appendValueInput("VALUE").appendField(
              Blockly.Msg.PROCEDURES_DEFRETURN_RETURN
            ),
            (this.hasReturnValue_ = !0)),
        this.setWarningText(null))
      : this.setWarningText(Blockly.Msg.PROCEDURES_IFRETURN_WARNING);
  },
};

// Text input example
Blockly.Blocks.texts = {};
Blockly.Blocks.texts.HUE = 160;
Blockly.Blocks.text = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendDummyInput()
      .appendField(this.newQuote_(!0))
      .appendField(new Blockly.FieldTextInput(""), "TEXT")
      .appendField(this.newQuote_(!1));
    this.setOutput(!0, "String");
    this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP);
  },
  newQuote_: function (a) {
    return new Blockly.FieldImage(
      a == this.RTL
        ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg=="
        : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
      12,
      12,
      '"'
    );
  },
};
Blockly.Blocks.text_join = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.TEXT_JOIN_HELPURL);
    this.setColour(Blockly.Blocks.texts.HUE);
    this.itemCount_ = 2;
    this.updateShape_();
    this.setOutput(!0, "String");
    this.setMutator(new Blockly.Mutator(["text_create_join_item"]));
    this.setTooltip(Blockly.Msg.TEXT_JOIN_TOOLTIP);
  },
  mutationToDom: function () {
    var a = document.createElement("mutation");
    a.setAttribute("items", this.itemCount_);
    return a;
  },
  domToMutation: function (a) {
    this.itemCount_ = parseInt(a.getAttribute("items"), 10);
    this.updateShape_();
  },
  decompose: function (a) {
    var b = Blockly.Block.obtain(a, "text_create_join_container");
    b.initSvg();
    for (
      var c = b.getInput("STACK").connection, d = 0;
      d < this.itemCount_;
      d++
    ) {
      var e = Blockly.Block.obtain(a, "text_create_join_item");
      e.initSvg();
      c.connect(e.previousConnection);
      c = e.nextConnection;
    }
    return b;
  },
  compose: function (a) {
    a = a.getInputTargetBlock("STACK");
    for (var b = [], c = 0; a; )
      (b[c] = a.valueConnection_),
        (a = a.nextConnection && a.nextConnection.targetBlock()),
        c++;
    this.itemCount_ = c;
    this.updateShape_();
    for (c = 0; c < this.itemCount_; c++)
      b[c] && this.getInput("ADD" + c).connection.connect(b[c]);
  },
  saveConnections: function (a) {
    a = a.getInputTargetBlock("STACK");
    for (var b = 0; a; ) {
      var c = this.getInput("ADD" + b);
      a.valueConnection_ = c && c.connection.targetConnection;
      b++;
      a = a.nextConnection && a.nextConnection.targetBlock();
    }
  },
  updateShape_: function () {
    if (this.getInput("EMPTY")) this.removeInput("EMPTY");
    else
      for (var a = 0; this.getInput("ADD" + a); )
        this.removeInput("ADD" + a), a++;
    if (0 == this.itemCount_)
      this.appendDummyInput("EMPTY")
        .appendField(this.newQuote_(!0))
        .appendField(this.newQuote_(!1));
    else
      for (a = 0; a < this.itemCount_; a++) {
        var b = this.appendValueInput("ADD" + a);
        0 == a && b.appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH);
      }
  },
  newQuote_: Blockly.Blocks.text.newQuote_,
};
Blockly.Blocks.text_create_join_container = {
  init: function () {
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendDummyInput().appendField(
      Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN
    );
    this.appendStatementInput("STACK");
    this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP);
    this.contextMenu = !1;
  },
};
Blockly.Blocks.text_create_join_item = {
  init: function () {
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendDummyInput().appendField(
      Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM
    );
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP);
    this.contextMenu = !1;
  },
};
Blockly.Blocks.text_append = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.TEXT_APPEND_HELPURL);
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendValueInput("TEXT")
      .appendField(Blockly.Msg.TEXT_APPEND_TO)
      .appendField(
        new Blockly.FieldVariable(Blockly.Msg.TEXT_APPEND_VARIABLE),
        "VAR"
      )
      .appendField(Blockly.Msg.TEXT_APPEND_APPENDTEXT);
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    var a = this;
    this.setTooltip(function () {
      return Blockly.Msg.TEXT_APPEND_TOOLTIP.replace(
        "%1",
        a.getFieldValue("VAR")
      );
    });
  },
  getVars: function () {
    return [this.getFieldValue("VAR")];
  },
  renameVar: function (a, b) {
    Blockly.Names.equals(a, this.getFieldValue("VAR")) &&
      this.setFieldValue(b, "VAR");
  },
};
Blockly.Blocks.text_length = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.TEXT_LENGTH_TITLE,
      args0: [
        { type: "input_value", name: "VALUE", check: ["String", "Array"] },
      ],
      output: "Number",
      colour: Blockly.Blocks.texts.HUE,
      tooltip: Blockly.Msg.TEXT_LENGTH_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_LENGTH_HELPURL,
    });
  },
};
Blockly.Blocks.text_isEmpty = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.TEXT_ISEMPTY_TITLE,
      args0: [
        { type: "input_value", name: "VALUE", check: ["String", "Array"] },
      ],
      output: "Boolean",
      colour: Blockly.Blocks.texts.HUE,
      tooltip: Blockly.Msg.TEXT_ISEMPTY_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_ISEMPTY_HELPURL,
    });
  },
};
Blockly.Blocks.text_indexOf = {
  init: function () {
    var a = [
      [Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST, "FIRST"],
      [Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST, "LAST"],
    ];
    this.setHelpUrl(Blockly.Msg.TEXT_INDEXOF_HELPURL);
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setOutput(!0, "Number");
    this.appendValueInput("VALUE")
      .setCheck("String")
      .appendField(Blockly.Msg.TEXT_INDEXOF_INPUT_INTEXT);
    this.appendValueInput("FIND")
      .setCheck("String")
      .appendField(new Blockly.FieldDropdown(a), "END");
    Blockly.Msg.TEXT_INDEXOF_TAIL &&
      this.appendDummyInput().appendField(Blockly.Msg.TEXT_INDEXOF_TAIL);
    this.setInputsInline(!0);
    this.setTooltip(Blockly.Msg.TEXT_INDEXOF_TOOLTIP);
  },
};
Blockly.Blocks.text_charAt = {
  init: function () {
    this.WHERE_OPTIONS = [
      [Blockly.Msg.TEXT_CHARAT_FROM_START, "FROM_START"],
      [Blockly.Msg.TEXT_CHARAT_FROM_END, "FROM_END"],
      [Blockly.Msg.TEXT_CHARAT_FIRST, "FIRST"],
      [Blockly.Msg.TEXT_CHARAT_LAST, "LAST"],
      [Blockly.Msg.TEXT_CHARAT_RANDOM, "RANDOM"],
    ];
    this.setHelpUrl(Blockly.Msg.TEXT_CHARAT_HELPURL);
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setOutput(!0, "String");
    this.appendValueInput("VALUE")
      .setCheck("String")
      .appendField(Blockly.Msg.TEXT_CHARAT_INPUT_INTEXT);
    this.appendDummyInput("AT");
    this.setInputsInline(!0);
    this.updateAt_(!0);
    this.setTooltip(Blockly.Msg.TEXT_CHARAT_TOOLTIP);
  },
  mutationToDom: function () {
    var a = document.createElement("mutation"),
      b = this.getInput("AT").type == Blockly.INPUT_VALUE;
    a.setAttribute("at", b);
    return a;
  },
  domToMutation: function (a) {
    a = "false" != a.getAttribute("at");
    this.updateAt_(a);
  },
  updateAt_: function (a) {
    this.removeInput("AT");
    this.removeInput("ORDINAL", !0);
    a
      ? (this.appendValueInput("AT").setCheck("Number"),
        Blockly.Msg.ORDINAL_NUMBER_SUFFIX &&
          this.appendDummyInput("ORDINAL").appendField(
            Blockly.Msg.ORDINAL_NUMBER_SUFFIX
          ))
      : this.appendDummyInput("AT");
    Blockly.Msg.TEXT_CHARAT_TAIL &&
      (this.removeInput("TAIL", !0),
      this.appendDummyInput("TAIL").appendField(Blockly.Msg.TEXT_CHARAT_TAIL));
    var b = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function (b) {
      var d = "FROM_START" == b || "FROM_END" == b;
      if (d != a) {
        var e = this.sourceBlock_;
        e.updateAt_(d);
        e.setFieldValue(b, "WHERE");
        return null;
      }
    });
    this.getInput("AT").appendField(b, "WHERE");
  },
};
Blockly.Blocks.text_getSubstring = {
  init: function () {
    this.WHERE_OPTIONS_1 = [
      [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START, "FROM_START"],
      [Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END, "FROM_END"],
      [Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST, "FIRST"],
    ];
    this.WHERE_OPTIONS_2 = [
      [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START, "FROM_START"],
      [Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END, "FROM_END"],
      [Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST, "LAST"],
    ];
    this.setHelpUrl(Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL);
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendValueInput("STRING")
      .setCheck("String")
      .appendField(Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);
    this.appendDummyInput("AT1");
    this.appendDummyInput("AT2");
    Blockly.Msg.TEXT_GET_SUBSTRING_TAIL &&
      this.appendDummyInput("TAIL").appendField(
        Blockly.Msg.TEXT_GET_SUBSTRING_TAIL
      );
    this.setInputsInline(!0);
    this.setOutput(!0, "String");
    this.updateAt_(1, !0);
    this.updateAt_(2, !0);
    this.setTooltip(Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP);
  },
  mutationToDom: function () {
    var a = document.createElement("mutation"),
      b = this.getInput("AT1").type == Blockly.INPUT_VALUE;
    a.setAttribute("at1", b);
    b = this.getInput("AT2").type == Blockly.INPUT_VALUE;
    a.setAttribute("at2", b);
    return a;
  },
  domToMutation: function (a) {
    var b = "true" == a.getAttribute("at1");
    a = "true" == a.getAttribute("at2");
    this.updateAt_(1, b);
    this.updateAt_(2, a);
  },
  updateAt_: function (a, b) {
    this.removeInput("AT" + a);
    this.removeInput("ORDINAL" + a, !0);
    b
      ? (this.appendValueInput("AT" + a).setCheck("Number"),
        Blockly.Msg.ORDINAL_NUMBER_SUFFIX &&
          this.appendDummyInput("ORDINAL" + a).appendField(
            Blockly.Msg.ORDINAL_NUMBER_SUFFIX
          ))
      : this.appendDummyInput("AT" + a);
    2 == a &&
      Blockly.Msg.TEXT_GET_SUBSTRING_TAIL &&
      (this.removeInput("TAIL", !0),
      this.appendDummyInput("TAIL").appendField(
        Blockly.Msg.TEXT_GET_SUBSTRING_TAIL
      ));
    var c = new Blockly.FieldDropdown(this["WHERE_OPTIONS_" + a], function (c) {
      var e = "FROM_START" == c || "FROM_END" == c;
      if (e != b) {
        var f = this.sourceBlock_;
        f.updateAt_(a, e);
        f.setFieldValue(c, "WHERE" + a);
        return null;
      }
    });
    this.getInput("AT" + a).appendField(c, "WHERE" + a);
    1 == a && this.moveInputBefore("AT1", "AT2");
  },
};
Blockly.Blocks.text_changeCase = {
  init: function () {
    var a = [
      [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"],
      [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"],
      [Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE, "TITLECASE"],
    ];
    this.setHelpUrl(Blockly.Msg.TEXT_CHANGECASE_HELPURL);
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField(new Blockly.FieldDropdown(a), "CASE");
    this.setOutput(!0, "String");
    this.setTooltip(Blockly.Msg.TEXT_CHANGECASE_TOOLTIP);
  },
};
Blockly.Blocks.text_trim = {
  init: function () {
    var a = [
      [Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH, "BOTH"],
      [Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT, "LEFT"],
      [Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT, "RIGHT"],
    ];
    this.setHelpUrl(Blockly.Msg.TEXT_TRIM_HELPURL);
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField(new Blockly.FieldDropdown(a), "MODE");
    this.setOutput(!0, "String");
    this.setTooltip(Blockly.Msg.TEXT_TRIM_TOOLTIP);
  },
};
Blockly.Blocks.text_print = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.TEXT_PRINT_TITLE,
      args0: [{ type: "input_value", name: "TEXT" }],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Blocks.texts.HUE,
      tooltip: Blockly.Msg.TEXT_PRINT_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_PRINT_HELPURL,
    });
  },
};
Blockly.Blocks.text_prompt = {
  init: function () {
    var a = [
        [Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
        [Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"],
      ],
      b = this;
    this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);
    this.setColour(Blockly.Blocks.texts.HUE);
    a = new Blockly.FieldDropdown(a, function (a) {
      "NUMBER" == a ? b.changeOutput("Number") : b.changeOutput("String");
    });
    this.appendDummyInput()
      .appendField(a, "TYPE")
      .appendField(this.newQuote_(!0))
      .appendField(new Blockly.FieldTextInput(""), "TEXT")
      .appendField(this.newQuote_(!1));
    this.setOutput(!0, "String");
    b = this;
    this.setTooltip(function () {
      return "TEXT" == b.getFieldValue("TYPE")
        ? Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT
        : Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER;
    });
  },
  newQuote_: Blockly.Blocks.text.newQuote_,
};
Blockly.Blocks.text_prompt_ext = {
  init: function () {
    var a = [
        [Blockly.Msg.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
        [Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"],
      ],
      b = this;
    this.setHelpUrl(Blockly.Msg.TEXT_PROMPT_HELPURL);
    this.setColour(Blockly.Blocks.texts.HUE);
    a = new Blockly.FieldDropdown(a, function (a) {
      "NUMBER" == a ? b.changeOutput("Number") : b.changeOutput("String");
    });
    this.appendValueInput("TEXT").appendField(a, "TYPE");
    this.setOutput(!0, "String");
    b = this;
    this.setTooltip(function () {
      return "TEXT" == b.getFieldValue("TYPE")
        ? Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT
        : Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER;
    });
  },
};
Blockly.Blocks.variables = {};
Blockly.Blocks.variables.HUE = 330;
Blockly.Blocks.variables_get = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(Blockly.Blocks.variables.HUE);
    this.appendDummyInput().appendField(
      new Blockly.FieldVariable(Blockly.Msg.VARIABLES_default_NAME),
      "VAR"
    );
    this.setOutput(!0);
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
  },
  getVars: function () {
    return [this.getFieldValue("VAR")];
  },
  renameVar: function (a, b) {
    Blockly.Names.equals(a, this.getFieldValue("VAR")) &&
      this.setFieldValue(b, "VAR");
  },
  contextMenuType_: "variables_set",
  customContextMenu: function (a) {
    var b = { enabled: !0 },
      c = this.getFieldValue("VAR");
    b.text = this.contextMenuMsg_.replace("%1", c);
    c = goog.dom.createDom("field", null, c);
    c.setAttribute("name", "VAR");
    c = goog.dom.createDom("block", null, c);
    c.setAttribute("type", this.contextMenuType_);
    b.callback = Blockly.ContextMenu.callbackFactory(this, c);
    a.push(b);
  },
};
Blockly.Blocks.variables_set = {
  init: function () {
    this.jsonInit({
      message0: Blockly.Msg.VARIABLES_SET,
      args0: [
        {
          type: "field_variable",
          name: "VAR",
          variable: Blockly.Msg.VARIABLES_default_NAME,
        },
        { type: "input_value", name: "VALUE" },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Blocks.variables.HUE,
      tooltip: Blockly.Msg.VARIABLES_SET_TOOLTIP,
      helpUrl: Blockly.Msg.VARIABLES_SET_HELPURL,
    });
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
  },
  getVars: function () {
    return [this.getFieldValue("VAR")];
  },
  renameVar: function (a, b) {
    Blockly.Names.equals(a, this.getFieldValue("VAR")) &&
      this.setFieldValue(b, "VAR");
  },
  contextMenuType_: "variables_get",
  customContextMenu: Blockly.Blocks.variables_get.customContextMenu,
};
