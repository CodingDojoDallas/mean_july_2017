import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  constructor (private _weather: WeatherService){ }

  weather_data = {}
  error_msg : string = ""

  getWeather(city) {
    return this._weather.getWeather(city)
    .then(output => {
      console.log(output)
      this.weather_data = output
    })
    .catch(err => {
      console.log(err)
      this.error_msg = "City is invalid"
    })
  }

  ngOnInit() {
    this.getWeather('Chicago, IL')
  }

}
