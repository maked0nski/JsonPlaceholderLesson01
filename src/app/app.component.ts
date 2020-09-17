import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserService} from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JsonPlaceholderLesson01';
  users: any[];

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(value =>
      this.users = value
    );
  }
}
