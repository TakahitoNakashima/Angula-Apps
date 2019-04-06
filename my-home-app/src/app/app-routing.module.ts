import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountContentsComponent } from './account-contents/account-contents.component';

const routes: Routes = [
  { path: 'accountContents', component: AccountContentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
