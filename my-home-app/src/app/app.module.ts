import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountContentsComponent } from './account-contents/account-contents.component';
import { AccountContentsFormComponent } from './account-contents-form/account-contents-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountContentsComponent,
    AccountContentsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
