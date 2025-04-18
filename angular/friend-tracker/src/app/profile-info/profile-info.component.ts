import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  imports: [],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css'
})
export class ProfileInfoComponent {
  @Input() name = "";
  @Input() profilePictureUrl = "";
  @Input() age = 0;
  @Input() bio = "I like to play video games and I am passionate about computers and coding.";
  @Input() birthday = "February 27, 1993";
  @Input() interests: string[] = [];
}
