import { Component, Input } from '@angular/core';
import { IProfile } from './../models/profile';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() public profile: IProfile;
}
