import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddFormComponent } from 'src/app/screen1/add-form/add-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactListComponent } from './screen1/contact-list/contact-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar'
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ContactRoutingModule } from './contact.routing';
import { Screen1Component } from './screen1/screen1.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';





@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ViewContactComponent,
    Screen1Component,
    AddFormComponent,
    PagenotfoundComponent
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    ContactRoutingModule,
    RouterModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
