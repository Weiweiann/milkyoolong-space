import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import Article from './article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private db: AngularFirestore) { }

  saveArticle(article: Article): void {
    article.createTime = Date.now();
    this.db.collection('articles').add(article);
  }

  editArticle(article: Article): void {
    article.updateTime = Date.now();
  }

  deleteArticle(article: Article): void {
    //
  }

  // getArticles(): Article[] {
  // }

  // getArticle(id: number): Article {}
}
