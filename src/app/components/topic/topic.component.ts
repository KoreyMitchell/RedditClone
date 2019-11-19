import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreModule,
  AngularFirestoreDocument,
  fromDocRef
} from '@angular/fire/firestore';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})

export class TopicComponent implements OnInit {

  constructor(private route: ActivatedRoute, public afs: AngularFirestore) { }

  viewPosts: Array<Post>;

  ngOnInit() {
    this.getPosts();
  }

  async getPosts() {
    const firestore = firebase.firestore();
    const topics = [];

    const snap = await firestore.collection('subreddits').get();

    snap.forEach(function (val) {
      topics.push(val);
      console.log(val);
    });

    return topics;
  }
}

