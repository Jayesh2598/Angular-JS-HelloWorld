import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl;
  url;
  userName: string = "";

  ngOnInit(): void {
    this.title = 'Hello from Bridgelabz';
    this.imgUrl = '../assets/BL_logo_square_jpg.jpg';
    this.url = 'https://www.bridgelabz.com';
  }

  onClick($event) {
    console.log("Save button is clicked!", $event);
    window.open(this.url);
  }
}
