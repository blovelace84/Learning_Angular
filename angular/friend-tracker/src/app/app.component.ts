import { Component } from '@angular/core';
import { Person } from '../types';
import { RouterOutlet } from '@angular/router';
import { ProfileInfoComponent } from './profile-info/profile-info.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myPerson = {
    name: 'Brittani Lovelace',
    profilePictureUrl: 'assets/Brittani headshots.jpg',
    age: 32,
    bio: 'I am an aspiring software developer with a passion for learning new skills in tech to grow in the industry.I also enjoy playing video games.',
    birthday: 'February 27, 1993',
    interests: ['Video Games', 'Software Development', 'Learning'],
  }
  
}
