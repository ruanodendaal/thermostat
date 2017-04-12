console.log('Thermostat Spec requried')

'use strict';
describe('Thermostat', function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('thermostat starts at 20deg', function() {
    expect(thermostat.temperature).toEqual(20);
  });
});
