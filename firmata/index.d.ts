// Type definitions for firmata.js 0.15
// Project: https: //github.com/firmata/firmata.js
// Definitions by: Troy W. <https: //github.com/troywweber7, https: //bitbucket.org/troywweber/>
// Definitions: https: //github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as SerialPort from 'serialport'

export = Board;

/**
 * Most of these are generated by observing https: //github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js.
 *
 * This is a starting point that appeared to work fine for months within a project of my company, but I give no
 * guarantee that it cannot be improved.
 */
declare class Board extends NodeJS.EventEmitter
{
	constructor(serialPort: string, callback?: (error: any) => void)
	MODES: Board.PinModes;
	STEPPER: Board.StepperConstants;
	I2C_MODES: Board.I2cModes;
	SERIAL_MODES: Board.SerialModes;
	SERIAL_PORT_IDs: Board.SerialPortIds;
	SERIAL_PIN_TYPES: Board.SerialPinTypes;
	HIGH: Board.PIN_STATE;
	LOW: Board.PIN_STATE;
	pins: Board.Pins[];
	ports: number[];
	analogPins: number[];
	version: Board.Version;
	firmware: Board.Firmware;
	settings: Board.Settings;
	protected transport: SerialPort;
	reportVersion(callback: () => void): void
	queryFirmware(callback: () => void): void
	analogRead(pin: number, callback: (value: number) => void): void
	analogWrite(pin: number, value: number): void
	pwmWrite(pin: number, value: number): void
	servoConfig(pin: number, min: number, max: number): void
	servoWrite(pin: number, value: number): void
	pinMode(pin: number, mode: Board.PIN_MODE): void
	digitalWrite(pin: number, val: Board.PIN_STATE): void
	digitalRead(pin: number, callback: (val: Board.PIN_STATE) => void): void
	queryCapabilities(callback: () => void): void
	queryAnalogMapping(callback: () => void): void
	queryPinState(pin: number, callback: () => void): void
	// TODO untested --- TWW
	sendString(str: string): void
	// TODO untested --- TWW
	sendI2CConfig(delay: number): void
	// TODO untested --- TWW
	i2cConfig(options: number|{ delay: number }): void
	// TODO untested --- TWW
	sendI2CWriteRequest(slaveAddress: number, bytes: number[]): void
	// TODO untested --- TWW
	i2cWrite(address: number, register: number, inBytes: number[]): void
	i2cWrite(address: number, data: number[]): void
	// TODO untested --- TWW
	i2cWriteReg(address: number, register: number, byte: number): void
	// TODO untested --- TWW
	sendI2CReadRequest(address: number, numBytes: number, callback: () => void): void
	// TODO untested --- TWW
	i2cRead(address: number, register: number, bytesToRead: number, callback: (data: number[]) => void): void
	i2cRead(address: number, bytesToRead: number, callback: (data: number[]) => void): void
	// TODO untested --- TWW
	i2cStop(options: number|{ bus: number, address: number }): void
	// TODO untested --- TWW
	i2cReadOnce(address: number, register: number, bytesToRead: number, callback: (data: number[]) => void): void
	i2cReadOnce(address: number, bytesToRead: number, callback: (data: number[]) => void): void
	// TODO untested --- TWW
	sendOneWireConfig(pin: number, enableParasiticPower: boolean): void
	// TODO untested --- TWW
	sendOneWireSearch(pin: number, callback: () => void): void
	// TODO untested --- TWW
	sendOneWireAlarmsSearch(pin: number, callback: () => void): void
	// TODO untested --- TWW
	sendOneWireRead(pin: number, device: number, numBytesToRead: number, callback: () => void): void
	// TODO untested --- TWW
	sendOneWireReset(pin: number): void
	// TODO untested --- TWW
	sendOneWireWrite(pin: number, device: number, data: number|number[]): void
	// TODO untested --- TWW
	sendOneWireDelay(pin: number, delay: number): void
	// TODO untested --- TWW
	sendOneWireWriteAndRead(pin: number, device: number, data: number|number[], numBytesToRead: number,
		callback: (error?: Error, data?: number) => void): void
	setSamplingInterval(interval: number): void
	getSamplingInterval(): number
	reportAnalogPin(pin: number, value: Board.REPORTING): void
	reportDigitalPin(pin: number, value: Board.REPORTING): void
	// TODO untested/incomplete --- TWW
	pingRead(opts: any, callback: () => void): void
	stepperConfig(deviceNum: number, type: number, stepsPerRev: number, dirOrMotor1Pin: number,
		stepOrMotor2Pin: number, motor3Pin?: number, motor4Pin?: number): void
	stepperStep(deviceNum: number, direction: Board.STEPPER_DIRECTION, steps: number, speed: number,
		accel: number|((bool?: boolean) => void), decel?: number, callback?: (bool?: boolean) => void): void
	// TODO untested --- TWW
	serialConfig(options: { portId: Board.SERIAL_PORT_ID, baud: number, rxPin?: number, txPin?: number }): void
	// TODO untested --- TWW
	serialWrite(portId: Board.SERIAL_PORT_ID, inBytes: number[]): void
	// TODO untested --- TWW
	serialRead(portId: Board.SERIAL_PORT_ID, maxBytesToRead: number, callback: () => void): void
	// TODO untested --- TWW
	serialStop(portId: Board.SERIAL_PORT_ID): void
	// TODO untested --- TWW
	serialClose(portId: Board.SERIAL_PORT_ID): void
	// TODO untested --- TWW
	serialFlush(portId: Board.SERIAL_PORT_ID): void
	// TODO untested --- TWW
	serialListen(portId: Board.SERIAL_PORT_ID): void
	// TODO untested --- TWW
	sysexResponse(commandByte: number, handler: (data: number[]) => void): void
	// TODO untested --- TWW
	sysexCommand(message: number[]): void
	reset(): void
	static isAcceptablePort(port: Board.Port): boolean
	static requestPort(callback: (error: any, port: Board.Port) => any): void
	// TODO untested --- TWW
	static encode(data: number[]): number[]
	// TODO untested --- TWW
	static decode(data: number[]): number[]
	// TODO untested/incomplete --- TWW
	protected _sendOneWireSearch(type: any, event: any, pin: number, callback: () => void): void
	// TODO untested/incomplete --- TWW
	protected _sendOneWireRequest(pin: number, subcommand: any, device: any, numBytesToRead: any, correlationId: any,
		delay: number, dataToWrite: any, event: any, callback: () => void): void
}

declare namespace Board
{
	export interface PinModes
	{
		INPUT: PIN_MODE, OUTPUT: PIN_MODE, ANALOG: PIN_MODE, PWM: PIN_MODE, SERVO: PIN_MODE, SHIFT: PIN_MODE,
		I2C: PIN_MODE, ONEWIRE: PIN_MODE, STEPPER: PIN_MODE, SERIAL: PIN_MODE, PULLUP: PIN_MODE, IGNORE: PIN_MODE,
		PING_READ: PIN_MODE, UNKOWN: PIN_MODE
	}

	export interface StepperConstants
	{
		TYPE: { DRIVER: STEPPER_TYPE, TWO_WIRE: STEPPER_TYPE, FOUR_WIRE: STEPPER_TYPE },
		RUNSTATE: {
			STOP: STEPPER_RUN_STATE, ACCEL: STEPPER_RUN_STATE, DECEL: STEPPER_RUN_STATE, RUN: STEPPER_RUN_STATE
		},
		DIRECTION: { CCW: STEPPER_DIRECTION, CW: STEPPER_DIRECTION }
	}

	// tslint:disable-next-line interface-name
	export interface I2cModes
	{
		WRITE: I2C_MODE, READ: I2C_MODE, CONTINUOUS_READ: I2C_MODE, STOP_READING: I2C_MODE
	}

	export interface SerialModes
	{
		CONTINUOUS_READ: SERIAL_MODE, STOP_READING: SERIAL_MODE
	}

	export interface SerialPortIds
	{
		HW_SERIAL0: SERIAL_PORT_ID, HW_SERIAL1: SERIAL_PORT_ID, HW_SERIAL2: SERIAL_PORT_ID,
		HW_SERIAL3: SERIAL_PORT_ID, SW_SERIAL0: SERIAL_PORT_ID, SW_SERIAL1: SERIAL_PORT_ID,
		SW_SERIAL2: SERIAL_PORT_ID, SW_SERIAL3: SERIAL_PORT_ID, DEFAULT: SERIAL_PORT_ID,
	}

	export interface SerialPinTypes
	{
		RES_RX0: SERIAL_PIN_TYPE, RES_TX0: SERIAL_PIN_TYPE, RES_RX1: SERIAL_PIN_TYPE, RES_TX1: SERIAL_PIN_TYPE,
		RES_RX2: SERIAL_PIN_TYPE, RES_TX2: SERIAL_PIN_TYPE, RES_RX3: SERIAL_PIN_TYPE, RES_TX3: SERIAL_PIN_TYPE,
	}

	export interface Pins
	{
		mode: PIN_MODE,
		value: PIN_STATE|number,
		supportedModes: PIN_MODE[],
		analogChannel: number,
		report: REPORTING,
		state: PIN_STATE|PULLUP_STATE, // TODO not sure if this exists anymore... --- TWW
	}

	export interface Firmware
	{
		name: string,
		version: Version,
	}

	export interface Settings
	{
		reportVersionTimeout: number,
		samplingInterval: number,
		serialport: {
			baudRate: number,
			bufferSize: number
		}
	}

	export interface Port
	{
		comName: string,
	}

	export interface Version
	{
		major: number,
		minor: number
	}

	// TODO these enums could actually be non-const in the future (provides some benefits) --- TWW
	// https: //github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L449-L464
	export const enum PIN_MODE {
		INPUT = 0x00,
		OUTPUT = 0x01,
		ANALOG = 0x02,
		PWM = 0x03,
		SERVO = 0x04,
		SHIFT = 0x05,
		I2C = 0x06,
		ONEWIRE = 0x07,
		STEPPER = 0x08,
		SERIAL = 0x0A,
		PULLUP = 0x0B,
		IGNORE = 0x7F,
		PING_READ = 0x75,
		UNKNOWN = 0x10,
	}

	export const enum PIN_STATE {
		LOW = 0,
		HIGH = 1
	}

	export const enum REPORTING {
		ON = 1,
		OFF = 0,
	}

	export const enum PULLUP_STATE {
		ENABLED = 1,
		DISABLED = 0,
	}

	// https: //github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L474-L478
	export const enum STEPPER_TYPE {
		DRIVER = 1,
		TWO_WIRE = 2,
		FOUR_WIRE = 4,
	}

	// https: //github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L479-L484
	export const enum STEPPER_RUN_STATE {
		STOP = 0,
		ACCEL = 1,
		DECEL = 2,
		RUN = 3,
	}

	// https: //github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L485-L488
	export const enum STEPPER_DIRECTION {
		CCW = 0,
		CW = 1,
	}

	// https: //github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L466-L471
	export const enum I2C_MODE {
		WRITE = 0,
		READ = 1,
		CONTINUOUS_READ = 2,
		STOP_READING = 3
	}

	// https: //github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L491-L494
	export const enum SERIAL_MODE {
		CONTINUOUS_READ = 0x00,
		STOP_READING = 0x01,
	}

	// https: //github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L497-L512
	export const enum SERIAL_PORT_ID {
		HW_SERIAL0 = 0x00,
		HW_SERIAL1 = 0x01,
		HW_SERIAL2 = 0x02,
		HW_SERIAL3 = 0x03,
		SW_SERIAL0 = 0x08,
		SW_SERIAL1 = 0x09,
		SW_SERIAL2 = 0x10,
		SW_SERIAL3 = 0x11,
		DEFAULT = 0x08,
	}

	// https: //github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L515-L524
	export const enum SERIAL_PIN_TYPE {
		RES_RX0 = 0x00,
		RES_TX0 = 0x01,
		RES_RX1 = 0x02,
		RES_TX1 = 0x03,
		RES_RX2 = 0x04,
		RES_TX2 = 0x05,
		RES_RX3 = 0x06,
		RES_TX3 = 0x07,
	}
}