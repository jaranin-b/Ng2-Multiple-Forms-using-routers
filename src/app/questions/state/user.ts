import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppStore } from './app-store';

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY';
const UPDATE_GENDER = 'UPDATE_GENDER';
const UPDATE_FAV_COLOR = 'UPDATE_FAV_COLOR';
const UPDATE_EDUCATION = 'UPDATE_EDUCATION';
const UPDATE_NUMBER_OF_CARS = 'UPDATE_NUMBER_OF_CARS';

export interface UserProfile {
  firstName: string,
  lastName: string,
  birthday: string,
  gender: string,
  favColor: string,
  education: string,
  numberOfCars,
  currentState: number
}

const initialState = {
  firstName: '',
  lastName: '',
  birthday: '',
  gender: '',
  favColor: '',
  education: '',
  numberOfCars: '',
  currentState: 1
};

export const user = (state: UserProfile = initialState, action: Action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        currentState: state.currentState < 2 ? 2 : state.currentState
      });
    case UPDATE_BIRTHDAY:
      return Object.assign({}, state, {
        birthday: action.payload,
        currentState: state.currentState < 3 ? 3 : state.currentState
      });
    case UPDATE_GENDER:
      return Object.assign({}, state, {
        gender: action.payload,
        currentState: state.currentState < 4 ? 4 : state.currentState
      });
    case UPDATE_FAV_COLOR:
      return Object.assign({}, state, {
        favColor: action.payload,
        currentState: state.currentState < 5 ? 5 : state.currentState
      });
    case UPDATE_EDUCATION:
      return Object.assign({}, state, {
        education: action.payload,
        currentState: state.currentState < 6 ? 6 : state.currentState
      });
    case UPDATE_NUMBER_OF_CARS:
      return Object.assign({}, state, {
        numberOfCars: action.payload,
        currentState: 7
      });
    default:
      return state;
  }
};

@Injectable()
export class UserService {
  constructor(private store: Store<AppStore>) {}
  user$: Observable<UserProfile> = this.store.select('user');

  updateName(user) {
    this.store.dispatch({type: UPDATE_NAME, payload: user});
  }

  updateBirthday(user) {
    this.store.dispatch({type: UPDATE_BIRTHDAY, payload: user});
  }

  updateGender(user) {
    this.store.dispatch({type: UPDATE_GENDER, payload: user});
  }

  updateFavColor(user) {
    this.store.dispatch({type: UPDATE_FAV_COLOR, payload: user});
  }

  updateEducation(user) {
    this.store.dispatch({type: UPDATE_EDUCATION, payload: user});
  }

  updateNumberOfCars(user) {
    this.store.dispatch({type: UPDATE_NUMBER_OF_CARS, payload: user});
  }
}
