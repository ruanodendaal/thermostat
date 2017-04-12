console.log('Thermostat Spec requried')

'use strict';
describe('Thermostat', function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
    thermostat.resetTemperature();
  });

  it('thermostat starts at 20deg', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('increase temperature', function() {
    it('can increase the temperature', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
  });

  describe('decrease temperature', function () {
    it('can decrease the temperature', function (){
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('has a minimum of 10 degrees limit', function (){
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  describe('Power saving mode', function() {
    it('starts as on', function() {
      expect(thermostat.isPowerSavingModeOn()).toBeTruthy();
    });

    it('can be turned off', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBeFalsy();
    });

    it('can be turned back on', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBeFalsy();
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBeTruthy();
    });
  });

  describe('When power saving mode is on', function() {
    it('the maximum temperature is 25 degrees', function(){
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('When power saving mode is off', function() {
    it('the maximum temperature is 32 degrees', function(){
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('Reset temperature', function() {
    it('can reset to 20', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });


  describe('Energy usage', function () {
    it("should return 'low-usage' when temperature < 18 degrees", function (){
      for (var i = 0; i < 5; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it("should return 'medium-usage' when temperature < 25 degrees", function (){
      thermostat.resetTemperature();
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it("should return 'high-usage' when temperature > 25 degrees", function (){
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
