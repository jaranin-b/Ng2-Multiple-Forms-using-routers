import {Routes} from "@angular/router";
import {NameFormComponent} from "./name-form/name-form.component";
import {BirthdayFormComponent} from "./birthday-form/birthday-form.component";
import {GenderFormComponent} from "./gender-form/gender-form.component";
import {FavColorFormComponent} from "./fav-color-form/fav-color-form.component";
import {EducationFormComponent} from "./education-form/education-form.component";
import {SummaryPageComponent} from "./summary-page/summary-page.component";
import {NumberOfCarsFormComponent} from "./number-of-cars-form/number-of-cars-form.component";

export const QUESTION_ROUTES: Routes = [
  { path: '', component: NameFormComponent },
  { path: '1', component: NameFormComponent },
  { path: '2', component: BirthdayFormComponent },
  { path: '3', component: GenderFormComponent },
  { path: '4', component: FavColorFormComponent },
  { path: '5', component: EducationFormComponent },
  { path: '6', component: NumberOfCarsFormComponent },
  { path: 'summary', component: SummaryPageComponent },
];
