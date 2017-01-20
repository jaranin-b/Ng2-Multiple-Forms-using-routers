import { Component, OnInit } from '@angular/core';
import {UserService, UserProfile} from "../state/user";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AppStore} from "../state/app-store";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-gender-form',
  templateUrl: './gender-form.component.html',
  styleUrls: ['../questions.component.css']
})
export class GenderFormComponent implements OnInit {
  form: FormGroup;
  private currentState;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AppStore>,
  ) {

    this.store.select('user').subscribe(user=>{
      this.currentState = user['currentState'];
    });

   /* if(this.currentState < 2) {
      console.log(this.currentState);
      this.router.navigate(['/question', this.currentState]);
    }*/
  }

  ngOnInit() {
    this.userService.user$
      .subscribe(user => {
        this.initForm(user);
      });
  }

  initForm(user: UserProfile) {
    let gender = sessionStorage.getItem('gender');

    if(gender != undefined) {
      user.gender = gender;
    }

    this.form = this.fb.group({
      gender: [user.gender, Validators.required]
    });

    console.log(this.form);
  }

  next() {
    sessionStorage.setItem('gender', this.form.value.gender);
    this.userService.updateGender(this.form.value.gender);
    this.router.navigate(['/question', 4]);
  }

  back() {
    this.router.navigate(['/question', 2]);
  }

}


