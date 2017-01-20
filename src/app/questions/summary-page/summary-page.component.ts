import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {AppStore} from "../state/app-store";
import {UserService, UserProfile} from "../state/user";
import 'rxjs/add/operator/take';

@Component({
  selector: 'summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['../questions.component.css', './summary-page.component.css']
})
export class SummaryPageComponent implements OnInit {

  constructor(
    private store: Store<AppStore>,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/question', 6]);
  }

  submit() {
    // send request to save data
    // implement express to consume this data
    this.store.take(1).subscribe(data => {
      let user = data.user;
      console.log(user);
    });

  }

}
