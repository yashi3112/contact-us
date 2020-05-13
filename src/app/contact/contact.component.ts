import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.contactForm= new FormGroup({
      firstName:new FormControl('ABc',[Validators.required]),
      lastName:new FormControl('xyz',[Validators.required])
    });
  } 

  onSubmit()
  {
    console.log(this.contactForm.value);
  }

}
