describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });


  it('has default temperature 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });
  it('increases temperature with up button', function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });
  it('decreases temperature with up button', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });
  it('has a minimum temperature of 10 degrees', function(){
    for(i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(function(){ thermostat.down(); }).toThrowError('Minimum temperature reached')
  })

  describe ('Power saving mode', function(){

    it('If power saving mode is on, the maximum temperature is 25 degrees',function(){
      thermostat.powermode('on');
      for(i = 0; i < 5; i++) {
        thermostat.up();
        }
      expect(function(){ thermostat.up(); }).toThrowError('Maximum temperature reached')
    });

    it('If power saving mode is off, the maximum temperature is 32 degrees',function(){
      thermostat.powermode('off');
      for(i = 0; i < 12; i++) {
      thermostat.up();
        }
      expect(function(){ thermostat.up(); }).toThrowError('Maximum temperature reached')
    });
  });
});
