import { Component, input, Input, OnInit } from '@angular/core';
import { Person } from '../../types';

@Component({
  selector: 'app-profile-info',
  imports: [],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css'
})
export class ProfileInfoComponent implements OnInit {
  @Input() person: Person = {
    name: "",
    profilePictureUrl: "",
    age: 0,
    bio: "",
    birthday: "",
    interests: [],
  }
   constructor() {}

   ngOnInit(): void {
   }

   displayDetails(name: string, age: number): void {
      alert(`${name} is ${age} years old`);
   }
}
