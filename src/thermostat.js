'use strict';

function Thermostat () {
  this._temperature = 20;
  this._MINIMUM_TEMPERATURE = 10;
  this._powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function() {
  this._temperature++;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
    this._temperature--;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this._temperature === this._MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this._powerSavingMode;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this._powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this._powerSavingMode = true;
};
