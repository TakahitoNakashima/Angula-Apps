import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ContentMainComponent } from './main-container/content-main/content-main.component';
import { TweetFormComponent } from './main-container/content-main/tweet-form/tweet-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainContainerComponent,
    ContentMainComponent,
    TweetFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
