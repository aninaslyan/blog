import { Component, Input } from '@angular/core';

import { Post } from '../../../types';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  @Input() posts: Post[];

  constructor() {
  }
}
