import { Component, OnInit } from '@angular/core';
// import { FirebaseService } from '../firebase.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {
  items: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.items = db.collection('articles', ref => ref.orderBy('createTime', 'desc')).valueChanges();
  }

  ngOnInit() {
    // this.items = this.firebaseService.db.collection('articles').valueChanges();
    console.log(this.items);
  }
}
