import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  imports: [],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css'
})
export class ProfileInfoComponent {
  name = "Brittani Lovelace";
  profilePictureUrl = "assets/Brittani headshots.jpg";
  age = 32;
  bio = "I like to play video games and I am passionate about computers and coding.";
  birthday = "February 27, 1993";
  interests = [
    "Video Games",
    "Coding",
    "Technology(computers)",
  ]
}
