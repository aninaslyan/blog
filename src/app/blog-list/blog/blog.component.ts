import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import {Post, Posts} from '../../../types';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnChanges {
  @Input() posts: Posts;
  articles: Post[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(this.posts) {
      this.articles = this.posts.articles;
      console.log(this.articles);
    }
  }
}
