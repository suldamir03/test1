import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PostListComponent} from "./component/postlist/postlist.component";
import {RouterModule} from "@angular/router";
import {PostAddComponent} from "./component/postlist/post-add.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {PostDetailsComponent} from "./component/postlist/post-details.component";
import {PostUpdateComponent} from "./component/postlist/post-update.component";
import {ProfileComponent} from "./component/user/profile.component";

@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    PostListComponent,
    PostAddComponent,
    PostUpdateComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,


     RouterModule.forRoot([
       {path: 'posts', component: PostListComponent},
       {path: '', redirectTo: 'posts', pathMatch: "full"},
       {path: 'posts/:id', component: PostDetailsComponent},
       { path: 'posts/edit/:id', component: PostUpdateComponent},
       { path: 'users/:id', component: ProfileComponent}


     ]),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
