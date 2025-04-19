import { Component, input, Input } from '@angular/core';
import { Person } from '../../types';

@Component({
  selector: 'app-profile-info',
  imports: [],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css'
})
export class ProfileInfoComponent {
  @Input() person: Person = {
    name: "",
    profilePictureUrl: "",
    age: 0,
    bio: "",
    birthday: "",
    interests: [],
  }
   
}
