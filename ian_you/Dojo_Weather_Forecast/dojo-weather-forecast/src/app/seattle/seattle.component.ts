import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

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
