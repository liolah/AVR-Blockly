#include "motor_driver.h"

void Motor_driver_init() {
  DIO_port_init(MOTOR_DRIVER_MODULE_PORT, OUT);
  }

void Motor_on(uint8_t motorNumber, uint8_t direction) {
  switch (motorNumber) {
      case 0:
        switch (direction) {
            case LEFT:
              DIO_pin_write(0, MOTOR_DRIVER_MODULE_PORT, HIGH);
              DIO_pin_write(1, MOTOR_DRIVER_MODULE_PORT, LOW);
              break;
            case RIGHT:
              DIO_pin_write(0, MOTOR_DRIVER_MODULE_PORT, LOW);
              DIO_pin_write(1, MOTOR_DRIVER_MODULE_PORT, HIGH);
              break;
          }
        break;
      case 1:
        switch (direction) {
            case LEFT:
              DIO_pin_write(2, MOTOR_DRIVER_MODULE_PORT, HIGH);
              DIO_pin_write(3, MOTOR_DRIVER_MODULE_PORT, LOW);
              break;
            case RIGHT:
              DIO_pin_write(2, MOTOR_DRIVER_MODULE_PORT, LOW);
              DIO_pin_write(3, MOTOR_DRIVER_MODULE_PORT, HIGH);
              break;
          }
        break;
    }
  }

void Motor_off(uint8_t motorNumber) {
  switch (motorNumber) {
      case 0:
        DIO_pin_write(0, MOTOR_DRIVER_MODULE_PORT, LOW);
        DIO_pin_write(1, MOTOR_DRIVER_MODULE_PORT, LOW);
        break;
      case 1:
        DIO_pin_write(2, MOTOR_DRIVER_MODULE_PORT, LOW);
        DIO_pin_write(3, MOTOR_DRIVER_MODULE_PORT, LOW);
        break;
    }
  }

void Servo_init(uint8_t servoNumber) {
  PWM_init(OC_1A, (SERVO_MIN_HIGH_PULSE_DURATION_mS / SERVO_PULSE_PERIODIC_TIME_mS), PWM_PHASE_CORRECT);
  }

void Servo_move_to_angle(uint8_t angle) {
  PWM_set_DC(OC_1A, ((double)angle / ((SERVO_MAX_ANGLE - SERVO_MIN_ANGLE) * (SERVO_PULSE_PERIODIC_TIME_mS / (SERVO_MAX_HIGH_PULSE_DURATION_mS - SERVO_MIN_HIGH_PULSE_DURATION_mS)))) + (SERVO_MIN_HIGH_PULSE_DURATION_mS / SERVO_PULSE_PERIODIC_TIME_mS));
  }
