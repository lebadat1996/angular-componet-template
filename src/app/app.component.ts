import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comunication';
  parentMessage: 'xin chao con child';
  parenId: 10;
  nameCard = 'Le Ba Dat Dev';
  email = 'lebadat1996ptit@gmail.com';
  phone = '0334403811';
  vote = 0;

  // tslint:disable-next-line:typedef
  voteCount(value) {
    this.vote = value;
  }
}
