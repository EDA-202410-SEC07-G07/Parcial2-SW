import { Component } from '@angular/core';
import { AerolineaList1Component } from "./aerolinea/aerolinea-list1/aerolinea-list1.component";
import { AerolineaList2Component } from './aerolinea/aerolinea-list2/aerolinea-list2.component';
import { AerolineaComponent } from "./aerolinea/aerolinea.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AerolineaList1Component, AerolineaList2Component]
})
export class AppComponent {
  title = 'mynewapp';
}
