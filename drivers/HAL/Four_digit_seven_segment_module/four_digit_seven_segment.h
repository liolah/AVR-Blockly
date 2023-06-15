#ifndef FOUR_DIGITS_SEVEN_SEGMENT_MODULE_H_
#define FOUR_DIGITS_SEVEN_SEGMENT_MODULE_H_

#include "TM1650.h"

#define FOUR_DIGITS_SEVEN_SEGMENT_MODULE_PORT PORT_C

void Four_digits_seven_segment_init();

void Four_digits_seven_segment_display_num(uint32_t x);

void Four_digits_seven_segment_display_string(int8_t* x);

void Four_digits_seven_segment_brightness(uint8_t brightness);

#endif /* FOUR_DIGITS_SEVEN_SEGMENT_MODULE_H_ */