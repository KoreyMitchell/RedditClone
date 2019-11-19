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
import { Topic } from '../topic/topic.model';

@Component({
  selector: 'app-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.css']
})

export class TopicsViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, public afs: AngularFirestore) { }

  viewTopics: Array<Topic>;

  ngOnInit() {
    this.getTopics();
  }

  async getTopics() {
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

