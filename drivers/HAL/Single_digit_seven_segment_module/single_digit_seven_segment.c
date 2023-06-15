
#include "single_digit_seven_segment.h"

void Single_digit_seven_segment_module_init(){
  DIO_port_init(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, OUT);
  }

void Single_digit_seven_segment_show_hex_num(uint8_t num){
  switch (num)
  {
  case 0:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b11111100);
    break;
  case 1:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b01100000);
    break;
  case 2:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b11011010);
    break;
  case 3:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b11110010);
    break;
  case 4:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b01100110);
    break;
  case 5:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b10110110);
    break;
  case 6:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b10111110);
    break;
  case 7:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b11100000);
    break;
  case 8:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b11111110);
    break;
  case 9:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b11110110);
    break;
  case 10:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b11111010);
    break;
  case 11:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b00111110);
    break;
  case 12:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b10011100);
    break;
  case 13:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b01111010);
    break;
  case 14:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b10011110);
    break;
  case 15:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b10001110);
    break;
  default:
    DIO_port_send(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, 0b00000000);
    break;
  }
}