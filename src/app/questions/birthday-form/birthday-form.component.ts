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
  calendarIcon = require('../../assets/image/calendar-icon.svg');
  isShowCalendar = false;

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
      console.log(d);
      user.birthday = birthday;
    }

    this.form = this.fb.group({
      birthday: [user.birthday, Validators.required]
    });
  }

  next() {
    let birthday = this.form.value.birthday;
    let date = birthday.toString();
    //let dateJs = new Date(date['year'], date['month'] == 0 ? 0 : date['month'] - 1, date['day']);

    sessionStorage.setItem('birthday', date);

    this.userService.updateBirthday(date);
    this.router.navigate(['/question', 3]);
  }

  back() {
    this.router.navigate(['/question', 1]);
  }

  toggleCalendar(){
    this.isShowCalendar = !this.isShowCalendar;
  }

}

