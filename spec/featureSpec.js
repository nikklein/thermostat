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
      thermostat.powerSavingMode('on');
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
      thermostat.powerSavingMode('off');
      for (var i = 0; i < 12; i++) {
        thermostat.up();
      }
      expect( function() {thermostat.up()} ).toThrowError('cannot go above maximum temperature');
    });
  });
});
