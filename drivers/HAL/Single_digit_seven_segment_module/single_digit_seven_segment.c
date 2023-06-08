
#include "single_digit_seven_segment.h"

void Single_digit_seven_segment_module_init(){
  DIO_port_init(SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT, OUT);
  }

void Single_digit_seven_segment_show_hex_num(uint8_t num){
  
}