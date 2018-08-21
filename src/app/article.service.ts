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
    article.shortContext = article.context.slice(0, 50).replace(/<[^>*]>/g, '') + '...';
    const flatenArticle = JSON.parse(JSON.stringify(article));
    this.db.collection('articles').add(flatenArticle);
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
