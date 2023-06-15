MCU=atmega32
# MCU=avr5
CORE=m32
F_CPU=16000000
# F_CPU=16000000
CC=avr-gcc
OBJCOPY=avr-objcopy
CFLAGS=-Wall -g -Os -mmcu=${MCU} -DF_CPU=${F_CPU} -I.
# CFLAGS=-std=c99 -Wall -g -Os -mmcu=${MCU} -DF_CPU=${F_CPU} -I.
TARGET=BlocklyTemp
SRCS=BlocklyTemp.c

all:
	${CC} ${CFLAGS} -o ${TARGET}.bin ${SRCS}
	${OBJCOPY} -j .text -j .data -O ihex ${TARGET}.bin ${TARGET}.hex
# make flash
	make clean
	
flash: ${TARGET}.hex
	avrdude -c usbasp -p ${CORE} -u -U flash:w:${TARGET}.hex -F -q -P usb
# avrdude -c usbasp -p ${CORE} -u -U flash:w:${TARGET}.hex -F -P usb
# avrdude -p ${MCU} -c usbasp -U flash:w:${TARGET}.hex:i -F -P usb

clean:
	rm ${TARGET}.bin
	rm -f *.bin *.hex *.c

# -----------------------------------------------------------------------------------------------------------------------------------------------------
# avrdude –c usbasp –p m32 –u –U flash:w:io.hex

# -c : Indicates the programmer type. Since we are using the USBasp programmer, argument “usbasp” is mentioned.
# -p : Processor. We are using ATmega32, hence “m32”.
# -u : Disables the default behavior of reading out the fuses three times before programming, then verifying at the end of programming that the fuses have not changed.
# Always use this option. Many times it happens that we forget to switch on the AVR’s +5V power supply, then at the end of programming cycle, avrdude detects inconsistent fuses and tries to reprogram them.
# Since there is no power supply, fuses gets programmed incorrectly and entire microcontroller gets screwed up(means becomes useless). Thus always use this option.
# -U  :  memtype:op:filename[:format]
# 	Perform a memory operation. Multiple ‘-U’ options can be speciﬁed in order to operate on multiple memories on the same command-line invocation.
# op The op ﬁeld speciﬁes what operation to perform

# avr-gcc -Os -DF_CPU=8000000 -mmcu=attiny85 -c led_flash.c
# avr-gcc -DF_CPU=8000000 -mmcu=attiny85 -o led_flash.elf led_flash.o
# avr-objcopy -O ihex led_flash.elf led_flash.hex
# rm led_flash.o