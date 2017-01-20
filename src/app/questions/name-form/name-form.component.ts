import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgForm, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserProfile, UserService} from "../state/user";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['../questions.component.css']
})
export class NameFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  private subscription: Subscription;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.userService.user$
      .subscribe(user => {
        this.initForm(user);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initForm(user: UserProfile) {
    let name = JSON.parse(sessionStorage.getItem('name'));

    if(name != undefined) {
      user.firstName = name['firstName'];
      user.lastName = name['lastName'];
    }

    this.form = this.fb.group({
      firstName: [user.firstName, Validators.required],
      lastName: [user.lastName, Validators.required]
    });
    console.log(this.form);
  }

  next() {
    sessionStorage.setItem('name', JSON.stringify(this.form.value));
    this.userService.updateName(this.form.value);
    console.log(this.form.value);
    this.router.navigate(['/question', 2]);
  }

}
