'use strict';

function Thermostat () {
  this.DEFAULT_TEMPERATURE = 20;
  this._temperature = this.DEFAULT_TEMPERATURE;
  this._MINIMUM_TEMPERATURE = 10;
  this._powerSavingMode = true;
  this._MAX_LIMIT_PSM_ON = 25;
  this._MAX_LIMIT_PSM_OFF = 32;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this._temperature++;
};

Thermostat.prototype.isMaximumTemperature = function(){
  if (this.isPowerSavingModeOn()) {
    return this._temperature === this._MAX_LIMIT_PSM_ON;
  } else {
    return this._temperature === this._MAX_LIMIT_PSM_OFF;
  }

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

Thermostat.prototype.resetTemperature = function() {
  this._temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function () {
  return 'low-usage';
};
