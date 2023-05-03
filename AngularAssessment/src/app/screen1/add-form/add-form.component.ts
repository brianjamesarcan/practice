import { Component, OnInit, EventEmitter, Output, OnChanges, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from '../../model/contact.model';
import { ContactService } from '../../contact.service';
import { Subscription, interval } from 'rxjs';





@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit, OnChanges {
  add: FormGroup;
  subs: Subscription;
  OutputList: ContactModel[] = [];
  id: string;
  editMode = false;
  EditForm: FormGroup;
  EditModel: ContactModel[] = [];


  constructor(private contactdata: ContactService) { }

  @Output() OnAddEvent = new EventEmitter<any>();
  @Input() InputEdit: string;


  ngOnInit(): void {
    this.add = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'contact': new FormControl(null, [Validators.required, Validators.pattern("[0-9]{11}")])
    })
  }


  ngOnChanges(): void {
    if (this.InputEdit != null) {
      this.editMode = true;
      this.contactdata.GetDataIDFromFB(this.InputEdit).subscribe(updates => {
        this.EditModel = updates
        this.add = new FormGroup({
          'name': new FormControl(this.EditModel[0].name, [Validators.required,]),
          'email': new FormControl(this.EditModel[0].email, [Validators.required, Validators.email]),
          'contact': new FormControl(this.EditModel[0].contact, [Validators.required, Validators.pattern("[0-9 ]{11}")])
        })
      })
    }

  }

  AddFunction() {
    if (this.editMode == false) {
      const AddModel = new ContactModel
        (this.add.value.name,
          this.add.value.contact,
          this.add.value.email,
        )
      //to add data to DB
      this.contactdata.AddContactToFB(AddModel)
    }
    else {
      const AddModel = new ContactModel
        (this.add.value.name,
          this.add.value.contact,
          this.add.value.email,
          this.InputEdit)
      this.contactdata.UpdateDatatoFB(AddModel);
      this.editMode = false;
    }

    this.subs = interval(1000).subscribe(count => {
      this.contactdata.GetContactFromFB()
        .subscribe(Response => {
          this.OutputList = Response
          this.OnAddEvent.emit(this.OutputList);
        })
      this.subs.unsubscribe();
    })
    this.add.reset();
  }


}



