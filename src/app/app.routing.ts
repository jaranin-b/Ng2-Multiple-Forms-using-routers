import {Routes, RouterModule} from "@angular/router";
import {QuestionsComponent} from "./questions/questions.component";
import {QUESTION_ROUTES} from "./questions/questions.routes";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/question', pathMatch: 'full' },
  { path: 'question', component: QuestionsComponent, children: QUESTION_ROUTES},
  { path: '**', redirectTo: '/question', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
