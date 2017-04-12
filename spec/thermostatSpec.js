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



});
