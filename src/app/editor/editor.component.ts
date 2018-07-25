import { Component, OnInit } from '@angular/core';
import Quill from 'quill';
import Article from '../article';
import { ArticleService } from '../article.service';
// import firebase from 'firebase';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass']
})
export class EditorComponent implements OnInit {
  article: Article;
  // variables
  constructor(private service: ArticleService) {}
  ngOnInit() {
    const editor = new Quill('#editor', {
      modules: { toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']                                         // remove formatting button
      ]},
      theme: 'snow',
    });
    this.article.author = ''; // todo: implement current user;
    editor.on('text-change', () => {
      this.article.context = editor.container.firstChild.innerHTML;
    });
  }
  save(): void {
    console.log(this.article);
    // this.service.saveArticle(this.article);
  }
}
