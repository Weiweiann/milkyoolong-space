import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.shuttleFly();
  }

  async shuttleFly() {
    const layout = document.getElementById('navbar-layout');
    const shuttle = document.getElementById('space-shuttle');
    let i = 0;
    while (i < 100) {
      shuttle.style.transform = `translate(0, ${i}px)`;
      await this.sleep(1000);
      console.log(i);
      i += 1;
    }
  }

  sleep(msec) {
    reteurn Promise((resolve, reject) => {
      setTimeout(resolve, msec);
    });
  }
}
