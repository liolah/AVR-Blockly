#ifndef MOTOR_DRIVER_MODULE_H_
#define MOTOR_DRIVER_MODULE_H_

#include "../../MCAL/DIO/dio.h"
#include "../../MCAL/PWM/pwm.h"

#ifndef MOTOR_DRIVER_MODULE_PORT
#define MOTOR_DRIVER_MODULE_PORT PORT_D
#endif

#ifndef MOTOR_DRIVER_MODULE_PINS_SHIFT
#define MOTOR_DRIVER_MODULE_PINS_SHIFT 0
#endif

#define SERVO_PULSE_PERIODIC_TIME_mS 20.0 

#define SERVO_MIN_HIGH_PULSE_DURATION_mS  0.5
#define SERVO_MAX_HIGH_PULSE_DURATION_mS  2.5

#define SERVO_MIN_ANGLE  0.0
#define SERVO_MAX_ANGLE  180.0

#define LEFT  0
#define RIGHT 1

void Motor_driver_init();

void Motor_on(uint8_t motorNumber, uint8_t direction);

void Motor_off(uint8_t motorNumber);

void Servo_init(uint8_t servoNumber);

void Servo_move_to_angle(uint8_t dc);

#endif /* MOTOR_DRIVER_MODULE_H_ */