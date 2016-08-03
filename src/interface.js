$( document ).ready(function() {
  thermostat = new Thermostat();
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
});

function Interface() {
}

updateTemperature = function() {
  $( "#temperature" ).text(function() {
    return thermostat.getCurrentTemperature();
  });
}

updatePowerSaving = function() {
  $( "#power-saving-status" ).text(function() {
    return thermostat.getPowerSavingMode();
  });
}
