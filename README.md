# weather-app
Node Asynchronus Dynamic Weather App

API's used:
Google Geolocation
Dark sky(forecast.io)

This application allows a user to dynamically enter any address and as results provide the current temperature and apparent temperature for that address. Displays the full address also.

How it Works ?
When a user inputs the address, the applications makes an api call to Google API and fetches the data for the lattitude and longitude for the address.
Then the lattitude and longitude returned from the google APi is furthur used to make a api call to Dark Sky API which returns the current temperature and apparent temperature for the provided address.
