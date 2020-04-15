import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  lat : string = '40.712776';
  lon : string = '-74.005974';

  weatherReport : any = {};

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
    .subscribe(result =>{
      console.log(result);
      
    })

  }



}
