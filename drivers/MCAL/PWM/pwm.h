#ifndef PWM_H_
#define PWM_H_

#include <stdint.h>
#include <avr/io.h>
#include "../../utilities/bit_manipulation.h"

#define PWM_NON_INVERTED_MODE 0

#define PWM_SIGNAL_INVERSION PWM_NON_INVERTED_MODE

#define PWM_PRESCALAR 8

#define TIMER_1_FAST_PWM_8_BIT       0

#define TIMER_1_PHASE_CORRECT_PWM_TOP_ICR1    8

#define TIMER_1_FAST_PWM_MODE TIMER_1_FAST_PWM_8_BIT

#define TIMER_1_PHASE_CORRECT_PWM_MODE TIMER_1_PHASE_CORRECT_PWM_TOP_ICR1

// Determines the frequency
// ICR1 is set to generate 50Hz PWM signal fro the servo
#define TIMER_1_PWM_TOP_ICR1_VALUE  20000

#define TIMER_0 0
#define TIMER_1 1
#define TIMER_2 2

#define OC_0  0
#define OC_1A 1
#define OC_1B 2
#define OC_2  3

#define PWM_FAST 1
#define PWM_PHASE_CORRECT 2

// Initialize the timers to start in pwm mode
// The PWM pin must be set as output 
void PWM_init(uint8_t pwmPin, double dutyCycle, uint8_t mode);

// Change the duty cycle of a timer
void PWM_set_DC(uint8_t pwmPin, double dutyCycle);

// Connects the OC pins.
void PWM_OCP_connect(uint8_t pwmPin);

// Start the timer
void Timer_start(uint8_t timerNumber, uint16_t prescalar);

#endif /* PWM_H_ */