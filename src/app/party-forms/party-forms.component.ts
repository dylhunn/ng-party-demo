import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-party-forms',
  templateUrl: './party-forms.component.html',
  styleUrls: ['./party-forms.component.css'],
})
export class PartyFormsComponent implements OnInit {
  public party = new FormGroup({
    address: new FormGroup({
      house: new FormControl(123, { nonNullable: true }),
      street: new FormControl('Powell St', { nonNullable: true }),
    }),
    formal: new FormControl(true),
    foodOptions: new FormArray([new FormControl('Soup')]),
  });

  constructor() {}

  ngOnInit(): void {}

  addMenuItem() {
    this.party.controls.foodOptions.push(new FormControl(''));
  }
}
