import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../../types';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  @Input() isModalOpened: boolean;
  @Output() modal = new EventEmitter();

  item: Post = {
    urlToImage: '',
    title: '',
    author: '',
    description: '',
    content: '',
    publishedAt: Date()
  };

  constructor() {
  }

  onModalClick() {
    this.isModalOpened = !this.isModalOpened;
    this.modal.emit(this.isModalOpened);
  }
}
