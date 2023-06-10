// this files contains the functions that defines the behavior of the blocks
"use strict";

//***************************************************************************************
// Importing the drivers and libs
import libs from "../JS_drivers/libraries.js";
import driversPrototypes from "../JS_drivers/driversPrototypes.js";
import modulesInitializations from "../JS_drivers/modulesInitializations.js";

// Helper functions to make it easier and more comprehensible to import and generate the code

// Adds a macro definition to the definitions list
function includeLib(lib) {
  Blockly.AVR.definitions_[lib.name] = lib.val;
}

// Adds a module initialization to the setup list
function initModule(module) {
  Blockly.AVR.setups_[module.name] = module.val();
}

// Extracts a parameter from a block
function extractParametersFromBlocks(object, ...params) {
  const paramsList = Array.from(params).map((param) => {
    const extractedValue = Blockly.AVR.valueToCode(
      object,
      param,
      Blockly.AVR.ORDER_ATOMIC
    );
    if (extractedValue === "") return undefined;
    return extractedValue;
  });
  return paramsList;
}

function attachModuleOnPort(
  module,
  portMacroDefinitionName,
  portName,
  pinShiftMacroDefinitionName,
  pinShift
) {
  Blockly.AVR.definitions_[
    `${module.name}_port`
  ] = `#define ${portMacroDefinitionName} ${portName}`;
  Blockly.AVR.definitions_[
    `${module.name}_pinShift`
  ] = `#define ${pinShiftMacroDefinitionName} ${pinShift}`;
}

function extractParametersFromFields(object, ...params) {
  const paramsList = Array.from(params).map((param) => {
    const extractedValue = object.getFieldValue(param);
    if (extractedValue === "") return undefined;
    return extractedValue;
  });
  return paramsList;
}

// Extracts the parameters and passes them to the driver function. Returns the complete function call string
// Arguments must be passed in order
function generateDriverFunctionCall(driver, ...args) {
  let functionPrototype = driver.val(...args);
  if (functionPrototype[functionPrototype.length - 1] == ";")
    functionPrototype += "\n";
  return functionPrototype;
}
//***************************************************************************************

// changed arduino to avr - liolah
Blockly.AVR = new Blockly.Generator("AVR");
Blockly.AVR.addReservedWords(
  "setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts"
);
Blockly.AVR.ORDER_ATOMIC = 0;
Blockly.AVR.ORDER_UNARY_POSTFIX = 1;
Blockly.AVR.ORDER_UNARY_PREFIX = 2;
Blockly.AVR.ORDER_MULTIPLICATIVE = 3;
Blockly.AVR.ORDER_ADDITIVE = 4;
Blockly.AVR.ORDER_SHIFT = 5;
Blockly.AVR.ORDER_RELATIONAL = 6;
Blockly.AVR.ORDER_EQUALITY = 7;
Blockly.AVR.ORDER_BITWISE_AND = 8;
Blockly.AVR.ORDER_BITWISE_XOR = 9;
Blockly.AVR.ORDER_BITWISE_OR = 10;
Blockly.AVR.ORDER_LOGICAL_AND = 11;
Blockly.AVR.ORDER_LOGICAL_OR = 12;
Blockly.AVR.ORDER_CONDITIONAL = 13;
Blockly.AVR.ORDER_ASSIGNMENT = 14;
Blockly.AVR.ORDER_NONE = 99;

// Edited by liolah
export let profile = {
  atmega32a: {
    description: "Atmega32A AVR board",
    digital: [
      ["PA0", "PORTA0"],
      ["PA1", "PORTA1"],
      ["PA2", "PORTA2"],
      ["PA3", "PORTA3"],
      ["PA4", "PORTA4"],
      ["PA5", "PORTA5"],
      ["PA6", "PORTA6"],
      ["PA7", "PORTA7"],
      ["PB0", "PORTB0"],
      ["PB1", "PORTB1"],
      ["PB2", "PORTB2"],
      ["PB3", "PORTB3"],
      ["PB4", "PORTB4"],
      ["PB5", "PORTB5"],
      ["PB6", "PORTB6"],
      ["PB7", "PORTB7"],
      ["PC0", "PORTC0"],
      ["PC1", "PORTC1"],
      ["PC2", "PORTC2"],
      ["PC3", "PORTC3"],
      ["PC4", "PORTC4"],
      ["PC5", "PORTC5"],
      ["PC6", "PORTC6"],
      ["PC7", "PORTC7"],
      ["PD0", "PORTD0"],
      ["PD1", "PORTD1"],
      ["PD2", "PORTD2"],
      ["PD3", "PORTD3"],
      ["PD4", "PORTD4"],
      ["PD5", "PORTD5"],
      ["PD6", "PORTD6"],
      ["PD7", "PORTD7"],
    ],
    analog: [
      ["PA0", "PORTA0"],
      ["PA1", "PORTA1"],
      ["PA2", "PORTA2"],
      ["PA3", "PORTA3"],
      ["PA4", "PORTA4"],
      ["PA5", "PORTA5"],
      ["PA6", "PORTA6"],
      ["PA7", "PORTA7"],
    ],
    pins: [
      ["0", "0"],
      ["1", "1"],
      ["2", "2"],
      ["3", "3"],
      ["4", "4"],
      ["5", "5"],
      ["6", "6"],
      ["7", "7"],
    ],
    ports: [
      ["A", "A"],
      ["B", "B"],
      ["C", "C"],
      ["D", "D"],
    ],
    serial: 9600,
  },
};

profile["default"] = profile.atmega32a;
Blockly.AVR.init = function (a) {
  Blockly.AVR.definitions_ = Object.create(null);
  Blockly.AVR.setups_ = Object.create(null);
  Blockly.AVR.variableDB_
    ? Blockly.AVR.variableDB_.reset()
    : (Blockly.AVR.variableDB_ = new Blockly.Names(
        Blockly.AVR.RESERVED_WORDS_
      ));
  var b = [];
  a = Blockly.Variables.allVariables(a);
  for (var c = 0; c < a.length; c++)
    b[c] =
      "int " +
      Blockly.AVR.variableDB_.getName(a[c], Blockly.Variables.NAME_TYPE) +
      ";\n";
  Blockly.AVR.definitions_.variables = b.join("\n");
};

// Edited the finish function - liolah
Blockly.AVR.finish = function (code) {
  // Blockly.AVR.definitions_.define_cpu_frequency = "#define F_CPU 16000000";
  // Blockly.AVR.definitions_.define_avr_lib = "#include <avr/io.h>\n";
  code = "  " + code.replace(/\n/g, "\n  ");
  code = code.replace(/\n\s+$/, "\n");
  code = "while(1) {\n" + code + "\n   }\n}";
  const default_template = `int main(void) {\n\n`;
  var includes = [],
    definitions = [],
    macro;
  for (macro in Blockly.AVR.definitions_) {
    var setup = Blockly.AVR.definitions_[macro];
    setup.match(/^#include/) ? includes.push(setup) : definitions.push(setup);
  }
  setup = [];
  for (macro in Blockly.AVR.setups_) setup.push(Blockly.AVR.setups_[macro]);
  return (
    (
      "#include <avr/io.h>\n" +
      "#define F_CPU 16000000\n\n" +
      definitions.join("\n") +
      "\n\n" +
      includes.join("\n") +
      "\n\n" +
      default_template +
      setup.join("\n  ")
    )
      .replace(/\n\n+/g, "\n\n")
      .replace(/\n*$/, "\n\n") + code
  );
};

Blockly.AVR.scrubNakedValue = function (a) {
  return a + ";\n";
};
Blockly.AVR.quote_ = function (a) {
  a = a
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\\n")
    .replace(/\$/g, "\\$")
    .replace(/'/g, "\\'");
  return '"' + a + '"';
};
Blockly.AVR.scrub_ = function (a, b) {
  if (null === b) return "";
  var c = "";
  if (!a.outputConnection || !a.outputConnection.targetConnection) {
    var d = a.getCommentText();
    d && (c += Blockly.AVR.prefixLines(d, "// ") + "\n");
    for (var e = 0; e < a.inputList.length; e++)
      a.inputList[e].type == Blockly.INPUT_VALUE &&
        (d = a.inputList[e].connection.targetBlock()) &&
        (d = Blockly.AVR.allNestedComments(d)) &&
        (c += Blockly.AVR.prefixLines(d, "// "));
  }
  e = a.nextConnection && a.nextConnection.targetBlock();
  e = Blockly.AVR.blockToCode(e);
  return c + b + e;
};

Blockly.AVR.base = {};

// liolah
// Modified function
Blockly.AVR.base_delay = function () {
  includeLib(libs.delay);
  const params = extractParametersFromBlocks(this, "DELAY_TIME");
  return generateDriverFunctionCall(driversPrototypes.delay.delay_ms, params);
};

Blockly.AVR.h = function () {
  const params = extractParametersFromFields(this, "HAHA");
  return generateDriverFunctionCall(driversPrototypes.test, params);
};

Blockly.AVR.temperature_read = function () {
  return [
    generateDriverFunctionCall(
      driversPrototypes.analog_sensors.temperature_read
    ),
    Blockly.AVR.ORDER_ATOMIC,
  ];
};
Blockly.AVR.brightness_read = function () {
  return [
    generateDriverFunctionCall(
      driversPrototypes.analog_sensors.brightness_read
    ),
    Blockly.AVR.ORDER_ATOMIC,
  ];
};

Blockly.AVR.sound_level_read = function () {
  return generateDriverFunctionCall(
    driversPrototypes.analog_sensors.sound_level_read
  );
};
Blockly.AVR.external_sensor_read = function () {
  const params = extractParametersFromFields(this, "sensors");
  return generateDriverFunctionCall(
    driversPrototypes.analog_sensors.external_sensor_read,
    ...params
  );
};

// Liolah
Blockly.AVR.buzzer_on = function () {
  includeLib(libs.buzzer);
  initModule(modulesInitializations.buzzer.buzzer_init);
  const params = extractParametersFromFields(this, "modulePort", "pinShift");
  attachModuleOnPort(
    libs.buzzer,
    "BUZZER_MODULE_PORT",
    params[0],
    "BUZZER_MODULE_PINS_SHIFT",
    params[1]
  );
  return generateDriverFunctionCall(driversPrototypes.buzzer.buzzer_on);
};

Blockly.AVR.buzzer_off = function () {
  return generateDriverFunctionCall(driversPrototypes.buzzer.buzzer_off);
};

Blockly.AVR.dot_matrix_display_char = function () {
  const params = extractParametersFromFields(this, "CHARACTER");
  return generateDriverFunctionCall(
    driversPrototypes.dot_matrix.dot_matrix_display_char,
    ...params
  );
};

Blockly.AVR.eight_digit_seven_segment_display = function () {
  const params = extractParametersFromFields(this, "NUMBER");
  return generateDriverFunctionCall(
    driversPrototypes.dot_matrix.eight_digit_seven_segment_display,
    ...params
  );
};
Blockly.AVR.EEPROM_write_byte = function () {
  const params = extractParametersFromFields(this, "PAGE", "ADDRESS", "VALUE");
  return generateDriverFunctionCall(
    driversPrototypes.EEPROM.EEPROM_write_byte,
    ...params
  );
};
Blockly.AVR.EEPROM_read_byte = function () {
  const params = extractParametersFromFields(this, "PAGE", "ADDRESS");
  return generateDriverFunctionCall(
    driversPrototypes.EEPROM.EEPROM_read_byte,
    ...params
  );
};
Blockly.AVR.keypad_getPressedKey = function () {
  return [
    generateDriverFunctionCall(driversPrototypes.keypad.keypad_getPressedKey),
    Blockly.AVR.ORDER_ATOMIC,
  ];
};

Blockly.AVR.LCD_sendData = function () {
  const params = extractParametersFromFields(this, "DATA");
  return generateDriverFunctionCall(
    driversPrototypes.LCD.LCD_sendData,
    ...params
  );
};

Blockly.AVR.LCD_sendCommand = function () {
  const params = extractParametersFromFields(this, "COMMAND");
  return generateDriverFunctionCall(
    driversPrototypes.LCD.LCD_sendCommand,
    ...params
  );
};

Blockly.AVR.LCD_write_string = function () {
  const params = extractParametersFromFields(this, "STRING");
  return generateDriverFunctionCall(
    driversPrototypes.LCD.LCD_write_string,
    ...params
  );
};

Blockly.AVR.LCD_move_cursor_xy = function () {
  const params = extractParametersFromFields(this, "X", "Y");
  return generateDriverFunctionCall(
    driversPrototypes.LCD.LCD_move_cursor_xy,
    ...params
  );
};

Blockly.AVR.LCD_write_string_xy = function () {
  const params = extractParametersFromFields(this, "STRING", "X", "Y");
  return generateDriverFunctionCall(
    driversPrototypes.LCD.LCD_write_string_xy,
    ...params
  );
};

Blockly.AVR.LCD_clear_screen = function () {
  return generateDriverFunctionCall(driversPrototypes.LCD.LCD_clear_screen);
};

Blockly.AVR.LED_on = function () {
  const params = extractParametersFromFields(this, "LEDNumber");
  return generateDriverFunctionCall(driversPrototypes.LED.LED_on, ...params);
};

Blockly.AVR.LED_off = function () {
  const params = extractParametersFromFields(this, "LEDNumber");
  return generateDriverFunctionCall(driversPrototypes.LED.LED_off, ...params);
};

Blockly.AVR.LED_toggle = function () {
  const params = extractParametersFromFields(this, "LEDNumber");
  return generateDriverFunctionCall(
    driversPrototypes.LED.LED_toggle,
    ...params
  );
};

Blockly.AVR.motor_on = function () {
  const params = extractParametersFromFields(this, "motorNumber", "direction");
  return generateDriverFunctionCall(
    driversPrototypes.Motor.motor_on,
    ...params
  );
};

Blockly.AVR.motor_off = function () {
  const params = extractParametersFromFields(this, "motorNumber");
  return generateDriverFunctionCall(
    driversPrototypes.Motor.motor_off,
    ...params
  );
};

Blockly.AVR.servo_move_to_angle = function () {
  const params = extractParametersFromFields(this, "dc");
  return generateDriverFunctionCall(
    driversPrototypes.Motor.servo_move_to_angle,
    ...params
  );
};

Blockly.AVR.port_expander_module_write = function () {
  const params = extractParametersFromFields(this, "chipNumber", "data");
  return generateDriverFunctionCall(
    driversPrototypes.port_expander.port_expander_module_write,
    ...params
  );
};

Blockly.AVR.port_expander_module_read = function () {
  const params = extractParametersFromFields(this, "chipNumber");
  return [
    generateDriverFunctionCall(
      driversPrototypes.port_expander.port_expander_module_read,
      ...params
    ),
    Blockly.AVR.ORDER_ATOMIC,
  ];
};

Blockly.AVR.relay_on = function () {
  const params = extractParametersFromFields(this, "relayNumber");
  return generateDriverFunctionCall(
    driversPrototypes.relay.relay_on,
    ...params
  );
};

Blockly.AVR.relay_off = function () {
  const params = extractParametersFromFields(this, "relayNumber");
  return generateDriverFunctionCall(
    driversPrototypes.relay.relay_off,
    ...params
  );
};

Blockly.AVR.relay_toggle = function () {
  const params = extractParametersFromFields(this, "relayNumber");
  return generateDriverFunctionCall(
    driversPrototypes.relay.relay_toggle,
    ...params
  );
};

Blockly.AVR.SSR_set_brightness = function () {
  const params = extractParametersFromFields(this, "dc");
  return generateDriverFunctionCall(
    driversPrototypes.relay.SSR_set_brightness,
    ...params
  );
};

Blockly.AVR.single_digit_seven_segment_show_hex_num = function () {
  const params = extractParametersFromFields(this, "num");
  return generateDriverFunctionCall(
    driversPrototypes.single_digit_seven_segment
      .single_digit_seven_segment_show_hex_num,
    ...params
  );
};
Blockly.AVR.push_button_read = function () {
  const params = extractParametersFromFields(this, "button");
  return [
    generateDriverFunctionCall(
      driversPrototypes.push_button.push_button_read,
      ...params
    ),
    Blockly.AVR.ORDER_ATOMIC,
  ];
};

//? Original function
// Blockly.AVR.base_delay = function() {
//     Blockly.AVR.definitions_.define_base_delay = "#include <util/delay.h>\n";
//     return (
//         "_delay_ms(" +
//         (Blockly.AVR.valueToCode(
//             this,
//             "DELAY_TIME",
//             Blockly.AVR.ORDER_ATOMIC
//         ) || "1000") +
//         ");\n"
//     );
// };

Blockly.AVR.base_map = function () {
  var a = Blockly.AVR.valueToCode(this, "NUM", Blockly.AVR.ORDER_NONE),
    b = Blockly.AVR.valueToCode(this, "DMAX", Blockly.AVR.ORDER_ATOMIC);
  return ["map(" + a + ", 0, 1024, 0, " + b + ")", Blockly.AVR.ORDER_NONE];
};
Blockly.AVR.inout_buildin_led = function () {
  var a = this.getFieldValue("STAT");
  Blockly.AVR.setups_.setup_output_13 = "pinMode(13, OUTPUT);";
  return "digitalWrite(13, " + a + ");\n";
};

// Test code output - liolah
Blockly.AVR.inout_digital_write = function () {
  var pin = this.getFieldValue("PIN"),
    port = this.getFieldValue("PORT"),
    state = this.getFieldValue("STAT");
  Blockly.AVR.setups_[
    "setup_output_" + port + pin
  ] = `DDR${port} |= ( 1 << ${pin} );`;
  return state == "HIGH"
    ? `PORT${port} |= ( 1 << ${pin} );`
    : `PORT${port} &= ~( 1 << ${pin} );`;
};

Blockly.AVR.inout_digital_read = function () {
  var a = this.getFieldValue("PIN");
  Blockly.AVR.setups_["setup_input_" + a] = "pinMode(" + a + ", INPUT);";
  return ["digitalRead(" + a + ")", Blockly.AVR.ORDER_ATOMIC];
};
Blockly.AVR.inout_analog_write = function () {
  var a = this.getFieldValue("PIN"),
    b = Blockly.AVR.valueToCode(this, "NUM", Blockly.AVR.ORDER_ATOMIC);
  return "analogWrite(" + a + ", " + b + ");\n";
};
Blockly.AVR.inout_analog_read = function () {
  return [
    "analogRead(" + this.getFieldValue("PIN") + ")",
    Blockly.AVR.ORDER_ATOMIC,
  ];
};
Blockly.AVR.inout_tone = function () {
  var a = this.getFieldValue("PIN"),
    b = Blockly.AVR.valueToCode(this, "NUM", Blockly.AVR.ORDER_ATOMIC);
  Blockly.AVR.setups_["setup_output" + a] = "pinMode(" + a + ", OUTPUT);";
  return "tone(" + a + ", " + b + ");\n";
};
Blockly.AVR.inout_notone = function () {
  var a = this.getFieldValue("PIN");
  Blockly.AVR.setups_["setup_output" + a] = "pinMode(" + a + ", OUTPUT);";
  return "noTone(" + a + ");\n";
};
Blockly.AVR.inout_highlow = function () {
  return [
    "HIGH" == this.getFieldValue("BOOL") ? "HIGH" : "LOW",
    Blockly.AVR.ORDER_ATOMIC,
  ];
};
Blockly.AVR.servo_move = function () {
  var a = this.getFieldValue("PIN"),
    b = Blockly.AVR.valueToCode(this, "DEGREE", Blockly.AVR.ORDER_ATOMIC);
  Blockly.AVR.definitions_.define_servo = "#include <Servo.h>\n";
  Blockly.AVR.definitions_["var_servo" + a] = "Servo servo_" + a + ";\n";
  Blockly.AVR.setups_["setup_servo_" + a] =
    "servo_" + a + ".attach(" + a + ");\n";
  return "servo_" + a + ".write(" + b + ");\n";
};
Blockly.AVR.servo_read_degrees = function () {
  var a = this.getFieldValue("PIN");
  Blockly.AVR.definitions_.define_servo = "#include &lt;Servo.h&gt;\n";
  Blockly.AVR.definitions_["var_servo" + a] = "Servo servo_" + a + ";\n";
  Blockly.AVR.setups_["setup_servo_" + a] =
    "servo_" + a + ".attach(" + a + ");\n";
  return "servo_" + a + ".read()";
};
Blockly.AVR.serial_print = function () {
  var a =
    Blockly.AVR.valueToCode(this, "CONTENT", Blockly.AVR.ORDER_ATOMIC) || "0";
  Blockly.AVR.setups_["setup_serial_" + profile["default"].serial] =
    "Serial.begin(" + profile["default"].serial + ");\n";
  return "Serial.println(" + a + ");\n";
};
Blockly.AVR.loops = {};
Blockly.AVR.controls_for = function () {
  var a = Blockly.AVR.variableDB_.getName(
      this.getFieldValue("VAR"),
      Blockly.Variables.NAME_TYPE
    ),
    b =
      Blockly.AVR.valueToCode(this, "FROM", Blockly.AVR.ORDER_ASSIGNMENT) ||
      "0",
    c =
      Blockly.AVR.valueToCode(this, "TO", Blockly.AVR.ORDER_ASSIGNMENT) || "0",
    d = Blockly.AVR.statementToCode(this, "DO");
  Blockly.AVR.INFINITE_LOOP_TRAP &&
    (d =
      Blockly.AVR.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + d);
  if (b.match(/^-?\d+(\.\d+)?$/) && c.match(/^-?\d+(\.\d+)?$/))
    var e = parseFloat(b) <= parseFloat(c),
      d =
        "for (" +
        a +
        " = " +
        b +
        "; " +
        a +
        (e ? " <= " : " >= ") +
        c +
        "; " +
        a +
        (e ? "++" : "--") +
        ") {\n" +
        d +
        "}\n";
  else
    (d = ""),
      (e = b),
      b.match(/^\w+$/) ||
        b.match(/^-?\d+(\.\d+)?$/) ||
        ((e = Blockly.AVR.variableDB_.getDistinctName(
          a + "_start",
          Blockly.Variables.NAME_TYPE
        )),
        (d += "int " + e + " = " + b + ";\n")),
      (b = c),
      c.match(/^\w+$/) ||
        c.match(/^-?\d+(\.\d+)?$/) ||
        ((b = Blockly.AVR.variableDB_.getDistinctName(
          a + "_end",
          Blockly.Variables.NAME_TYPE
        )),
        (d += "int " + b + " = " + c + ";\n")),
      (d +=
        "for (" +
        a +
        " = " +
        e +
        ";\n    (" +
        e +
        " <= " +
        b +
        ") ? " +
        a +
        " <= " +
        b +
        " : " +
        a +
        " >= " +
        b +
        ";\n    " +
        a +
        " += (" +
        e +
        " <= " +
        b +
        ") ? 1 : -1) {\n" +
        branch0 +
        "}\n");
  return d;
};
Blockly.AVR.controls_whileUntil = function () {
  var a = "UNTIL" == this.getFieldValue("MODE"),
    b =
      Blockly.AVR.valueToCode(
        this,
        "BOOL",
        a ? Blockly.AVR.ORDER_LOGICAL_NOT : Blockly.AVR.ORDER_NONE
      ) || "false",
    c = Blockly.AVR.statementToCode(this, "DO");
  Blockly.AVR.INFINITE_LOOP_TRAP &&
    (c =
      Blockly.AVR.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + c);
  a && (b = "!" + b);
  return "while (" + b + ") {\n" + c + "}\n";
};
Blockly.AVR.grove = {};
Blockly.AVR.grove_led = function () {
  var a = this.getFieldValue("PIN"),
    b = this.getFieldValue("STAT");
  Blockly.AVR.setups_["setup_green_led_" + a] = "pinMode(" + a + ", OUTPUT);";
  return "digitalWrite(" + a + "," + b + ");\n";
};
Blockly.AVR.grove_button = function () {
  var a = this.getFieldValue("PIN");
  Blockly.AVR.setups_["setup_button_" + a] = "pinMode(" + a + ", INPUT);";
  return ["digitalRead(" + a + ")", Blockly.AVR.ORDER_ATOMIC];
};
Blockly.AVR.grove_rotary_angle = function () {
  return [
    "analogRead(" + this.getFieldValue("PIN") + ")",
    Blockly.AVR.ORDER_ATOMIC,
  ];
};
Blockly.AVR.grove_tilt_switch = function () {
  var a = this.getFieldValue("PIN");
  Blockly.AVR.setups_["setup_tilt_switch_" + a] = "pinMode(" + a + ", INPUT);";
  return ["digitalRead(" + a + ")", Blockly.AVR.ORDER_ATOMIC];
};
Blockly.AVR.grove_piezo_buzzer = function () {
  var a = this.getFieldValue("PIN"),
    b = this.getFieldValue("STAT");
  Blockly.AVR.setups_["setup_piezo_buzzer_" + a] =
    "pinMode(" + a + ", OUTPUT);";
  return "digitalWrite(" + a + "," + b + ");\n";
};
Blockly.AVR.grove_relay = function () {
  var a = this.getFieldValue("PIN"),
    b = this.getFieldValue("STAT");
  Blockly.AVR.setups_["setup_relay_" + a] = "pinMode(" + a + ", OUTPUT);";
  return "digitalWrite(" + a + "," + b + ");\n";
};
Blockly.AVR.grove_temporature_sensor = function () {
  var a = this.getFieldValue("PIN");
  return [
    "round((1/(log((float)(1023-analogRead(" +
      a +
      "))*10000/analogRead(" +
      a +
      "))/10000)/3975+1/298.15)-273.15)",
    Blockly.AVR.ORDER_ATOMIC,
  ];
};
var _get_next_pin = function (a) {
  var b = a,
    b = parseInt(b)
      ? parseInt(a) + 1
      : "A" + (parseInt(b.slice(1, b.length)) + 1);
  a = profile["default"].digital.length;
  for (var c = !0, d = 0; d < a; d++)
    profile["default"].digital[d][1] == b && (c = !1);
  return c
    ? (alert(
        "Grove Sensor needs PIN#+1 port, current setting is out of bound."
      ),
      null)
    : b;
};
Blockly.AVR.grove_serial_lcd_print = function () {
  var a = this.getFieldValue("PIN"),
    b =
      Blockly.AVR.valueToCode(this, "TEXT", Blockly.AVR.ORDER_UNARY_POSTFIX) ||
      "''",
    c =
      Blockly.AVR.valueToCode(this, "TEXT2", Blockly.AVR.ORDER_UNARY_POSTFIX) ||
      "''",
    d =
      Blockly.AVR.valueToCode(this, "DELAY_TIME", Blockly.AVR.ORDER_ATOMIC) ||
      "1000";
  Blockly.AVR.definitions_.define_seriallcd = "#include <SerialLCD.h>\n";
  Blockly.AVR.definitions_.define_softwareserial =
    "#include <SoftwareSerial.h>\n";
  var e = _get_next_pin(a);
  Blockly.AVR.definitions_["var_lcd_" + a] =
    "SerialLCD slcd_" + a + "(" + a + "," + e + ");\n";
  Blockly.AVR.setups_["setup_lcd_" + a] = "slcd_" + a + ".begin();\n";
  e = "slcd_" + a + ".backlight();\n" + ("slcd_" + a + ".setCursor(0,0);\n");
  e += "slcd_" + a + ".print(" + b + ");\n";
  e += "slcd_" + a + ".setCursor(0,1);\n";
  e += "slcd_" + a + ".print(" + c + ");\n";
  return (e += "delay(" + d + ");\n");
};
Blockly.AVR.grove_serial_lcd_power = function () {
  var a = this.getFieldValue("PIN"),
    b = this.getFieldValue("STAT");
  Blockly.AVR.definitions_.define_seriallcd = "#include <SerialLCD.h>\n";
  Blockly.AVR.definitions_.define_softwareserial =
    "#include <SoftwareSerial.h>\n";
  var c = _get_next_pin(a);
  Blockly.AVR.definitions_["var_lcd" + a] =
    "SerialLCD slcd_" + a + "(" + a + "," + c + ");\n";
  a = "slcd_" + a;
  return "ON" === b ? a + ".Power();\n" : a + ".noPower();\n";
};
Blockly.AVR.grove_serial_lcd_effect = function () {
  var a = this.getFieldValue("PIN"),
    b = this.getFieldValue("STAT");
  Blockly.AVR.definitions_.define_seriallcd = "#include <SerialLCD.h>\n";
  Blockly.AVR.definitions_.define_softwareserial =
    "#include <SoftwareSerial.h>\n";
  var c = _get_next_pin(a);
  Blockly.AVR.definitions_["var_lcd" + a] =
    "SerialLCD slcd_" + a + "(" + a + "," + c + ");\n";
  a = "slcd_" + a;
  return "LEFT" === b
    ? a + ".scrollDisplayLeft();\n"
    : "RIGHT" === b
    ? a + ".scrollDisplayRight();\n"
    : a + ".autoscroll();\n";
};
Blockly.AVR.grove_sound_sensor = function () {
  return [
    "analogRead(" + this.getFieldValue("PIN") + ")",
    Blockly.AVR.ORDER_ATOMIC,
  ];
};
Blockly.AVR.grove_pir_motion_sensor = function () {
  var a = this.getFieldValue("PIN");
  Blockly.AVR.setups_["setup_input_" + a] = "pinMode(" + a + ", INPUT);";
  return ["digitalRead(" + a + ")", Blockly.AVR.ORDER_ATOMIC];
};
Blockly.AVR.grove_line_finder = function () {
  var a = this.getFieldValue("PIN");
  Blockly.AVR.setups_["setup_input_" + a] = "pinMode(" + a + ", INPUT);";
  return ["digitalRead(" + a + ")", Blockly.AVR.ORDER_ATOMIC];
};
Blockly.AVR.grove_ultrasonic_ranger = function () {
  var a = this.getFieldValue("PIN"),
    b = this.getFieldValue("UNIT");
  Blockly.AVR.definitions_.define_ultrasonic = "#include <Ultrasonic.h>\n";
  Blockly.AVR.definitions_["var_ultrasonic" + a] =
    "Ultrasonic ultrasonic_" + a + "(" + a + ");";
  return [
    "cm" === b
      ? "ultrasonic_" + a + ".MeasureInCentimeters()"
      : "ultrasonic_" + a + ".MeasureInInches()",
    Blockly.AVR.ORDER_ATOMIC,
  ];
};
Blockly.AVR.grove_motor_shield = function () {
  var a = this.getFieldValue("DIRECTION");
  Blockly.AVR.setups_.setup_motor =
    "pinMode(8,OUTPUT);//I1\n  pinMode(11,OUTPUT);//I2\n  pinMode(9,OUTPUT);//speedPinA\n  pinMode(12,OUTPUT);//I3\n  pinMode(13,OUTPUT);//i4\n  pinMode(10,OUTPUT);//speedPinB\n";
  var b = "";
  "forward" === a
    ? ((Blockly.AVR.definitions_.define_forward =
        "void forward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n"),
      (b = "forward();\n"))
    : "right" === a
    ? ((Blockly.AVR.definitions_.define_right =
        "void right()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,LOW);//turn DC Motor A move anticlockwise\n  digitalWrite(8,HIGH);\n}\n\n"),
      (b = "right();\n"))
    : "left" === a
    ? ((Blockly.AVR.definitions_.define_left =
        "void left()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,HIGH);//turn DC Motor B move clockwise\n  digitalWrite(12,LOW);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n"),
      (b = "left();\n"))
    : "backward" === a
    ? ((Blockly.AVR.definitions_.define_backward =
        "void backward()\n{\n  analogWrite(9,127);//input a simulation value to set the speed\n  analogWrite(10,127);\n  digitalWrite(13,LOW);//turn DC Motor B move anticlockwise\n  digitalWrite(12,HIGH);\n  digitalWrite(11,HIGH);//turn DC Motor A move clockwise\n  digitalWrite(8,LOW);\n}\n\n"),
      (b = "backward();\n"))
    : "stop" === a &&
      ((Blockly.AVR.definitions_.define_stop =
        "void stop()\n{\ndigitalWrite(9,LOW);// Unenble the pin, to stop the motor. this should be done to avid damaging the motor.\ndigitalWrite(10,LOW);\ndelay(1000);\n}\n\n"),
      (b = "stop();\n"));
  return b;
};
Blockly.AVR.grove_thumb_joystick = function () {
  var a = this.getFieldValue("PIN"),
    b = "0",
    b = "y" === this.getFieldValue("AXIS") ? _get_next_pin(a) : a;
  return ["analogRead(" + b + ")", Blockly.AVR.ORDER_ATOMIC];
};

function hexToR(a) {
  return parseInt(cutHex(a).substring(0, 2), 16);
}

function hexToG(a) {
  return parseInt(cutHex(a).substring(2, 4), 16);
}

function hexToB(a) {
  return parseInt(cutHex(a).substring(4, 6), 16);
}

function cutHex(a) {
  return "#" == a.charAt(0) ? a.substring(1, 7) : a;
}
Blockly.AVR.grove_rgb_led = function () {
  var a = this.getFieldValue("PIN"),
    b = _get_next_pin(a);
  Blockly.AVR.setups_["setup_input_" + a] = "pinMode(" + a + ", OUTPUT);";
  Blockly.AVR.setups_["setup_input_" + b] = "pinMode(" + b + ", OUTPUT);";
  Blockly.AVR.definitions_.define_uint8 = "#define uint8 unsigned char";
  Blockly.AVR.definitions_.define_uint16 = "#define uint16 unsigned int";
  Blockly.AVR.definitions_.define_uint32 = "#define uint32 unsigned long int";
  Blockly.AVR.definitions_["define_clkproduce_" + a] =
    "void ClkProduce_" +
    a +
    "(void)\n{\n  digitalWrite(" +
    a +
    ", LOW);\n  delayMicroseconds(20);\n  digitalWrite(" +
    a +
    ", HIGH);\n  delayMicroseconds(20);\n}\n";
  Blockly.AVR.definitions_["define_send32zero_" + a] =
    "void Send32Zero_" +
    a +
    "(void)\n{\n  uint8 i;\n  for (i=0; i<32; i++)\n  {\n    digitalWrite(" +
    b +
    ", LOW);\n    ClkProduce_" +
    a +
    "();\n  }\n}\n";
  Blockly.AVR.definitions_.define_taskanticode =
    "uint8 TakeAntiCode(uint8 dat)\n{\n  uint8 tmp = 0;\n  if ((dat & 0x80) == 0)\n  {\n    tmp |= 0x02;\n  }\n  \n  if ((dat & 0x40) == 0)\n  {\n    tmp |= 0x01;\n  }\n  return tmp;\n}\n";
  Blockly.AVR.definitions_["define_datasend_" + a] =
    "// gray data\nvoid DatSend_" +
    a +
    "(uint32 dx)\n{\n  uint8 i;\n  for (i=0; i<32; i++)\n  {\n    if ((dx & 0x80000000) != 0)\n    {\n      digitalWrite(" +
    b +
    ", HIGH);\n    }\n    else\n    {\n      digitalWrite(" +
    b +
    ", LOW);\n    }\n  dx <<= 1;\n  ClkProduce_" +
    a +
    "();\n  }\n}\n";
  Blockly.AVR.definitions_["define_datadealwithsend_" + a] =
    "// data processing\nvoid DataDealWithAndSend_" +
    a +
    "(uint8 r, uint8 g, uint8 b)\n{\n  uint32 dx = 0;\n  dx |= (uint32)0x03 << 30;             // highest two bits 1\uff0cflag bits\n  dx |= (uint32)TakeAntiCode(b) << 28;\n  dx |= (uint32)TakeAntiCode(g) << 26;\n  dx |= (uint32)TakeAntiCode(r) << 24;\n\n  dx |= (uint32)b << 16;\n  dx |= (uint32)g << 8;\n  dx |= r;\n\n  DatSend_" +
    a +
    "(dx);\n}\n";
  b = "Send32Zero_" + a + "(); // begin\n";
  if (0 == this.itemCount_) return "";
  for (var c = 0; c < this.itemCount_; c++)
    var d = this.getFieldValue("RGB" + c),
      b =
        b +
        ("DataDealWithAndSend_" +
          a +
          "(" +
          hexToR(d) +
          ", " +
          hexToG(d) +
          ", " +
          hexToB(d) +
          "); // first node data\n");
  return b + ("Send32Zero_" + a + "();  // send to update data\n");
};
Blockly.AVR.grove_bluetooth_slave = function () {
  var a = this.getFieldValue("PIN"),
    b = _get_next_pin(a),
    c = this.getFieldValue("NAME");
  this.getFieldValue("PINCODE");
  var d = Blockly.AVR.statementToCode(this, "RCV"),
    e = Blockly.AVR.statementToCode(this, "SNT");
  Blockly.AVR.definitions_.define_softwareserial =
    "#include <SoftwareSerial.h>\n";
  Blockly.AVR.definitions_["var_bluetooth_" + a] =
    "SoftwareSerial blueToothSerial_" + a + "(" + a + "," + b + ");\n";
  Blockly.AVR.setups_["setup_bluetooth_" + a] = "Serial.begin(9600);\n";
  Blockly.AVR.setups_["setup_bluetooth_" + a] +=
    "  pinMode(" + a + ", INPUT);\n";
  Blockly.AVR.setups_["setup_bluetooth_" + a] +=
    "  pinMode(" + b + ", OUTPUT);\n";
  Blockly.AVR.setups_["setup_bluetooth_" + a] +=
    "  setupBlueToothConnection_" + a + "();\n";
  Blockly.AVR.definitions_["define_setupBlueToothConnection_" + a] =
    "void setupBlueToothConnection_" +
    a +
    "()\n{\n  blueToothSerial_" +
    a +
    ".begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400\n  blueToothSerial_" +
    a +
    '.print("\\r\\n+STWMOD=0\\r\\n"); //set the bluetooth work in slave mode\n  blueToothSerial_' +
    a +
    '.print("\\r\\n+STNA=' +
    c +
    '\\r\\n"); //set the bluetooth name as "' +
    c +
    '"\n  blueToothSerial_' +
    a +
    '.print("\\r\\n+STPIN=0000\\r\\n");//Set SLAVE pincode"0000"\n  blueToothSerial_' +
    a +
    '.print("\\r\\n+STOAUT=1\\r\\n"); // Permit Paired device to connect me\n  blueToothSerial_' +
    a +
    '.print("\\r\\n+STAUTO=0\\r\\n"); // Auto-connection should be forbidden here\n  delay(2000); // This delay is required.\n  blueToothSerial_' +
    a +
    '.print("\\r\\n+INQ=1\\r\\n"); //make the slave bluetooth inquirable \n  Serial.println("The slave bluetooth is inquirable!");\n  delay(2000); // This delay is required.\n  blueToothSerial_' +
    a +
    ".flush();\n}\n";
  return (
    "char recvChar_" +
    a +
    ";\nwhile(1) {\n  if(blueToothSerial_" +
    a +
    ".available()) {//check if there is any data sent from the remote bluetooth shield\n    recvChar_" +
    a +
    " = blueToothSerial_" +
    a +
    ".read();\n    Serial.print(recvChar_" +
    a +
    ");\n" +
    d +
    "  }\n  if(Serial.available()){//check if there is any data sent from the local serial terminal, you can add the other applications here\n    recvChar_" +
    a +
    " = Serial.read();\n    blueToothSerial_" +
    a +
    ".print(recvChar_" +
    a +
    ");\n" +
    e +
    "  }\n}\n"
  );
};
Blockly.AVR.logic = {};
Blockly.AVR.controls_if = function () {
  for (
    var a = 0,
      b =
        Blockly.AVR.valueToCode(this, "IF" + a, Blockly.AVR.ORDER_NONE) ||
        "false",
      c = Blockly.AVR.statementToCode(this, "DO" + a),
      d = "if (" + b + ") {\n" + c + "\n}",
      a = 1;
    a <= this.elseifCount_;
    a++
  )
    (b =
      Blockly.AVR.valueToCode(this, "IF" + a, Blockly.AVR.ORDER_NONE) ||
      "false"),
      (c = Blockly.AVR.statementToCode(this, "DO" + a)),
      (d += " else if (" + b + ") {\n" + c + "}");
  this.elseCount_ &&
    ((c = Blockly.AVR.statementToCode(this, "ELSE")),
    (d += " else {\n" + c + "\n}"));
  return d + "\n";
};
Blockly.AVR.logic_compare = function () {
  var a = this.getFieldValue("OP"),
    a = Blockly.AVR.logic_compare.OPERATORS[a],
    b =
      "==" == a || "!=" == a
        ? Blockly.AVR.ORDER_EQUALITY
        : Blockly.AVR.ORDER_RELATIONAL,
    c = Blockly.AVR.valueToCode(this, "A", b) || "0",
    d = Blockly.AVR.valueToCode(this, "B", b) || "0";
  return [c + " " + a + " " + d, b];
};
Blockly.AVR.logic_compare.OPERATORS = {
  EQ: "==",
  NEQ: "!=",
  LT: "<",
  LTE: "<=",
  GT: ">",
  GTE: ">=",
};
Blockly.AVR.logic_operation = function () {
  var a = "AND" == this.getFieldValue("OP") ? "&&" : "||",
    b =
      "&&" == a ? Blockly.AVR.ORDER_LOGICAL_AND : Blockly.AVR.ORDER_LOGICAL_OR,
    c = Blockly.AVR.valueToCode(this, "A", b) || "false",
    d = Blockly.AVR.valueToCode(this, "B", b) || "false";
  return [c + " " + a + " " + d, b];
};
Blockly.AVR.logic_negate = function () {
  var a = Blockly.AVR.ORDER_UNARY_PREFIX;
  return ["!" + (Blockly.AVR.valueToCode(this, "BOOL", a) || "false"), a];
};
Blockly.AVR.logic_boolean = function () {
  return [
    "TRUE" == this.getFieldValue("BOOL") ? "true" : "false",
    Blockly.AVR.ORDER_ATOMIC,
  ];
};
Blockly.AVR.logic_null = function () {
  return ["NULL", Blockly.AVR.ORDER_ATOMIC];
};
Blockly.AVR.math = {};
Blockly.AVR.math_number = function () {
  var a = window.parseFloat(this.getFieldValue("NUM"));
  return [a, 0 > a ? Blockly.AVR.ORDER_UNARY_PREFIX : Blockly.AVR.ORDER_ATOMIC];
};
Blockly.AVR.math_arithmetic = function () {
  var a = this.getFieldValue("OP"),
    b = Blockly.AVR.math_arithmetic.OPERATORS[a],
    a = b[0],
    b = b[1],
    c = Blockly.AVR.valueToCode(this, "A", b) || "0",
    d = Blockly.AVR.valueToCode(this, "B", b) || "0";
  return a
    ? [c + a + d, b]
    : ["Math.pow(" + c + ", " + d + ")", Blockly.AVR.ORDER_UNARY_POSTFIX];
};
Blockly.AVR.math_arithmetic.OPERATORS = {
  ADD: [" + ", Blockly.AVR.ORDER_ADDITIVE],
  MINUS: [" - ", Blockly.AVR.ORDER_ADDITIVE],
  MULTIPLY: [" * ", Blockly.AVR.ORDER_MULTIPLICATIVE],
  DIVIDE: [" / ", Blockly.AVR.ORDER_MULTIPLICATIVE],
  POWER: [null, Blockly.AVR.ORDER_NONE],
};
Blockly.AVR.procedures = {};
Blockly.AVR.procedures_defreturn = function () {
  var a = Blockly.AVR.variableDB_.getName(
      this.getFieldValue("NAME"),
      Blockly.Procedures.NAME_TYPE
    ),
    b = Blockly.AVR.statementToCode(this, "STACK");
  Blockly.AVR.INFINITE_LOOP_TRAP &&
    (b =
      Blockly.AVR.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + b);
  var c = Blockly.AVR.valueToCode(this, "RETURN", Blockly.AVR.ORDER_NONE) || "";
  c && (c = "  return " + c + ";\n");
  for (
    var d = c ? "int" : "void", e = [], f = 0;
    f < this.arguments_.length;
    f++
  )
    e[f] =
      "int " +
      Blockly.AVR.variableDB_.getName(
        this.arguments_[f],
        Blockly.Variables.NAME_TYPE
      );
  b = d + " " + a + "(" + e.join(", ") + ") {\n" + b + c + "}\n";
  b = Blockly.AVR.scrub_(this, b);
  Blockly.AVR.definitions_[a] = b;
  return null;
};
Blockly.AVR.procedures_defnoreturn = Blockly.AVR.procedures_defreturn;
Blockly.AVR.procedures_callreturn = function () {
  for (
    var a = Blockly.AVR.variableDB_.getName(
        this.getFieldValue("NAME"),
        Blockly.Procedures.NAME_TYPE
      ),
      b = [],
      c = 0;
    c < this.arguments_.length;
    c++
  )
    b[c] =
      Blockly.AVR.valueToCode(this, "ARG" + c, Blockly.AVR.ORDER_NONE) ||
      "null";
  return [a + "(" + b.join(", ") + ")", Blockly.AVR.ORDER_UNARY_POSTFIX];
};
Blockly.AVR.procedures_callnoreturn = function () {
  for (
    var a = Blockly.AVR.variableDB_.getName(
        this.getFieldValue("NAME"),
        Blockly.Procedures.NAME_TYPE
      ),
      b = [],
      c = 0;
    c < this.arguments_.length;
    c++
  )
    b[c] =
      Blockly.AVR.valueToCode(this, "ARG" + c, Blockly.AVR.ORDER_NONE) ||
      "null";
  return a + "(" + b.join(", ") + ");\n";
};
Blockly.AVR.procedures_ifreturn = function () {
  var a =
    "if (" +
    (Blockly.AVR.valueToCode(this, "CONDITION", Blockly.AVR.ORDER_NONE) ||
      "false") +
    ") {\n";
  if (this.hasReturnValue_)
    var b =
        Blockly.AVR.valueToCode(this, "VALUE", Blockly.AVR.ORDER_NONE) ||
        "null",
      a = a + ("  return " + b + ";\n");
  else a += "  return;\n";
  return a + "}\n";
};
Blockly.AVR.texts = {};
Blockly.AVR.text = function () {
  return [
    Blockly.AVR.quote_(this.getFieldValue("TEXT")),
    Blockly.AVR.ORDER_ATOMIC,
  ];
};
Blockly.AVR.variables = {};
Blockly.AVR.variables_get = function () {
  return [
    Blockly.AVR.variableDB_.getName(
      this.getFieldValue("VAR"),
      Blockly.Variables.NAME_TYPE
    ),
    Blockly.AVR.ORDER_ATOMIC,
  ];
};
Blockly.AVR.variables_declare = function () {
  this.getFieldValue("TYPE");
  var a =
      Blockly.AVR.valueToCode(this, "VALUE", Blockly.AVR.ORDER_ASSIGNMENT) ||
      "0",
    b = Blockly.AVR.variableDB_.getName(
      this.getFieldValue("VAR"),
      Blockly.Variables.NAME_TYPE
    );
  Blockly.AVR.setups_["setup_var" + b] = b + " = " + a + ";\n";
  return "";
};
Blockly.AVR.variables_set = function () {
  var a =
    Blockly.AVR.valueToCode(this, "VALUE", Blockly.AVR.ORDER_ASSIGNMENT) || "0";
  return (
    Blockly.AVR.variableDB_.getName(
      this.getFieldValue("VAR"),
      Blockly.Variables.NAME_TYPE
    ) +
    " = " +
    a +
    ";\n"
  );
};
