'use strict';

describe('Feature Test:', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it ('has default temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20)
  });

  describe('up button', function(){
    it ('increases the temperature', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21)
    });
  });

  describe('down button', function(){
    it ('decreases the temperature', function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19)
    });

    it ('has minimum temperature of 10 degrees', function() {
      for (var i = 0; i < 10; i++) {
        thermostat.down();
      }
      expect( function() {thermostat.down()} ).toThrowError('cannot go below minimum temperature');
    });
  });

  describe('power saving mode on ', function(){
    it ('has a max temp of 25', function() {
      thermostat.switchPowerSavingModeOn();
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect( function() {thermostat.up()} ).toThrowError('cannot go above maximum temperature');
    });
    it ('has a max temp of 25 by default', function() {
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      expect( function() {thermostat.up()} ).toThrowError('cannot go above maximum temperature');
    });
  });

  describe('power saving mode off ', function(){
    it ('has a max temp of 32', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 12; i++) {
        thermostat.up();
      }
      expect( function() {thermostat.up()} ).toThrowError('cannot go above maximum temperature');
    });
  });
  describe('reset button', function(){
    it ('resets temperature to 20', function() {
      for (var i = 0; i < 3; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(23);
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });
  describe('colour', function(){
    it ("is 'green' if temperature less than 18", function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature).toEqual(17);
      expect(thermostat.colour()).toEqual("green");
    });
    it ("is 'yellow' if temperature less than 25", function() {
      expect(thermostat.temperature).toEqual(20);
      expect(thermostat.colour()).toEqual("yellow");
    });
    it ("is 'red' if temperature above or equal 25", function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(26);
      expect(thermostat.colour()).toEqual("red");
    });
  });
});
