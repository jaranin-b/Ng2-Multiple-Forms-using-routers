import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionItemComponent } from './questions/question-list/question-item.component';
import { NameFormComponent } from './questions/name-form/name-form.component';
import {routing} from "./app.routing";
import { BirthdayFormComponent } from './questions/birthday-form/birthday-form.component';
import {MaterialModule} from "@angular/material";
import {UserService, user} from "./questions/state/user";
import {StoreModule} from "@ngrx/store";
import { DatePickerModule } from 'ng2-datepicker';
import { GenderFormComponent } from './questions/gender-form/gender-form.component';
import { FavColorFormComponent } from './questions/fav-color-form/fav-color-form.component';
import { SummaryPageComponent } from './questions/summary-page/summary-page.component';
import { EducationFormComponent } from './questions/education-form/education-form.component';
import { NumberOfCarsFormComponent } from './questions/number-of-cars-form/number-of-cars-form.component';
import {NgbModule, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateThParserFormatter} from "./questions/birthday-form/ngb-date-th-parser-formatter";
import { DatepickerModule} from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionListComponent,
    QuestionItemComponent,
    NameFormComponent,
    BirthdayFormComponent,
    GenderFormComponent,
    FavColorFormComponent,
    SummaryPageComponent,
    EducationFormComponent,
    NumberOfCarsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    StoreModule.provideStore({user}),
    DatePickerModule,
    NgbModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [UserService, {provide: NgbDateParserFormatter, useClass: NgbDateThParserFormatter}],
  bootstrap: [AppComponent]
})
export class AppModule { }
