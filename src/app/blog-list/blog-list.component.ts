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
  modalIsOpened = false;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(posts => {
        this.blogs = posts;
        console.log(this.blogs);
      });
    // this.blogs = [
    //   {
    //     author: 'Micaela Heck',
    //     content:  'Ramit Sethi, author ofI Will Teach You To Be Rich and professional financial smart person, joins us on The Upgrade this week to talk about how to reframe our approach to spending, the best ways to invest our savings, and how normal people can find a way to ta… [+2241 chars]',
    //     description: 'Ramit Sethi, author of I Will Teach You To Be Rich and professional financial smart person, joins us on The Upgrade this week to talk about how to reframe our approach to spending, the best ways to invest our savings, and how normal people can find a way to t…',
    //     title:  'How to Get Rich, With Personal Finance Expert Ramit Sethi',
    //     publishedAt: '2019-11-11T21:45:00Z',
    //     url: 'https://lifehacker.com/how-to-get-rich-with-personal-finance-expert-ramit-set-1839777384',
    //     urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ffxofqcznqbyvlid5wou.jpg'
    //   }
    // ];
  }
}
