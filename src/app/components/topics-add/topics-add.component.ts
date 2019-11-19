import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-topics-add',
  templateUrl: './topics-add.component.html',
  styleUrls: ['./topics-add.component.css']
})
export class TopicsAddComponent implements OnInit {

  constructor(private route: ActivatedRoute, public afs: AngularFirestore, public auth: AuthService) { }

  ngOnInit() { }

  createSubreddit() {
    let subTitle: string;

    subTitle = (<HTMLInputElement>document.getElementById('subTitle')).value;

    let goodFormat = true;

    if (subTitle === null || subTitle === undefined) {
      alert('Enter a topic title');
      goodFormat = false;
    } else {
      this.afs.collection('subreddits').add(subTitle);
      history.back();
    }
  }

  close() {
    history.back();
  }

}
