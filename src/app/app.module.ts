import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserComponent } from './components/user/user.component';
import {RouterModule} from "@angular/router";
import { AllUserPostComponent } from './components/all-user-post/all-user-post.component';
import {UserPostComponent} from "./components/user-post/user-post.component";

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllUserPostComponent,
    UserPostComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
          {
            path : 'users', component : AllUsersComponent
          },
          {
            path: 'posts' , component: AllUserPostComponent
          }
          ]
        )
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
