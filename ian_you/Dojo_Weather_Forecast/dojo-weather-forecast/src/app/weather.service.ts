import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(city) {
    console.log(city)

    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=eb8a71db801d261de75955d61a18f5c2`)
    .map(data=>data.json()).toPromise();
  }
}
