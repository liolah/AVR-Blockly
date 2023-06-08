#include "adc.h"

// Initialize the ADC
void ADC_init() {
#if (ADC_VREF == AREF)
#elif (ADC_VREF == AVCC)
  ADMUX |= (1 << REFS0);
#elif (ADC_VREF == INTERNAL_VREF)
  ADMUX |= (1 << REFS0) | (1 << REFS1);
#endif
  ADCSRA |= (1 << ADPS0) | (1 << ADPS1) | (1 << ADPS2) | (1 << ADEN);
  }

// Read the input on a channel and passes the value by reference
uint16_t ADC_read(uint8_t channel) {
  ADC_select_channel(channel);
  ADCSRA |= (1 << ADSC);
  while (((ADCSRA >> ADIF) & 1) == 0);
#if READ_WAIT_DURATION_uS
  _delay_us(READ_WAIT_DURATION_uS);
#endif
  return ADC;
  }

// Select an ADC channel to read from
void ADC_select_channel(uint8_t channel) {
  ADMUX = (ADMUX & 0xE0) | channel;
  }