$( document ).ready(function() {
  var thermostat = new Thermostat();

  updateTemperature();
  $( "#temperature-up" ).click(function() {
    thermostat.up();
    updateTemperature();
  });
  $( "#temperature-down" ).click(function() {
    thermostat.down();
    updateTemperature();
  });
  $( "#temperature-reset" ).click(function() {
    thermostat.reset();
    updateTemperature();
  });
  $( "#powersaving-on" ).click(function() {
    thermostat.switchPowerSavingModeOn();
    updatePowerSaving();
  });
  $( "#powersaving-off" ).click(function() {
    thermostat.switchPowerSavingModeOff();
    updatePowerSaving();
  });
  function updateTemperature() {
    $( "#temperature" ).text(function() {
      return thermostat.getCurrentTemperature();
    });
  }

  function updatePowerSaving() {
    $( "#power-saving-status" ).text(function() {
      return thermostat.getPowerSavingMode();
    });
  }

});
