import { Component } from '@angular/core';
import { AccuweatherService } from '../_service/accuweather.service';
import { MenuController } from '@ionic/angular';

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

  constructor(
    private apiAccuweather: AccuweatherService,
    private menu: MenuController
  ) {
    this.initialCity('Gaspar')
  }

  initialCity(value: string) {
    this.apiAccuweather.searchCity(value).subscribe(data => {
      this.getInitial(data[0])
    })
  }

  listSearchCity() {
    this.apiAccuweather.searchAutocompleteCity(this.inputCity).subscribe(data => {
      this.listCity = data
    })
  }

  getInitial(item: any) {
    this.dataCity = item;
    this.getCurrentConditions(item.Key);
    this.getFiveDayConditions(item.Key);
    this.getOneDayConditions(item.Key);
    this.menu.close();
  }

  getCurrentConditions(key: number) {
    this.apiAccuweather.getCurrentConditions(key).subscribe(data => {
      this.currentConditions = data[0];
      let icon: string;
      (this.currentConditions.WeatherIcon < 10) ? icon = `0${this.currentConditions.WeatherIcon}` : icon = this.currentConditions.WeatherIcon
      this.currentConditions.newIcon = `https://developer.accuweather.com/sites/default/files/${icon}-s.png`
    })
  }

  getFiveDayConditions(key: number) {
    this.apiAccuweather.getFiveDayConditions(key).subscribe((data: any) => {
      this.dailyForecasts = data.DailyForecasts

      this.dailyForecasts.map((item: any) => {
        let icon: string;
        (item.Day.Icon < 10) ? icon = `0${item.Day.Icon}` : icon = item.Day.Icon

        item.newIcon = `https://developer.accuweather.com/sites/default/files/${icon}-s.png`
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
