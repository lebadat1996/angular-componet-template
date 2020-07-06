import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string;
  @Output()
  voteSize = new EventEmitter();
  count = 0;

  // tslint:disable-next-line:typedef
  voted() {
    this.count++;
    this.voteSize.emit(this.count);
    // Hàm vote sẽ tăng counter lên 1, đồng thời thông qua EventEmitter bắn value counter này ra component cha
  }

  // @Input() id: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
