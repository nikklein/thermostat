'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20
  this.MAXIMUM_TEMPERATURE = 32;
  this.POWERSAVING_TEMPERATURE = 25;
  this.LOWPOWER_TEMPERATURE = 18;
  this.powerSavingMode = true;
  this.max_temperature = this.POWERSAVING_TEMPERATURE
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.up = function() {
  if ( this.temperature === this.max_temperature ) {
    throw new Error('cannot go above maximum temperature');
  }
  this.temperature++;
};

Thermostat.prototype.down = function() {
  if ( this.temperature === 10 ) {
    throw new Error('cannot go below minimum temperature');
  }
  this.temperature--;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
  this.max_temperature = this.MAXIMUM_TEMPERATURE;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  if(this.temperature > this.POWERSAVING_TEMPERATURE) {
    this.temperature = this.POWERSAVING_TEMPERATURE;
  }
  this.powerSavingMode = true;
  this.max_temperature = this.POWERSAVING_TEMPERATURE;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.colour = function() {
  if(this.temperature < this.LOWPOWER_TEMPERATURE) {
    return 'low-usage'
  } else if (this.temperature < this.POWERSAVING_TEMPERATURE) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;

};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode
};

Thermostat.prototype.getPowerSavingMode = function() {
  if (this.isPowerSavingModeOn()) {
    return 'ON'
  } else {
    return 'OFF'
  }
}
