import { Component } from '@angular/core';
import { Person } from '../types';
import { myProfileData, friendsData } from './data';
import { RouterOutlet } from '@angular/router';
import { ProfileInfoComponent } from './profile-info/profile-info.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myProfileData: Person = myProfileData;
  friendsData: Person[] = friendsData;

  sayHello() {
    alert("Hello my friends!");
  }
}
