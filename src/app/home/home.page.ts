import { Component } from '@angular/core';
import { AccuweatherService } from '../_service/accuweather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  headline: any
  dailyForecasts: any = []
  currentConditions: any = {}
  itemSave: any
  oneDayConditions: any

  inputCity: string = ''
  dataCity: any

  listCity: any

  // Change icon weather
  newIcon: any = {
    1: "sunny",
    2: "sunny",
    3: "sunny",
    4: "sunny",
    5: "partly-cloudy",
    6: "partly-cloudy",
    7: "cloudy",
    8: "cloudy",
    11: "foggy",
    12: "rain",
    13: "rain",
    14: "rain",
    15: "storm",
    16: "storm",
    17: "storm",
    18: "rain",
    19: "strong-wind",
    20: "strong-wind-sunny",
    21: "strong-wind-sunny",
    22: "snow",
    23: "snow",
    24: "snow",
    25: "granizo",
    26: "granizo",
    29: "snow-with-rain",
    30: "hot",
    31: "cold",
    32: "strong-wind",
    33: "clear-moon",
    34: "clear-moon",
    35: "clear-moon",
    36: "clear-moon",
    37: "cloudy-moon",
    38: "cloudy-moon",
    39: "rain",
    40: "rain",
    41: "storm",
    42: "storm",
    43: "cloudy",
    44: "cloudy",
  }

  constructor(private apiAccuweather: AccuweatherService) {
    this.initialCity('Gaspar')
  }

  initialCity(value: string) {
    this.apiAccuweather.searchCity(value).subscribe(data => {
      this.dataCity = data[0]
      this.getInitial(this.dataCity.Key)
    })
  }

  listSearchCity() {
    this.apiAccuweather.searchAutocompleteCity(this.inputCity).subscribe(data => {
      this.listCity = data
    })
  }

  getInitial(key: number) {
    console.log('key initial', key)

    this.getCurrentConditions(key)
    this.getFiveDayConditions(key)
    this.getOneDayConditions(key)

    // fechar modal
  }


  getCurrentConditions(key: number) {
    this.apiAccuweather.getCurrentConditions(key).subscribe(data => {
      this.currentConditions = data[0]
      this.currentConditions.newIcon = `../assets/category-temperature/${this.newIcon[this.currentConditions.WeatherIcon]}.png`
    })
  }

  getFiveDayConditions(key: number) {
    this.apiAccuweather.getFiveDayConditions(key).subscribe((data: any) => {
      // this.headline = data.Headline
      this.dailyForecasts = data.DailyForecasts

      this.dailyForecasts.map((item: any) => {
        item.newIcon = `../assets/category-temperature/${this.newIcon[item.Day.Icon]}.png`
        item.Temperature.Minimum.Value = (item.Temperature.Minimum.Value - 32) / 1.8
        item.Temperature.Minimum.Unit = "ºC"
        item.Temperature.Maximum.Value = (item.Temperature.Maximum.Value - 32) / 1.8
        item.Temperature.Maximum.Unit = "ºC"
      })
    })
  }

  getOneDayConditions(key: number) {
    this.apiAccuweather.getOneDayConditions(key).subscribe((data: any) => {
      this.oneDayConditions = data.DailyForecasts[0]
    })
  }

}
