import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/Post";

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent {

  @Input()
  post: Post

  constructor() {

  }

}
