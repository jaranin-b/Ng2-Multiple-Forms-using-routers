import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {UserService, UserProfile} from "../state/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-number-of-cars-form',
  templateUrl: './number-of-cars-form.component.html',
  styleUrls: ['../questions.component.css']
})
export class NumberOfCarsFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  )
  {
  }

  ngOnInit() {
    this.userService.user$
      .subscribe(user => {
        this.initForm(user);
        this.handleFormChanges();
      });
  }

  initForm(user: UserProfile) {
    this.form = this.fb.group({
      numberOfCars: [user.numberOfCars, [Validators.required, Validators.pattern("\\d+")]],
    });
  }

  handleFormChanges() {
  }

  next() {
    console.log(this.form.value);
    sessionStorage.setItem('numberOfCars', this.form.value.numberOfCars);
    this.userService.updateNumberOfCars(this.form.value.numberOfCars);
    this.router.navigate(['/question', 7]);
  }

  back() {
    this.router.navigate(['/question', 5]);
  }

}
