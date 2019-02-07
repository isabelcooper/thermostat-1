$( document ).ready(function() {
  let thermostat = new Thermostat();

  function refreshData() {
    $('#temperature').text(thermostat.temperature + '\xB0' + 'C');
    $('#energy-usage').text(thermostat.energyUsage());
    $('#energy-usage').attr('class', thermostat.energyUsage());
    $('#temperature').attr('class', thermostat.energyUsage());

    $('#powersaving-on').attr('class', thermostat.powerSavingMode);
    $('#powersaving-off').attr('class', thermostat.powerSavingMode);
  }

  refreshData();

  $( '#up' ).click(function( event ) {
    thermostat.up();
    refreshData();
  })

  $( '#down' ).click(function( event ) {
    thermostat.down();
    refreshData();
  })

  $( '#reset' ).click(function( event ) {
    thermostat.reset();
    refreshData();
  })

  $( '#powersaving-on' ).click(function( event ) {
    thermostat.turnPowerSavingOn();
    refreshData();
  })

  $( '#powersaving-off' ).click(function( event ) {
    thermostat.turnPowerSavingOff();
    refreshData();
  });

  $( '#city-submit' ).submit(function( event ) {
    event.preventDefault();
    var city = $('#new-city').val();
    getWeatherURL(city, (data) => {
      loadWeather(data.main.temp, data.weather[0].main);
    });
  })
});
