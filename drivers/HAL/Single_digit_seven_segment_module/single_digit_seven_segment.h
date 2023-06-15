#ifndef SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_H_
#define SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_H_

#include "../../MCAL/DIO/dio.h"

#ifndef SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT
#define SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_PORT PORT_B
#endif

void Single_digit_seven_segment_module_init();

void Single_digit_seven_segment_show_hex_num(uint8_t num);

#endif /* SINGLE_DIGIT_SEVEN_SEGMENT_MODULE_H_ */