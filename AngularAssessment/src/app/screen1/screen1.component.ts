import { Component } from '@angular/core';
import { ContactModel } from '../model/contact.model';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component {
 ContactData : ContactModel[] = [];
  user:string;


  OutputAdd(data: ContactModel[]=[]){
    this.ContactData=data;
  }

  OutputEdit(id:string){
    this.user=id;
  }


}
