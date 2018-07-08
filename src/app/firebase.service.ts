import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  db: AngularFirestore;

  constructor(db: AngularFirestore) {
    this.db = db;
  }
}
