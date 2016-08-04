describe ('thermostat', function() {

var thermostat;

beforeEach(function() {
  thermostat = new Thermostat();
});


  it('has a default temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it('has a minimum temperature of 10 degrees', function() {
    for(var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10)
  });

  describe('buttons', function() {
    it('can increase temperature', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
    it('can decrease temperature', function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });
  });

  describe('Power Saving Mode', function() {
    it('sets maximum temperature to 25 degrees when on', function() {
      thermostat.PSMon();
      for(var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.temperature).toEqual(25)
    });
  });
});
