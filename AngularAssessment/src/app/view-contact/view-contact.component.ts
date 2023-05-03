import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contact: {id:string, name: string, email: string, contact:string}


  constructor(private route: ActivatedRoute){}
  

  ngOnInit():void{
    this.contact = {
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name'],
      contact:this.route.snapshot.params['contact'],
      email:this.route.snapshot.params['email'],
      
      
    };
  }
  
}
