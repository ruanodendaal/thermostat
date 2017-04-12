'use strict';

function Thermostat () {
  this._temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function() {
  return this._temperature++;
};

Thermostat.prototype.down = function() {
  return this._temperature--;
};
