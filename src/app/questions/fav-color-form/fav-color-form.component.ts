import { Component, OnInit } from '@angular/core';
import {UserProfile, UserService} from "../state/user";
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fav-color-form',
  templateUrl: './fav-color-form.component.html',
  styleUrls: ['../questions.component.css']
})
export class FavColorFormComponent implements OnInit {
  colors  = [
    'Red', 'Green', 'Blue'
  ];

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
        this.handleFormChanges();
      });
  }

  initForm(user: UserProfile) {
    this.form = this.fb.group({
      favColor: [user.favColor, Validators.required],
    });
  }

  handleFormChanges() {
  }

  next() {
    console.log(this.form);
    sessionStorage.setItem('favColor', this.form.value.favColor);
    this.userService.updateFavColor(this.form.value.favColor);
    this.router.navigate(['/question', 5]);
  }

  back() {
    this.router.navigate(['/question', 3]);
  }

}
