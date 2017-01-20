import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit {
  questions: any[] = [];

  constructor() { }

  ngOnInit() {
    this.questions = [
      {
        id: 1, title: 'title1', desc: 'desc1'
      },
      {
        id: 2, title: 'title2', desc: 'desc2'
      },
      {
        id: 3, title: 'title3', desc: 'desc3'
      },
      {
        id: 4, title: 'title4', desc: 'desc4'
      },
      {
        id: 5, title: 'title5', desc: 'desc5'
      },
      {
        id: 6, title: 'title6', desc: 'desc6'
      }
    ];
  }

}
