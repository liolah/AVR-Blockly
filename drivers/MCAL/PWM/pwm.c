#include "pwm.h"

// Helper function to select the prescalar 
void set_prescalar(u8 timer, uint16_t prescalarValue) {
  switch (timer) {
      case TIMER_0:
        if (prescalarValue == 0 || prescalarValue == 1 || prescalarValue == 8 || prescalarValue == 64 || prescalarValue == 256 || prescalarValue == 1024) {
          switch (prescalarValue) {
              case 0:
                // TCCR0 &= ~(1 << CS00 | CS01 | CS02);
                clear_bit(TCCR0, CS00);
                clear_bit(TCCR0, CS01);
                clear_bit(TCCR0, CS02);
                break;
              case 1:
                set_bit(TCCR0, CS00);
                clear_bit(TCCR0, CS01);
                clear_bit(TCCR0, CS02);
                break;
              case 8:
                clear_bit(TCCR0, CS00);
                set_bit(TCCR0, CS01);
                clear_bit(TCCR0, CS02);
                break;
              case 64:
                set_bit(TCCR0, CS00);
                set_bit(TCCR0, CS01);
                clear_bit(TCCR0, CS02);
                break;
              case 256:
                clear_bit(TCCR0, CS00);
                clear_bit(TCCR0, CS01);
                set_bit(TCCR0, CS02);
                break;
              case 1024:
                set_bit(TCCR0, CS00);
                clear_bit(TCCR0, CS01);
                set_bit(TCCR0, CS02);
                break;
            }
          }
        else {
          return WRONG_PRESCALAR;
          }
        break;
      case TIMER_1:
        if (prescalarValue == 0 || prescalarValue == 1 || prescalarValue == 8 || prescalarValue == 64 || prescalarValue == 256 || prescalarValue == 1024) {
          switch (prescalarValue) {
              case 0:
                // TCCR1B &= ~(1 << CS10 | CS11 | CS12);
                clear_bit(TCCR1B, CS10);
                clear_bit(TCCR1B, CS11);
                clear_bit(TCCR1B, CS12);
                break;
              case 1:
                set_bit(TCCR1B, CS10);
                clear_bit(TCCR1B, CS11);
                clear_bit(TCCR1B, CS12);
                break;
              case 8:
                clear_bit(TCCR1B, CS10);
                set_bit(TCCR1B, CS11);
                clear_bit(TCCR1B, CS12);
                break;
              case 64:
                set_bit(TCCR1B, CS10);
                set_bit(TCCR1B, CS11);
                clear_bit(TCCR1B, CS12);
                break;
              case 256:
                clear_bit(TCCR1B, CS10);
                clear_bit(TCCR1B, CS11);
                set_bit(TCCR1B, CS12);
                break;
              case 1024:
                set_bit(TCCR1B, CS10);
                clear_bit(TCCR1B, CS11);
                set_bit(TCCR1B, CS12);
                break;
            }
          }
        else {
          return WRONG_PRESCALAR;
          }
        break;
      case TIMER_2:
        if (prescalarValue == 0 || prescalarValue == 1 || prescalarValue == 8 || prescalarValue == 32 || prescalarValue == 64 || prescalarValue == 128 || prescalarValue == 256 || prescalarValue == 1024) {
          switch (prescalarValue) {
              case 0:
                // TCCR2 &= ~(1 << CS20 | CS21 | CS22);
                clear_bit(TCCR2, CS20);
                clear_bit(TCCR2, CS21);
                clear_bit(TCCR2, CS22);
                break;
              case 1:
                set_bit(TCCR2, CS20);
                clear_bit(TCCR2, CS21);
                clear_bit(TCCR2, CS22);
                break;
              case 8:
                clear_bit(TCCR2, CS20);
                set_bit(TCCR2, CS21);
                clear_bit(TCCR2, CS22);
                break;
              case 32:
                set_bit(TCCR2, CS20);
                set_bit(TCCR2, CS21);
                clear_bit(TCCR2, CS22);
                break;
              case 64:
                clear_bit(TCCR2, CS20);
                clear_bit(TCCR2, CS21);
                set_bit(TCCR2, CS22);
                break;
              case 128:
                set_bit(TCCR2, CS20);
                clear_bit(TCCR2, CS21);
                set_bit(TCCR2, CS22);
                break;
              case 256:
                clear_bit(TCCR2, CS20);
                set_bit(TCCR2, CS21);
                set_bit(TCCR2, CS22);
                break;
              case 1024:
                set_bit(TCCR2, CS20);
                set_bit(TCCR2, CS21);
                set_bit(TCCR2, CS22);
                break;
            }
          }
        else {
          return WRONG_PRESCALAR;
          }
        break;
    }
  // Everything went well
  return TIMER_OK;
  }

// Start the timer
EN_timerError_t Timer_start(u8 timerNumber, uint16_t prescalar) {
  // Validate the timer number
  if (!isValidTimer(timerNumber)) {
    return WRONG_TIMER;
    }
  // Select the clock source (prescaler) to start the timer 
  set_prescalar(timerNumber, prescalar);
  // Everything went well
  return TIMER_OK;
  }

// Initialize the timers to start in pwm mode
EN_timerError_t PWM_init(u8 pwmPin, double dutyCycle, u8 mode) {
  switch (pwmPin) {
      case OC_0:
        switch (mode) {
            case PWM_FAST:
              set_bit(TCCR0, WGM00);
              set_bit(TCCR0, WGM01);
              break;
            case PWM_PHASE_CORRECT:
              set_bit(TCCR0, WGM00);
              clear_bit(TCCR0, WGM01);
              break;
          }
        // The value in the OCR determines the duty cycle
        OCR0 = (u8)(dutyCycle * 255);
        break;
 case OC_1A:
      case OC_1B:
        switch (mode) {
            case PWM_FAST:
              set_bit(TCCR1A, WGM10);
              clear_bit(TCCR1A, WGM11);
              set_bit(TCCR1B, WGM12);
              clear_bit(TCCR1B, WGM13);
              break;
            case PWM_PHASE_CORRECT:
              clear_bit(TCCR1A, WGM10);
              set_bit(TCCR1A, WGM11);
              clear_bit(TCCR1B, WGM12);
              set_bit(TCCR1B, WGM13);
              ICR1 = TIMER_1_PWM_TOP_ICR1_VALUE;
              break;
          }
        switch (pwmPin) {
            case OC_1A:
              OCR1A = (uint16_t)(dutyCycle * 0x00FF);
              break;
            case OC_1B:
              OCR1B = (uint16_t)(dutyCycle * 0x00FF);
              break;
          }
        break;
      case OC_2:
        switch (mode) {
            case PWM_FAST:
              set_bit(TCCR2, WGM20);
              set_bit(TCCR2, WGM21);
              break;
            case PWM_PHASE_CORRECT:
              set_bit(TCCR2, WGM20);
              clear_bit(TCCR2, WGM21);
              break;
          }
        // The value in the OCR determines the duty cycle
        OCR2 = (u8)(dutyCycle * 255);
        break;
    }
  PWM_OCP_connect(pwmPin);
  return TIMER_OK;
  }

// Connects the OC pins.
EN_timerError_t PWM_OCP_connect(u8 pwmPin) {
  if (pwmPin != OC_0 && pwmPin != OC_1A && pwmPin != OC_1B && pwmPin != OC_2) {
    return WRONG_PWM_PIN;
    }
  switch (pwmPin) {
      case OC_0:
#if PWM_SIGNAL_INVERSION == PWM_NON_INVERTED_MODE
        clear_bit(TCCR0, COM00);
        set_bit(TCCR0, COM01);
#else 
        set_bit(TCCR0, COM00);
        set_bit(TCCR0, COM01);
#endif
        break;
      case OC_1A:
#if PWM_SIGNAL_INVERSION == PWM_NON_INVERTED_MODE
        clear_bit(TCCR1A, COM1A0);
        set_bit(TCCR1A, COM1A1);
#else 
        set_bit(TCCR1A, COM1A0);
        set_bit(TCCR1A, COM1A1);
#endif
        break;
      case OC_1B:
#if PWM_SIGNAL_INVERSION == PWM_NON_INVERTED_MODE
        clear_bit(TCCR1A, COM1B0);
        set_bit(TCCR1A, COM1B1);
#else 
        set_bit(TCCR1A, COM1B0);
        set_bit(TCCR1A, COM1B1);
#endif
        break;
      case OC_2:
#if PWM_SIGNAL_INVERSION == PWM_NON_INVERTED_MODE
        clear_bit(TCCR2, COM20);
        set_bit(TCCR2, COM21);
#else 
        set_bit(TCCR2, COM20);
        set_bit(TCCR2, COM21);
#endif
        break;
    }
  return TIMER_OK;
  }

// Change the duty cycle of a timer
void PWM_set_DC(u8 pwmPin, double dutyCycle) {
  switch (pwmPin) {
      case OC_0:
        OCR0 = (u8)(dutyCycle * 255);
        break;
      case OC_1A:
#if (TIMER_1_FAST_PWM_MODE == TIMER_1_FAST_PWM_8_BIT || TIMER_1_PHASE_CORRECT_PWM_MODE == TIMER_1_PHASE_CORRECT_PWM_8_BIT)
        OCR1A = (uint16_t)(dutyCycle * 0x00FF);
#elif (TIMER_1_FAST_PWM_MODE == TIMER_1_FAST_PWM_9_BIT || TIMER_1_PHASE_CORRECT_PWM_MODE == TIMER_1_PHASE_CORRECT_PWM_9_BIT)
        OCR1A = (uint16_t)(dutyCycle * 0x01FF);
#elif (TIMER_1_FAST_PWM_MODE == TIMER_1_FAST_PWM_10_BIT || TIMER_1_PHASE_CORRECT_PWM_MODE == TIMER_1_PHASE_CORRECT_PWM_10_BIT)
        OCR1A = (uint16_t)(dutyCycle * 0x03FF);
#elif (TIMER_1_FAST_PWM_MODE == TIMER_1_FAST_PWM_TOP_ICR1 || TIMER_1_PHASE_CORRECT_PWM_MODE == TIMER_1_PHASE_CORRECT_PWM_TOP_ICR1)
        OCR1A = (uint16_t)(dutyCycle * TIMER_1_PWM_TOP_ICR1_VALUE);
#elif (TIMER_1_FAST_PWM_MODE == TIMER_1_FAST_PWM_TOP_OCR1A || TIMER_1_PHASE_CORRECT_PWM_MODE == TIMER_1_PHASE_CORRECT_PWM_TOP_OCR1A)
        OCR1A = (uint16_t)(dutyCycle * 65535);
#endif
        break;
      case OC_1B:
#if (TIMER_1_FAST_PWM_MODE == TIMER_1_FAST_PWM_8_BIT || TIMER_1_PHASE_CORRECT_PWM_MODE == TIMER_1_PHASE_CORRECT_PWM_8_BIT)
        OCR1B = (uint16_t)(dutyCycle * 0x00FF);
#elif (TIMER_1_FAST_PWM_MODE == TIMER_1_FAST_PWM_9_BIT || TIMER_1_PHASE_CORRECT_PWM_MODE == TIMER_1_PHASE_CORRECT_PWM_9_BIT)
        OCR1B = (uint16_t)(dutyCycle * 0x01FF);
#elif (TIMER_1_FAST_PWM_MODE == TIMER_1_FAST_PWM_10_BIT || TIMER_1_PHASE_CORRECT_PWM_MODE == TIMER_1_PHASE_CORRECT_PWM_10_BIT)
        OCR1B = (uint16_t)(dutyCycle * 0x03FF);
#elif (TIMER_1_FAST_PWM_MODE == TIMER_1_FAST_PWM_TOP_ICR1 || TIMER_1_PHASE_CORRECT_PWM_MODE == TIMER_1_PHASE_CORRECT_PWM_TOP_ICR1)
        OCR1B = (uint16_t)(dutyCycle * TIMER_1_PWM_TOP_ICR1_VALUE);
#elif (TIMER_1_FAST_PWM_MODE == TIMER_1_FAST_PWM_TOP_OCR1A || TIMER_1_PHASE_CORRECT_PWM_MODE == TIMER_1_PHASE_CORRECT_PWM_TOP_OCR1A)
        OCR1B = (uint16_t)(dutyCycle * 65535);
#endif
        break;
      case OC_2:
        OCR2 = (u8)(dutyCycle * 255);
        break;
    }
  }