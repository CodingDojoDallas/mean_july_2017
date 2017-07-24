import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

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
    this.getWeather('Dallas, TX')
  }

}
