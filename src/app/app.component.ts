import { Component } from '@angular/core';
import { IHotel } from './models/hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hotel: IHotel = {
    id: 0,
    title: 'Universal Cabana',
    address: 'Orlando',
    description: 'Best one!',
    phone: '+3242353434',
    picture: 'assets/mainhotel.jpg',
    photos: [
      'assets/images/example.png',
      'assets/images/example2.png'
    ],
    weather:  {
      temperature: 12,
      wind: 11,
      icon: 'sun'
    },
    profile: {
      followers: 112,
      following: 11,
      photo: 'assets/images/b1.jpg'
    },
    stars: 3
  };
}
