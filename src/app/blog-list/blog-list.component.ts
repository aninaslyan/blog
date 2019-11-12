import { AfterContentChecked, Component, OnInit } from '@angular/core';
import axios from 'axios';

import { apiKey } from '../config';
import { Posts } from '../../types';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Posts;

  constructor() {
  }
  //todo: make some filtering on api call based on from & publishedAt
  getPosts = async function () {
    try {
      const res = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-10-12&sortBy=publishedAt&apiKey=${apiKey}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };

  async ngOnInit() {
    this.blogs = await this.getPosts();
  }
}
