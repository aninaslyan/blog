import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  constructor(public firestore: AngularFirestore) {
    // @ts-ignore
    this.posts = this.firestore.collection('posts').valueChanges();
  }

  getPosts() {
    return this.posts;
  }
}
