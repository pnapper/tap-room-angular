import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Tap List for {{month}}/{{day}}/{{year}}</h1>
      <h3>{{currentFocus}}</h3>
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
      <hr>
      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
      <new-keg (newKegSender)="addKeg($event)"></new-keg>
    </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Beers On Tap';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('African Amber', 'Mac and Jacks', 5, 6),
    new Keg('Stella Artois Lager', 'Annheiser Busch', 4, 4),
    new Keg('Black Butte Porter', 'Deschutes', 6, 7),
    new Keg('Jamaican Stout', 'Outlander Brewing', 6, 7),
  ];


 editKeg(clickedKeg) {
  this.selectedKeg = clickedKeg;
 }

 finishedEditing() {
  this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
    console.log(this.masterKegList);
  }
}
