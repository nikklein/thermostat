$( document ).ready(function() {
  var thermostat = new Thermostat();
  displayWeather('London');

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})

function displayWeather(city) {
 var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 var token = '&appid=1552a9076379cfb9695f961e32767f26';
 var units = '&units=metric';
 $.get(url + token + units, function(data) {
   $('#current-temperature').text(data.main.temp);
 })
}

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
    updateTemperature();

  });
  $( "#powersaving-off" ).click(function() {
    thermostat.switchPowerSavingModeOff();
    updatePowerSaving();
  });
  function updateTemperature() {
    $( "#temperature" ).text(function() {
      return thermostat.getCurrentTemperature();

    });

    $('#div2').attr('class', thermostat.colour());

  }

  function updatePowerSaving() {
    $( "#power-saving-status" ).text(function() {
      return thermostat.getPowerSavingMode();
    });

  }


});
