import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}
  getForecast(location){
    console.log("Forecast: "+this.http.get('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q='+location+'&appid=446332b5ebeb1425bbe4afd3fc84d288'));
    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q='+location+'&appid=446332b5ebeb1425bbe4afd3fc84d288');
  }  
  getWeather(location){
     
      return this.http.get('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=' + location+ '&appid=446332b5ebeb1425bbe4afd3fc84d288');
   }
    
   
}