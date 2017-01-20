import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {UserService, UserProfile} from "../state/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-birthday-form',
  templateUrl: './birthday-form.component.html',
  styleUrls: ['../questions.component.css']
})
export class BirthdayFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.user$
      .subscribe(user => {
        this.initForm(user);
      });
  }

  initForm(user: UserProfile) {
    let birthday = sessionStorage.getItem('birthday');
    let d = new Date(birthday);

    if(birthday != undefined) {
      user.birthday = d;
    }

    this.form = this.fb.group({
      birthday: [user.birthday, Validators.required]
    });
  }

  next() {
    // set data to session
    let birthday = this.form.value.birthday;
    let date = birthday.toString();
    sessionStorage.setItem('birthday', date);

    this.userService.updateBirthday(date);
    this.router.navigate(['/question', 3]);
  }

  back() {
    this.router.navigate(['/question', 1]);
  }
}

