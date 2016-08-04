function Thermostat() {
  this.temperature = 20
  this.MINIMUM_TEMPERATURE = 10
  this.PSMON_MAX_TEMPERATURE = 25
  this.PSMOFF_MAX_TEMPERATURE = 32
  this.PSMON = true
}



Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return
  }
  this.temperature++;
}

Thermostat.prototype.down = function() {
  if (this.temperature === this.MINIMUM_TEMPERATURE) {
    return
  }
  this.temperature--;
}

Thermostat.prototype.psmon = function() {
  this.PSMON = true;
}

Thermostat.prototype.psmoff = function() {
  this.PSMON = false;
}

Thermostat.prototype.getCurrentTemp = function() {
  return this.temperature;
}

Thermostat.prototype.isMaximumTemperature = function() {
if(this.PSMON === false) {
  return this.temperature === this.PSMOFF_MAX_TEMPERATURE;
  }
  return this.temperature === this.PSMON_MAX_TEMPERATURE;
}
