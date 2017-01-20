import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {UserService, UserProfile} from "../state/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['../questions.component.css']
})
export class EducationFormComponent implements OnInit {

  educationOptions  = [
    {id: 1, name: 'Primary School'},
    {id: 2, name: 'Secondary School'},
    {id: 3, name: 'Bachelor degree'},
    {id: 4, name: 'Master degree'}
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
      });
  }

  initForm(user: UserProfile) {
    let education = JSON.parse(sessionStorage.getItem('education'));
    console.log(education);

    if(education != undefined) {
      user.education = education;
    }

    console.log(user.education);

    this.form = this.fb.group({
      education: [user.education, Validators.required],
    });
   // this.form.controls['education'].value = user.education;
    console.log(this.form);
  }

  next() {
    console.log(this.form);
    sessionStorage.setItem('education', JSON.stringify(this.form.value.education));
    this.userService.updateEducation(this.form.value.education);
    this.router.navigate(['/question', 6]);
  }

  back() {
    this.router.navigate(['/question', 4]);
  }

  onSelectEducation() {
    console.log('select');
  }
}
