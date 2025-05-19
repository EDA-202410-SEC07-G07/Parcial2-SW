import { Component, OnInit } from '@angular/core';
import { Aerolinea } from '../aerolinea';

@Component({
  selector: 'app-aerolinea-list1',
  templateUrl: './aerolinea-list1.component.html',
  styleUrls: ['./aerolinea-list1.component.css']
})
export class AerolineaList1Component implements OnInit {
  aerolineas: Array<Aerolinea> = []; 

  constructor() { }

  ngOnInit() {
  }

}
