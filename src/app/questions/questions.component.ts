import {Component, OnInit, OnDestroy} from '@angular/core';
import {UserProfile, UserService} from "./state/user";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-question-page',
  templateUrl: 'questions.component.html',
  styleUrls: ['questions.component.css']
})
export class QuestionsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    let name = JSON.parse(sessionStorage.getItem('name'));
    let gender = sessionStorage.getItem('gender');
    let favColor = sessionStorage.getItem('favColor');
    let education = JSON.parse(sessionStorage.getItem('education'));
    let numberOfCars = sessionStorage.getItem('numberOfCars');
    let birthday = sessionStorage.getItem('birthday');

    if(name != undefined) {
      this.userService.updateName(name);
    }
    if(birthday != undefined) {
      let d = new Date(birthday);
      this.userService.updateBirthday(d);
    }
    if(gender != undefined) {
      this.userService.updateGender(gender);
    }
    if(favColor != undefined) {
      this.userService.updateFavColor(favColor);
    }
    if(education != undefined) {
      this.userService.updateEducation(education);
    }
    if(numberOfCars != undefined) {
      this.userService.updateNumberOfCars(numberOfCars);
    }

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
