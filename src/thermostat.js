'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MAXIMUM_TEMPERATURE = 32;
  this.POWERSAVING_TEMPERATURE = 25;
  this.powerSavingMode('on');
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

Thermostat.prototype.powerSavingMode = function(mode) {
  if ( mode === 'on' ) {
    this.max_temperature = this.POWERSAVING_TEMPERATURE;
  } else {
    this.max_temperature = this.MAXIMUM_TEMPERATURE;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};
