import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post } from '../../types';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  constructor(public firestore: AngularFirestore) {
    this.postsCollection = firestore.collection<Post>('posts');

    this.posts = this.postsCollection
      .snapshotChanges()
      .pipe(
        map(changes => changes.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
      );
  }

  getPosts() {
    return this.posts;
  }
}
