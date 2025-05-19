import { Component, OnInit } from '@angular/core';
import { Aerolinea } from '../aerolinea';
import { AerolineaDetailComponent } from "../aerolinea-detail/aerolinea-detail.component";

@Component({
  selector: 'app-aerolinea-list2',
  templateUrl: './aerolinea-list2.component.html',
  styleUrls: ['./aerolinea-list2.component.css'],
  standalone: true,
  imports: [AerolineaDetailComponent]
})
export class AerolineaList2Component implements OnInit {

  aerolineasO: Array<Aerolinea> = []; 
  selected : boolean = false; 
  selectedAerolinea!: Aerolinea;

  constructor() { }

  onSelected(aerolinea: Aerolinea): void {
    this.selected = true;
    this.selectedAerolinea = aerolinea;
  }

  ngOnInit() {
  }

}
