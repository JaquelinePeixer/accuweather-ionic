import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AccuweatherService {

  public teste: any = {
    "Headline": {
      "EffectiveDate": "2023-01-12T19:00:00-03:00",
      "EffectiveEpochDate": 1673560800,
      "Severity": 2,
      "Text": "Tempestades, algumas intensas, Quinta-feira ao final do dia",
      "Category": "thunderstorm",
      "EndDate": "2023-01-13T01:00:00-03:00",
      "EndEpochDate": 1673582400,
      "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?lang=pt-br"
    },
    "DailyForecasts": [
      {
        "Date": "2023-01-08T07:00:00-03:00",
        "EpochDate": 1673172000,
        "Temperature": {
          "Minimum": {
            "Value": 66.0,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 83.0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 4,
          "IconPhrase": "Nuvens esparsas",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Pancadas de chuva",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?day=1&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?day=1&lang=pt-br"
      },
      {
        "Date": "2023-01-09T07:00:00-03:00",
        "EpochDate": 1673258400,
        "Temperature": {
          "Minimum": {
            "Value": 64.0,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 85.0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 12,
          "IconPhrase": "Pancadas de chuva",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate"
        },
        "Night": {
          "Icon": 36,
          "IconPhrase": "Nuvens esparsas",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?day=2&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?day=2&lang=pt-br"
      },
      {
        "Date": "2023-01-10T07:00:00-03:00",
        "EpochDate": 1673344800,
        "Temperature": {
          "Minimum": {
            "Value": 70.0,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 87.0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 15,
          "IconPhrase": "Tempestades",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Pancadas de chuva",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Heavy"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?day=3&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?day=3&lang=pt-br"
      },
      {
        "Date": "2023-01-11T07:00:00-03:00",
        "EpochDate": 1673431200,
        "Temperature": {
          "Minimum": {
            "Value": 71.0,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 91.0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 7,
          "IconPhrase": "Nublado",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Heavy"
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Pancadas de chuva",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?day=4&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?day=4&lang=pt-br"
      },
      {
        "Date": "2023-01-12T07:00:00-03:00",
        "EpochDate": 1673517600,
        "Temperature": {
          "Minimum": {
            "Value": 67.0,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 92.0,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 7,
          "IconPhrase": "Nublado",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Heavy"
        },
        "Night": {
          "Icon": 15,
          "IconPhrase": "Tempestades",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Heavy"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?day=5&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?day=5&lang=pt-br"
      }
    ]
  }


  public testeCurr: any = [
    {
      "LocalObservationDateTime": "2023-01-08T06:55:00-03:00",
      "EpochTime": 1673171700,
      "WeatherText": "Sol entre nuvens",
      "WeatherIcon": 4,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": true,
      "Temperature": {
        "Metric": {
          "Value": 17.4,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 63.0,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RealFeelTemperature": {
        "Metric": {
          "Value": 18.9,
          "Unit": "C",
          "UnitType": 17,
          "Phrase": "Agradável"
        },
        "Imperial": {
          "Value": 66.0,
          "Unit": "F",
          "UnitType": 18,
          "Phrase": "Agradável"
        }
      },
      "RealFeelTemperatureShade": {
        "Metric": {
          "Value": 17.9,
          "Unit": "C",
          "UnitType": 17,
          "Phrase": "Agradável"
        },
        "Imperial": {
          "Value": 64.0,
          "Unit": "F",
          "UnitType": 18,
          "Phrase": "Agradável"
        }
      },
      "RelativeHumidity": 94,
      "IndoorRelativeHumidity": 80,
      "DewPoint": {
        "Metric": {
          "Value": 16.5,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 62.0,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Wind": {
        "Direction": {
          "Degrees": 225,
          "Localized": "SO",
          "English": "SW"
        },
        "Speed": {
          "Metric": {
            "Value": 6.4,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Imperial": {
            "Value": 4.0,
            "Unit": "mi/h",
            "UnitType": 9
          }
        }
      },
      "WindGust": {
        "Speed": {
          "Metric": {
            "Value": 16.0,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Imperial": {
            "Value": 10.0,
            "Unit": "mi/h",
            "UnitType": 9
          }
        }
      },
      "UVIndex": 1,
      "UVIndexText": "Mínima",
      "Visibility": {
        "Metric": {
          "Value": 16.1,
          "Unit": "km",
          "UnitType": 6
        },
        "Imperial": {
          "Value": 10.0,
          "Unit": "mi",
          "UnitType": 2
        }
      },
      "ObstructionsToVisibility": "",
      "CloudCover": 51,
      "Ceiling": {
        "Metric": {
          "Value": 9144.0,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 30000.0,
          "Unit": "ft",
          "UnitType": 0
        }
      },
      "Pressure": {
        "Metric": {
          "Value": 1018.0,
          "Unit": "mb",
          "UnitType": 14
        },
        "Imperial": {
          "Value": 30.06,
          "Unit": "inHg",
          "UnitType": 12
        }
      },
      "PressureTendency": {
        "LocalizedText": "Subindo",
        "Code": "R"
      },
      "Past24HourTemperatureDeparture": {
        "Metric": {
          "Value": -0.4,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": -1.0,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "ApparentTemperature": {
        "Metric": {
          "Value": 19.4,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 67.0,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "WindChillTemperature": {
        "Metric": {
          "Value": 17.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 63.0,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "WetBulbTemperature": {
        "Metric": {
          "Value": 16.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 62.0,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Precip1hr": {
        "Metric": {
          "Value": 0.0,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0.0,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "PrecipitationSummary": {
        "Precipitation": {
          "Metric": {
            "Value": 0.0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0.0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "PastHour": {
          "Metric": {
            "Value": 0.0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0.0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past3Hours": {
          "Metric": {
            "Value": 0.0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0.0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past6Hours": {
          "Metric": {
            "Value": 0.0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0.0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past9Hours": {
          "Metric": {
            "Value": 0.0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0.0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past12Hours": {
          "Metric": {
            "Value": 0.0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0.0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past18Hours": {
          "Metric": {
            "Value": 1.0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0.04,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past24Hours": {
          "Metric": {
            "Value": 1.7,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0.06,
            "Unit": "in",
            "UnitType": 1
          }
        }
      },
      "TemperatureSummary": {
        "Past6HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 16.4,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 61.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 17.8,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 64.0,
              "Unit": "F",
              "UnitType": 18
            }
          }
        },
        "Past12HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 16.4,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 61.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 24.4,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 76.0,
              "Unit": "F",
              "UnitType": 18
            }
          }
        },
        "Past24HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 16.4,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 61.0,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 28.1,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 83.0,
              "Unit": "F",
              "UnitType": 18
            }
          }
        }
      },
      "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/current-weather/35954?lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/blumenau/35954/current-weather/35954?lang=pt-br"
    }
  ]


  public teste12hour: any = [
    {
      "DateTime": "2023-01-08T08:00:00-03:00",
      "EpochDateTime": 1673175600,
      "WeatherIcon": 6,
      "IconPhrase": "Predominantemente nublado",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 71.0,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 7,
      "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=8&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=8&lang=pt-br"
    },
    {
      "DateTime": "2023-01-08T09:00:00-03:00",
      "EpochDateTime": 1673179200,
      "WeatherIcon": 4,
      "IconPhrase": "Nuvens esparsas",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 74.0,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 7,
      "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=9&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=9&lang=pt-br"
    },
    {
      "DateTime": "2023-01-08T10:00:00-03:00",
      "EpochDateTime": 1673182800,
      "WeatherIcon": 4,
      "IconPhrase": "Nuvens esparsas",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 77.0,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 7,
      "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=10&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=10&lang=pt-br"
    },
    {
      "DateTime": "2023-01-08T11:00:00-03:00",
      "EpochDateTime": 1673186400,
      "WeatherIcon": 4,
      "IconPhrase": "Nuvens esparsas",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 79.0,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 7,
      "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=11&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=11&lang=pt-br"
    },
    {
      "DateTime": "2023-01-08T12:00:00-03:00",
      "EpochDateTime": 1673190000,
      "WeatherIcon": 6,
      "IconPhrase": "Predominantemente nublado",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 81.0,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 6,
      "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=12&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=12&lang=pt-br"
    },
    {
      "DateTime": "2023-01-08T13:00:00-03:00",
      "EpochDateTime": 1673193600,
      "WeatherIcon": 4,
      "IconPhrase": "Nuvens esparsas",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 82.0,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 5,
      "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=13&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=13&lang=pt-br"
    },
    {
      "DateTime": "2023-01-08T14:00:00-03:00",
      "EpochDateTime": 1673197200,
      "WeatherIcon": 4,
      "IconPhrase": "Nuvens esparsas",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 83.0,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 5,
      "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=14&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=14&lang=pt-br"
    },
    {
      "DateTime": "2023-01-08T15:00:00-03:00",
      "EpochDateTime": 1673200800,
      "WeatherIcon": 4,
      "IconPhrase": "Nuvens esparsas",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 83.0,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 6,
      "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=15&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=15&lang=pt-br"
    },
    {
      "DateTime": "2023-01-08T16:00:00-03:00",
      "EpochDateTime": 1673204400,
      "WeatherIcon": 4,
      "IconPhrase": "Nuvens esparsas",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 81.0,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 7,
      "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=16&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=16&lang=pt-br"
    },
    {
      "DateTime": "2023-01-08T17:00:00-03:00",
      "EpochDateTime": 1673208000,
      "WeatherIcon": 3,
      "IconPhrase": "Parcialmente ensolarado",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 79.0,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 7,
      "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=17&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=17&lang=pt-br"
    },
    {
      "DateTime": "2023-01-08T18:00:00-03:00",
      "EpochDateTime": 1673211600,
      "WeatherIcon": 3,
      "IconPhrase": "Parcialmente ensolarado",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 77.0,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 9,
      "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=18&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=18&lang=pt-br"
    },
    {
      "DateTime": "2023-01-08T19:00:00-03:00",
      "EpochDateTime": 1673215200,
      "WeatherIcon": 7,
      "IconPhrase": "Nublado",
      "HasPrecipitation": false,
      "IsDaylight": true,
      "Temperature": {
        "Value": 75.0,
        "Unit": "F",
        "UnitType": 18
      },
      "PrecipitationProbability": 14,
      "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=19&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/blumenau/35954/hourly-weather-forecast/35954?day=1&hbhhour=19&lang=pt-br"
    }
  ]

  public testeOneDay: any = {
    "Headline": {
      "EffectiveDate": "2023-01-12T19:00:00-03:00",
      "EffectiveEpochDate": 1673560800,
      "Severity": 2,
      "Text": "Tempestades, algumas intensas, Quinta-feira ao final do dia",
      "Category": "thunderstorm",
      "EndDate": "2023-01-13T01:00:00-03:00",
      "EndEpochDate": 1673582400,
      "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?unit=c&lang=pt-br",
      "Link": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?unit=c&lang=pt-br"
    },
    "DailyForecasts": [
      {
        "Date": "2023-01-08T07:00:00-03:00",
        "EpochDate": 1673172000,
        "Sun": {
          "Rise": "2023-01-08T05:31:00-03:00",
          "EpochRise": 1673166660,
          "Set": "2023-01-08T19:15:00-03:00",
          "EpochSet": 1673216100
        },
        "Moon": {
          "Rise": "2023-01-08T20:50:00-03:00",
          "EpochRise": 1673221800,
          "Set": "2023-01-09T07:36:00-03:00",
          "EpochSet": 1673260560,
          "Phase": "WaningGibbous",
          "Age": 16
        },
        "Temperature": {
          "Minimum": {
            "Value": 18.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 28.5,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 17.9,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Agradável"
          },
          "Maximum": {
            "Value": 32.4,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Quente"
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 17.9,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Agradável"
          },
          "Maximum": {
            "Value": 27.7,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Calor"
          }
        },
        "HoursOfSun": 4.7,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0.0,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 6.0,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Boa",
            "CategoryValue": 1,
            "Type": "Ozônio"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Boa",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Boa",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Boa",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Boa",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 8,
            "Category": "Insalubre",
            "CategoryValue": 4
          }
        ],
        "Day": {
          "Icon": 4,
          "IconPhrase": "Nuvens esparsas",
          "HasPrecipitation": false,
          "ShortPhrase": "Sol entre nuvens",
          "LongPhrase": "Sol entre nuvens",
          "PrecipitationProbability": 25,
          "ThunderstormProbability": 0,
          "RainProbability": 25,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 9.3,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 15,
              "Localized": "NNE",
              "English": "NNE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 29.6,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 82,
              "Localized": "L",
              "English": "E"
            }
          },
          "TotalLiquid": {
            "Value": 0.0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0.0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0.0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0.0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0.0,
          "HoursOfRain": 0.0,
          "HoursOfSnow": 0.0,
          "HoursOfIce": 0.0,
          "CloudCover": 67,
          "Evapotranspiration": {
            "Value": 3.8,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 4829.1,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Pancadas de chuva",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light",
          "ShortPhrase": "Possibilidade de pancada de chuva",
          "LongPhrase": "Possibilidade de pancada de chuva",
          "PrecipitationProbability": 40,
          "ThunderstormProbability": 8,
          "RainProbability": 40,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 5.6,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 123,
              "Localized": "SE",
              "English": "ESE"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 24.1,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 91,
              "Localized": "L",
              "English": "E"
            }
          },
          "TotalLiquid": {
            "Value": 0.5,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0.5,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0.0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0.0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 1.0,
          "HoursOfRain": 1.0,
          "HoursOfSnow": 0.0,
          "HoursOfIce": 0.0,
          "CloudCover": 95,
          "Evapotranspiration": {
            "Value": 0.3,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 72.6,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?day=1&unit=c&lang=pt-br",
        "Link": "http://www.accuweather.com/pt/br/blumenau/35954/daily-weather-forecast/35954?day=1&unit=c&lang=pt-br"
      }
    ]
  }

  private API_URL: String = 'http://dataservice.accuweather.com'
  private idApiKey = environment.AccuWeatherApiKey;

  constructor(private http: HttpClient) { }

  searchCity(search: string): Observable<any> {
   // return this.http.get(`${this.API_URL}/locations/v1/cities/search?apikey=${this.idApiKey}&q=${search}&language=pt-br`)

     return of(this.testeSearchCity)
  }

  searchAutocompleteCity(search: string): Observable<any> {
    return this.http.get(`${this.API_URL}/locations/v1/cities/autocomplete?apikey=${this.idApiKey}&q=${search}&language=pt-br`)

    // return of(this.testeSearchCity)
  }

  getCurrentConditions(city: number): Observable<any> {
  //  return this.http.get(`${this.API_URL}/currentconditions/v1/${city}?apikey=${this.idApiKey}&language=pt-br&details=true&metric=true`)

     return of(this.testeCurr)

  }

  getFiveDayConditions(city: number): Observable<any> {
  //  return this.http.get(`${this.API_URL}/forecasts/v1/daily/5day/${city}?apikey=${this.idApiKey}&language=pt-br`)

     return of(this.teste)
  }

  getOneDayConditions(city: number): Observable<any> {
  //  return this.http.get(`${this.API_URL}/forecasts/v1/daily/1day/${city}?apikey=${this.idApiKey}&language=pt-br&details=true&metric=true`)

    return of(this.testeOneDay)
  }



  testeSearchCity: any = [{
    "Version": 1,
    "Key": "41314",
    "Type": "City",
    "Rank": 75,
    "LocalizedName": "Jaguaruna",
    "EnglishName": "Jaguaruna",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "SAM",
      "LocalizedName": "América do Sul",
      "EnglishName": "South America"
    },
    "Country": {
      "ID": "BR",
      "LocalizedName": "Brasil",
      "EnglishName": "Brazil"
    },
    "AdministrativeArea": {
      "ID": "SC",
      "LocalizedName": "Santa Catarina",
      "EnglishName": "Santa Catarina",
      "Level": 1,
      "LocalizedType": "Estado",
      "EnglishType": "State",
      "CountryID": "BR"
    },
    "TimeZone": {
      "Code": "BRT",
      "Name": "America/Sao_Paulo",
      "GmtOffset": -3.0,
      "IsDaylightSaving": false,
      "NextOffsetChange": null
    },
    "GeoPosition": {
      "Latitude": -28.625,
      "Longitude": -49.049,
      "Elevation": {
        "Metric": {
          "Value": 2.0,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 6.0,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Jaguaruna",
        "EnglishName": "Jaguaruna"
      },
      {
        "Level": 3,
        "LocalizedName": "Jaguaruna",
        "EnglishName": "Jaguaruna"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "FutureRadar",
      "MinuteCast",
      "Radar"
    ]
  }]



}