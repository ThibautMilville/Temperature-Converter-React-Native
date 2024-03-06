// IMPORTS
import { UNITS } from "../constants";

export function getOppositUnit(unit) {
  return unit === UNITS.celcius ? UNITS.farenheit : UNITS.celcius;
}

export function convertTemperature(temperatureCelsius, setTemperatureFahrenheit) {
  const convertedTemperature = (temperatureCelsius * 9) / 5 + 32;
  setTemperatureFahrenheit(convertedTemperature.toString());
}

export function isIceTemperature(unit, value) {
  return unit === UNITS.celcius ? value < 0 : value < 32;
}
