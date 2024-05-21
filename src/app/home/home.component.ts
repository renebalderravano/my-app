import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { Publication } from '../publication.model';
import { PublicationService } from '../publication.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule,
    HousingLocationComponent],
  template: `
     <section>
    <form>
      <input type="text" placeholder="Filtrar por agencia" #filter (keyup)="filterResults($event)">
      <button class="primary" type="button" (click)="filterResults(filter.value)">Buscar</button>&nbsp;
      <a href="/create"><button class="primary" type="button" >Agregar venta</button></a>
      &nbsp;
      <a href="/createpublication"><button class="primary" type="button" >Agregar publicación</button></a>
      &nbsp;
      <a href="/seguimiento"><button class="primary" type="button" >Seguimiento</button></a>
    </form>
  </section>
  <section class="results">
  <app-housing-location  *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  texto=''

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[]=[];

  publicationList: Publication[] = [];
  publicationService: PublicationService = inject(PublicationService);
  filteredpublicationList: Publication[]=[];
  
  constructor() {
    // this.housingLocationList = this.filteredLocationList=  this.housingService.getAllHousingLocations();
    this.housingService.getAllHousingLocations().subscribe(
      (data:any)=>{
        this.housingLocationList = this.filteredLocationList= data
      }
    )
    

  }

  filterResults(text: any) {


    // if(text.target.value)
      this.texto = text.target.value

    if (!this.texto) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(this.texto.toLowerCase())
    );
  }
}