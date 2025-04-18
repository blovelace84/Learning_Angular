import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileInfoComponent } from "./profile-info/profile-info.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'friend-tracker';
  personName = "Alyssa Wise";
}
