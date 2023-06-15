#include "four_digit_seven_segment.h"

void Four_digits_seven_segment_init(){
  TM1650_init();
}

void Four_digits_seven_segment_display_num(uint32_t x){
  TM1650_writeNumber(x, false);
}

void Four_digits_seven_segment_display_string(int8_t* x){
  // TODO
}

void Four_digits_seven_segment_brightness(uint8_t brightness){
  TM1650_setBrightness(brightness);
}