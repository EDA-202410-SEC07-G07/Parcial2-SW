import { Component, Input, OnInit } from '@angular/core';
import { Aerolinea } from '../aerolinea';

@Component({
  selector: 'app-aerolinea-detail',
  templateUrl: './aerolinea-detail.component.html',
  styleUrls: ['./aerolinea-detail.component.css']
})
export class AerolineaDetailComponent implements OnInit {

  @Input() aerolinea!: Aerolinea; 

  constructor() { }

  ngOnInit() {
  }

}
