var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://community-open-weather-map.p.rapidapi.com/weather?q=London%252Cuk",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "[your rapidapi key]"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });