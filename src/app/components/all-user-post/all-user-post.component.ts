import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-all-user-post',
  templateUrl: './all-user-post.component.html',
  styleUrls: ['./all-user-post.component.css']
})
export class AllUserPostComponent {

  posts: Post[];

  constructor(private postService: PostService) {
  this.postService.getAllUserPost().subscribe(value =>
    this.posts = value
  )
  }

}
