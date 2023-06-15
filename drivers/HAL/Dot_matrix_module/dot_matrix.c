#include "dot_matrix.h"
#include <string.h>

void Dot_matrix_init() {
  ledmatrix7219d88_init();
  }

void Dot_matrix_display_char(int8_t x) {
        uint8_t a[8] = {
      0b01000100,
      0b01000100,
      0b01000100,
      0b01111100,
      0b01000100,
      0b01000100,
      0b01000100,
      0b00000000
          };
        uint8_t b[8] = {
      0b01000100,
      0b01000100,
      0b01100100,
      0b01010100,
      0b01001100,
      0b01000100,
      0b01000100,
      0b00000000
          };
        uint8_t c[8] = {
      0b01000100,
      0b01101100,
      0b01010100,
      0b01000100,
      0b01000100,
      0b01000100,
      0b01000100,
      0b00000000
          };
        uint8_t d[8] = {
      0b01000100,
      0b01000100,
      0b01001000,
      0b01110000,
      0b01001000,
      0b01000100,
      0b01000100,
      0b00000000
          };
  switch (x) {
      case 'H':
        ledmatrix7219d88_setmatrix(0, a);
        break;
      case 'N':
        ledmatrix7219d88_setmatrix(0, b);
        break;
      case 'M':
        ledmatrix7219d88_setmatrix(0, c);
        break;
      case 'K':
        ledmatrix7219d88_setmatrix(0, d);
        break;
    }
  }

uint8_t charToSevenSeg(int8_t x) {
  switch (x) {
      case 0:
        return 0b11111100;
        break;
      case 1:
        return 0b01100000;
        break;
      case 2:
        return 0b11011010;
        break;
      case 3:
        return 0b11110010;
        break;
      case 4:
        return 0b01100110;
        break;
      case 5:
        return 0b10110110;
        break;
      case 6:
        return 0b10111110;
        break;
      case 7:
        return 0b11100000;
        break;
      case 8:
        return 0b11111110;
        break;
      case 9:
        return 0b11110110;
        break;
      case 10:
        return 0b11111010;
        break;
      case 11:
        return 0b00111110;
        break;
      case 12:
        return 0b10011100;
        break;
      case 13:
        return 0b01111010;
        break;
      case 14:
        return 0b10011110;
        break;
      case 15:
        return 0b10001110;
        break;
      default:
        return 0b00000000;
        break;
    }
  }

void Eight_digit_seven_segment_display(int8_t* x) {
  ledmatrix7219d88_resetmatrix(0);
  int i;
  for (i = 0;i < strlen(x);i++) {
    ledmatrix7219d88_setrow(0, i, charToSevenSeg(x[i]));
    }
  }