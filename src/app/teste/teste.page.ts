import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {

  newIcon: any = {
    1: "sunny",
    2: "partly-cloudy",
    3: "cloudy",
    4: "cloudy",
    5: "foggy",
    6: "rain",
    7: "storm",
    8: "rain",
    9: "strong-wind",
    10: "strong-wind-sunny",
    11: "snow",
    12: "granizo",
    13: "snow-with-rain",
    14: "hot",
    15: "cold",
    16: "strong-wind",
    17: "clear-moon",
    18: "cloudy-moon",
    19: "rain",
    20: "storm",
    21: "cloudy",
  }

  listImg: any =[]

  constructor() {
    
    for (let i = 1; i < 22; i++) {
      this.listImg.push({
        src : `../assets/category-temperature/${this.newIcon[i]}.png`
      })
    }

   

  }

  ngOnInit() {

  }

}
