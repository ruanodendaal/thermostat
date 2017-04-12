console.log('Thermostat Spec requried')

'use strict';
describe('Thermostat', function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
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
});
