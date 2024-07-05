# Weather Web Application

## Table of Contents
Overview
Features
Demo
Technologies Used
Installation
Usage
API Reference
Contributing

## Overview
A simple weather web application that allows users to get the current weather information for any city using HTML, CSS, JavaScript, and an external weather API.

Features
- Displays current weather conditions
- Shows temperature, humidity, wind speed, etc.
- Search functionality for different cities
- Responsive design for mobile and desktop

## Demo
+ You can see a live demo of the application [here](https://prince3255.github.io/Todo/)

## Technologies Used
- HTML
- CSS
- JavaScript
- Weather API

## Installation
To get a local copy up and running follow these simple steps:

1. Clone the repository: git clone https://github.com/Prince3255/Todo.git
2. Open index.html in your web browser:
   * You can simply double-click the index.html file.
   * Alternatively, you can use a live server extension in your code editor (e.g., Live Server in VS Code).

## Usage
1. Open the application in your web browser.
2. Enter the name of a city in the search bar.
3. Click the search button to retrieve weather information for the specified city.

## API Reference
This application uses the Weather API to fetch weather data. You need to sign up for an API key and include it in your JavaScript file:
+ const apiKey = 'YOUR_API_KEY';
+ const cityName = 'Entered_City_Name';
+ const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apikey}`;

## Contributing
Contributions are what make the open-source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

## Fork the Project
- Create your Feature Branch (git checkout -b feature/NewFeature)
- Commit your Changes (git commit -m 'Add some Feature')
- Push to the Branch (git push origin feature/NewFeature)
- Open a Pull Request

## Project Link: 
* https://github.com/Prince3255/Todo
