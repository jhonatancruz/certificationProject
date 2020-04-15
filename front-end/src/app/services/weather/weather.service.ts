import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  uri = 'http://localhost:3000/weather';

  constructor(
    private http : HttpClient
  ) { }

  getWeather(location){
    
    const query = '?lat=' + location.lat + '&lon=' + location.lon;
    return this.http.get(this.uri + query);
  }
}
