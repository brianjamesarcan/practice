import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from './model/contact.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class ContactService {
  ServiceArray:ContactModel[]=[];
  FireBase = 'https://test101-dae15-default-rtdb.firebaseio.com/sample.json';
  startedEditing = new Subject<any>();

  constructor(private http: HttpClient) { }
  public change: EventEmitter<any> = new EventEmitter();

  AddContactToFB(ContactData: ContactModel){
    this.http.post(this.FireBase, ContactData).subscribe();
  }

  //GetAllData
  GetContactFromFB(){
    return this.http.get(this.FireBase)
     .pipe(map (FromFB=>{
         const DBarray: ContactModel[]=[];
         for(const key in FromFB){
             if(FromFB.hasOwnProperty(key)){
              DBarray.push({...FromFB[key], id: key});
             }
         }
         return DBarray;  
     }))
 }
 

 deleteContactToFB(id:string){
  return this.http.delete('https://test101-dae15-default-rtdb.firebaseio.com/sample/'+id+'.json')
 }

//GetDatabyID
 GetDataIDFromFB(id:string){ 
    return this.http.get(this.FireBase)
    .pipe(map (FromFB=>{
        const DBarray=[];
        for(const key in FromFB){
            if(FromFB.hasOwnProperty(key)){
                if(id==key){
             DBarray.push({...FromFB[key], id: key});
                }
            }
        }
        return DBarray;  
    }))
}


UpdateDatatoFB(id:ContactModel){
    this.http.patch('https://test101-dae15-default-rtdb.firebaseio.com/sample/'+id.id+'.json',id).subscribe();
}
public setdata(value) {
    this.change.emit(false);
    }


}
