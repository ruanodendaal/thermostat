$( document ).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $( "#temperature-up" ).click(function( event ) {
    thermostat.up();
    updateTemperature();
  });

  $( "#temperature-down" ).click(function( event ) {
    thermostat.down();
    updateTemperature();
  });

  $( "#temperature-reset" ).click(function( event ) {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $( '#powersaving-on' ).hide();

  $( "#powersaving-off" ).click(function( event ) {
    $( this ).hide();
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('OFF');
    updateTemperature();
    $( "#powersaving-on" ).show( );
  });

  $( "#powersaving-on" ).click(function( event ) {
    $( this ).hide();
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('ON');
    updateTemperature();
    $( "#powersaving-off" ).show( );
  });


  function updateTemperature() {
    $('#temperature').text(thermostat._temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }


});
