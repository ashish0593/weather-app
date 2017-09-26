const request = require('request');

var getWeather = (lat, lng , callback) => {
  request({
    url: `https://api.darksky.net/forecast/eb5adb47a7bfc06a424038e2940d01e0/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }

  });
};

module.exports = {
  getWeather
}
