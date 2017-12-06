import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div>
        <div *ngIf="childSelectedKeg">
          <h3>{{childSelectedKeg.name}}</h3>
          <p>Pints Remaining = {{childSelectedKeg.pints}} pints</p>
          <hr>
          <h3>Edit Keg</h3>
          <label>Enter Keg Name:</label>
          <input [(ngModel)]="childSelectedKeg.name">
          <label>Enter Keg Brand:</label>
          <input [(ngModel)]="childSelectedKeg.brand">
          <label>Enter Keg Price (1-3):</label><br>
          <input type="radio" [(ngModel)]="childSelectedKeg.price" [value]="4">4.00<br>
          <input type="radio" [(ngModel)]="childSelectedKeg.price" [value]="5">5.00<br>
          <input type="radio" [(ngModel)]="childSelectedKeg.price" [value]="6">6.00<br>
          <input type="radio" [(ngModel)]="childSelectedKeg.price" [value]="7">7.00
          <label>Enter Alcohol Content %:</label>
          <input [(ngModel)]="childSelectedKeg.alcohol">
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
   this.doneButtonClickedSender.emit();
 }
}
