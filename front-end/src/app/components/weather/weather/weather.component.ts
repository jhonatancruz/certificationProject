import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  lat : string = localStorage.getItem('lat');
  lon : string = localStorage.getItem('lon');

  name : string = '';
  temp : string = '';
  feels_like : string = '';
  temp_min : string = '';
  temp_max : string = '';
  humidity : string = '';


  constructor(
    private weatherService : WeatherService,
    private locationService : LocationService
  ) { }

  ngOnInit(): void {
    this.loadWeatherReport()
  } 

  getLocation()
  {
    this.locationService.getPosition()
    .then(pos=>
      {
         console.log(`Positon: ${pos.lon} ${pos.lat}`);

         this.lat = pos.lat;
         this.lon = pos.lon;
         localStorage.setItem('lat',this.lat)
         localStorage.setItem('lon',this.lon)
      })
      .then(() => {
        this.loadWeatherReport()
      })
  }

  loadWeatherReport(){
    let location = {
      lat : this.lat,
      lon : this.lon
    }

    this.weatherService.getWeather(location)
    .subscribe((result : any) =>{
      console.log(result);
      console.log('weather ' + result.main.temp);
      console.log('weather ' + result.name);

      this.name = result.name;
      this.temp = result.main.temp;
      this.feels_like = result.main.feels_like;
      this.temp_min = result.main.temp_min;
      this.temp_max = result.main.temp_max;
      this.humidity = result.main.humidity;
      
    })

  }



}
