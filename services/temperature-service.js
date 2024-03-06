// IMPORTS
import { DEFAULT_TEMPERATURE, UNITS } from '../constants';

export function getOppositUnit(unit) {
  return unit === UNITS.celcius ? UNITS.farenheit : UNITS.celcius;
}

export function convertTemperature(temperatureCelsius, setTemperatureFahrenheit, setTemperatureCelsius) {
  const convertedTemperature = (temperatureCelsius * 9/5) + 32;
  setTemperatureFahrenheit(convertedTemperature.toString());
  setTemperatureCelsius(DEFAULT_TEMPERATURE);
}