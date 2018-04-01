import { Address } from './../models/address';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  address = new Address();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert("Thanks for submitting! Data = " + JSON.stringify(this.address));
  }

}
