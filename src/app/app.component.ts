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
  nameError: string = "";

  ngOnInit(): void {
    this.title = 'Hello from Bridgelabz';
    this.imgUrl = '../assets/BL_logo_square_jpg.jpg';
    this.url = 'https://www.bridgelabz.com';
  }

  onClick($event) {
    console.log("Save button is clicked!", $event);
    window.open(this.url);
  }

  onInput($event) {
    const nameRegex = RegExp("^[A-Z]{1}[A-Za-z\\s]{2,}$");
    if(!(nameRegex.test(this.userName)))
      this.nameError = "Invalid name";
    else
      this.nameError = "";
  }
}
