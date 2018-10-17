import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { WeatherComponent } from './weather/weather.component';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
   declarations: [
      AppComponent,
      WeatherComponent,
      ProfileComponent
   ],
   imports: [
      BrowserModule,
      MatCardModule,
      MatIconModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
