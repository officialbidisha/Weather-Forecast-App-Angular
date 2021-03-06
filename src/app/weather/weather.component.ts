import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ApixuService} from '../apixu.service';
import { fromUnixTime, format} from 'date-fns';
import { ThemeService } from "src/app/theme/theme.service";
import {
  faLightbulb as faSolidLightbulb,
  faDollarSign,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb as faRegularLightbulb } from "@fortawesome/free-regular-svg-icons";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData:any;
  public forecastData:any;
  public icon: String="";
  faLightbulb: IconDefinition;
  faDollarSign = faDollarSign;

  constructor(private formBuilder: FormBuilder,private apixuService: ApixuService,private themeService:ThemeService) { 
   
  }
  
  ngOnInit(): void {
    this.setLightbulb();
    this.weatherSearchForm = this.formBuilder.group({
      location: [""],
    });
  }
  setLightbulb() {
    if (this.themeService.isDarkTheme()) {
      this.faLightbulb = faRegularLightbulb;
    } else {
      this.faLightbulb = faSolidLightbulb;
    }
  }

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }

    this.setLightbulb();
  }
  processData(data){
  	console.log(data);
  
    this.multi=[
      {
        "name": "Temperature",
        "series":data.list.map( obj => {
  		return {
  		"name":fromUnixTime(obj.dt+data.city.timezone-this.timezoneOffset),
  		"value":obj.main.temp-273.15,
  		}}
  		)
      },];

  }
  sendToAPIXU(formValues) {
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(response =>{this.weatherData=response;console.log(this.weatherData);
        this.icon="http://openweathermap.org/img/wn/"+this.weatherData.weather[0].icon+".png";
      });//runs parallely with console.log
      
  }
   sendToForecast(formValues){
    this.apixuService
    .getForecast(formValues.location)
    .subscribe(data => {this.processData(data); 
      
     });
   }
   
  timezoneOffset: number = (new Date()).getTimezoneOffset()*60;
  multi: any[];
  view: any[] = [800, 400];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Temperature';
  timeline: boolean = true;

  colorScheme:any = {
    //domain:['--color-scheme']
    domain: [ '#1d67f7','#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
