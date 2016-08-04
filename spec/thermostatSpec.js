describe ('thermostat', function() {

var thermostat;

beforeEach(function() {
  thermostat = new Thermostat();
});


  it('has a default temperature of 20 degrees', function() {
    expect(thermostat.getCurrentTemp()).toEqual(20)
  });

  it('has a minimum temperature of 10 degrees', function() {
    for(var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemp()).toEqual(10)
  });

  describe('buttons', function() {
    it('can increase temperature', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemp()).toEqual(21);
    });
    it('can decrease temperature', function() {
      thermostat.down();
      expect(thermostat.getCurrentTemp()).toEqual(19);
    });
  });

  describe('Power Saving Mode', function() {
    it('can be switched off', function() {
      thermostat.psmoff();
      expect(thermostat.PSMON).toBe(false);
    });

    it('can be switched on', function() {
      thermostat.psmon();
      expect(thermostat.PSMON).toBe(true);
    });

    it('sets maximum temperature to 25 degrees when on', function() {
      for(var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(25)
    });

  });
});
