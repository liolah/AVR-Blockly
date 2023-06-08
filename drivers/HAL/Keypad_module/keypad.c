#include "keypad.h"

void Keypad_init(void) {
  // Set rows as outputs
  DIO_pin_init(4, KEYPAD_MODULE_PORT, OUT);
  DIO_pin_init(5, KEYPAD_MODULE_PORT, OUT);
  DIO_pin_init(6, KEYPAD_MODULE_PORT, OUT);
  DIO_pin_init(7, KEYPAD_MODULE_PORT, OUT);
  // Set all high
  DIO_write(4, KEYPAD_MODULE_PORT, HIGH);
  DIO_write(5, KEYPAD_MODULE_PORT, HIGH);
  DIO_write(6, KEYPAD_MODULE_PORT, HIGH);
  DIO_write(7, KEYPAD_MODULE_PORT, HIGH);
  // Set columns as inputs
  DIO_pin_init(0, KEYPAD_MODULE_PORT, IN);
  DIO_pin_init(1, KEYPAD_MODULE_PORT, IN);
  DIO_pin_init(2, KEYPAD_MODULE_PORT, IN);
  DIO_pin_init(3, KEYPAD_MODULE_PORT, IN);
  // Activate the pull up resistors
  DIO_write(0, KEYPAD_MODULE_PORT, HIGH);
  DIO_write(1, KEYPAD_MODULE_PORT, HIGH);
  DIO_write(2, KEYPAD_MODULE_PORT, HIGH);
  DIO_write(3, KEYPAD_MODULE_PORT, HIGH);
  }

void toggle_row(uint8_t row) {
  switch (row) {
      case 0:
        DIO_toggle(4, KEYPAD_MODULE_PORT);
        break;
      case 1:
        DIO_toggle(5, KEYPAD_MODULE_PORT);
        break;
      case 2:
        DIO_toggle(6, KEYPAD_MODULE_PORT);
        break;
      case 3:
        DIO_toggle(7, KEYPAD_MODULE_PORT);
        break;
    }
  }

void check_col(uint8_t col, uint8_t* res) {
  switch (col) {
      case 0:
        DIO_Read(0, KEYPAD_MODULE_PORT, res);
        break;
      case 1:
        DIO_Read(1, KEYPAD_MODULE_PORT, res);
        break;
      case 2:
        DIO_Read(2, KEYPAD_MODULE_PORT, res);
        break;
      case 3:
        DIO_Read(3, KEYPAD_MODULE_PORT, res);
        break;
    }
  }

void check_row(uint8_t row, uint8_t* res) {
  switch (row) {
      case 0:
        DIO_Read(4, KEYPAD_MODULE_PORT, res);
        break;
      case 1:
        DIO_Read(5, KEYPAD_MODULE_PORT, res);
        break;
      case 2:
        DIO_Read(6, KEYPAD_MODULE_PORT, res);
        break;
      case 3:
        DIO_Read(7, KEYPAD_MODULE_PORT, res);
        break;
    }
  }

uint8_t Keypad_getPressedKey() {
  uint8_t keys[KEYPAD_ROW_NUM][KEYPAD_COL_NUM] = KEYPAD_BUTTON_VALUES;
  uint8_t row, col, col_state, row_state;
  // Check if the key has been depressed. If not return no presses.
  for (row = 0;row < KEYPAD_ROW_NUM; row++) {
    check_row(row, &row_state);
    if (row_state == LOW) {
      for (col = 0; col < KEYPAD_COL_NUM; col++) {
        check_col(col, &col_state);
        if (col_state == LOW) {
          return KEYPAD_NO_PRESSED_KEY_VALUE;
          }
        }
      toggle_row(row);
      }
    }
  for (row = 0; row < KEYPAD_ROW_NUM; row++) {
    toggle_row(row);
    for (col = 0; col < KEYPAD_COL_NUM; col++) {
      check_col(col, &col_state);
      if (col_state == LOW) {
        // while (col_state == LOW) {  // Wait until the key is released (busy waiting - halts the system)
        //   check_col(col, &col_state);
        //   }
        return keys[row][col];
        }
      }
    toggle_row(row);
    }
  return KEYPAD_NO_PRESSED_KEY_VALUE;
  }