import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AccuweatherService {
  private API_URL: String = 'http://dataservice.accuweather.com'
  private idApiKey = environment.AccuWeatherApiKey
  private language = 'pt-br'

  constructor(private http: HttpClient) { }

  searchCity(search: string): Observable<any> {
    return this.http.get(`${this.API_URL}/locations/v1/cities/search?apikey=${this.idApiKey}&q=${search}&language=${this.language}`)
  }

  searchAutocompleteCity(search: string): Observable<any> {
    return this.http.get(`${this.API_URL}/locations/v1/cities/autocomplete?apikey=${this.idApiKey}&q=${search}&language=${this.language}`)
  }

  getCurrentConditions(city: number): Observable<any> {
    return this.http.get(`${this.API_URL}/currentconditions/v1/${city}?apikey=${this.idApiKey}&language=${this.language}&details=true&metric=true`)
  }

  getFiveDayConditions(city: number): Observable<any> {
    return this.http.get(`${this.API_URL}/forecasts/v1/daily/5day/${city}?apikey=${this.idApiKey}&language=${this.language}`)
  }

  getOneDayConditions(city: number): Observable<any> {
    return this.http.get(`${this.API_URL}/forecasts/v1/daily/1day/${city}?apikey=${this.idApiKey}&language=${this.language}&details=true&metric=true`)
  }

}