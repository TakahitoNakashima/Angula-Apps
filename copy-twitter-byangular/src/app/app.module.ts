import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ContentMainComponent } from './main-container/content-main/content-main.component';
import { TweetBoxComponent } from './main-container/content-main/tweet-box/tweet-box.component';
import { StreamContainerComponent } from './main-container/content-main/stream-container/stream-container.component';
import { TweetContents } from './tweet-contents';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainContainerComponent,
    ContentMainComponent,
    TweetBoxComponent,
    StreamContainerComponent
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
