import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="allKegs" selected="selected">All Kegs</option>
      <option value="kegNotEmpty">Low Kegs</option>
      <option value="kegEmpty">Empty Kegs</option>
    </select>
  <ul>
    <li *ngFor="let currentKeg of childKegList | emptiness:filterByEmptiness">{{currentKeg.name}} {{currentKeg.brand}} {{currentKeg.price}} {{currentKeg.alcohol}} {{currentKeg.pints}}
    <button (click)="soldPints(currentKeg, currentKeg.pints)">Sell Pint</button>

    <button (click)="editButtonHasBeenClicked(currentKeg)">Edit Keg</button></li>
  </ul>
  `
})

export class KegListComponent {

  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByEmptiness: string = "allKegs";

  onChange(optionFromMenu) {
  this.filterByEmptiness = optionFromMenu;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  soldPints(ClickedKeg: Keg, setPint: number) {
    console.log(setPint);
    if(setPint == 0) {
      alert("Keg is Empty");
    } else if (setPint <=10) {
      alert("This Keg is almost empty")
      setPint = setPint -1;
      ClickedKeg.pints = setPint;
    } else {
      setPint = setPint -1;
      ClickedKeg.pints = setPint;
    }
    return ClickedKeg.pints;
  }

  priceColor(currentKeg){
    if (currentKeg.price >= 6){
      return "bg-danger";
    } else if (currentKeg.price === 5) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
