import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

import { Post } from '../../types';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Post[];

  constructor(private postService: PostService) {
  }
// todo make async await
  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.blogs = posts;
      console.log(this.blogs);
    });
  }
}
