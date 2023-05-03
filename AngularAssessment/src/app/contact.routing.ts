import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Screen1Component } from './screen1/screen1.component';

const routes: Routes = [
    {path: '', component: Screen1Component, pathMatch: "full"},
    {path: 'Contact/:id/:name/:contact/:email', component: ViewContactComponent},
    {path: '**', pathMatch: 'full', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }