import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = '讓我說說';
  constructor() {}
  ngInit() {
    // document.getElementById('main').style.backgroundImage = './assets/45-degree-fabric-light.png';
  }
}

