import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
 <div>
   <label>Enter Keg Name:</label>
   <input #newName>
 </div>
 <div>
   <label>Enter Keg Brand:</label>
   <input #newBrand>
 </div>
 <div>
  <label>Keg Price:</label>
  <select #newPrice>
    <option [value]="4"> $4.00 </option>
    <option [value]="5"> $5.00 </option>
    <option [value]="6"> $6.00 </option>
    <option [value]="7"> $7.00 </option>
  </select>
  <div>
    <label>Enter Alcohol Content %:</label>
    <input #newAlcohol>
  </div>
  <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcohol.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcohol.value='';">Add</button>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcohol: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcohol);
    this.newKegSender.emit(newKegToAdd);
  }
}
