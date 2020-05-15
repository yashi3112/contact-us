import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  alertMsg:boolean;
  contactForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required,Validators.pattern('^[0-9]+$')]),
      email: new FormControl('', [Validators.required,Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
      agree: new FormControl('', [this.mustBeChecked])
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.contactForm.reset();
    this.alertMsg=true;
   
  }
  mustBeChecked(control: FormControl): {[key: string]: string} {
    
    if (!control.value) {
      return {mustBeCheckedError: 'Must be checked'};
    }
    return null;
  }
  checkError(fieldName)
  {
    const control= this.contactForm.get(fieldName);
    return control.errors && control.touched; 
  }

}
