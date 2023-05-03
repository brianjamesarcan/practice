import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/contact.service';
import { ContactModel } from 'src/app/model/contact.model'
import { Subscription, interval } from 'rxjs';





@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{
  edit: FormGroup;
  ListArray: ContactModel[]=[];
  subs:Subscription;
  ListArrayInput: ContactModel[]=[];
  NoData = 'No Contact Available';
  @Input() InputList: ContactModel[]=[];
  @Output() OnEditEvent = new EventEmitter<string>();




  constructor(private contactdata:ContactService){}

 
  ngOnInit() {
    this.contactdata.GetContactFromFB()
    .subscribe(Response=>{
      this.InputList = Response
    })
    console.log(this.InputList)
    
  }

  DeleteFunction(id:string){
    this.contactdata.deleteContactToFB(id)
    .subscribe(()=>{
      this.InputList=[];
    })
    this.subs=interval(1000).subscribe(count=>{
    this.contactdata.GetContactFromFB()
    .subscribe(Response=>{
      this.InputList = Response
    })
    this.subs.unsubscribe();
  })
  }
  


 editFunction(id:string) {
  this.OnEditEvent.emit(id);
}

 

}



