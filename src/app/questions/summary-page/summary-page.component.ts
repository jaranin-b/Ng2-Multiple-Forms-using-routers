import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {AppStore} from "../state/app-store";

@Component({
  selector: 'summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['../questions.component.css', './summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {

  constructor(
    private store: Store<AppStore>,
    private router: Router
  ) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/question', 6]);
  }

}
