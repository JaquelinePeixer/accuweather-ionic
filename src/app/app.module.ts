import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AccuweatherService } from './_service/accuweather.service';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'md'
    }),
    AppRoutingModule,  
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    AccuweatherService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
