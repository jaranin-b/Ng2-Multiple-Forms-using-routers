import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppStore} from "../state/app-store";

@Component({
  selector: 'question-item',
  templateUrl: './question-item.component.html',
  styles: [
    `
      md-card.active {
        background-color: darkgray;
        cursor: pointer;
      }
    `
  ]
})
export class QuestionItemComponent implements OnInit {
  @Input() question: any;

  constructor(
    private store: Store<AppStore>,
    private router: Router
  ){}

  ngOnInit() {
  }

}
