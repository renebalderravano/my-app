import { Component, inject } from '@angular/core';
import { Publication } from '../publication.model';
import { PublicationService } from '../publication.service';
import { CommonModule } from '@angular/common';
import { PublicationComponent } from '../publication/publication.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, PublicationComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  publicationList: Publication[] = [];
  publicationService: PublicationService = inject(PublicationService);
  filteredpublicationList: Publication[]=[];
  texto ='';
  
  constructor() {
    // this.housingLocationList = this.filteredLocationList=  this.housingService.getAllHousingLocations();
    this.publicationService.getPublication().subscribe(
      (data:any)=>{
        this.publicationList = this.filteredpublicationList= data
      }
    )
    

  }

  filterResults(text: any) {


    // if(text.target.value)
      this.texto = text.target.value

    if (!this.texto) {
      this.filteredpublicationList = this.publicationList;
      return;
    }
  
    this.filteredpublicationList = this.publicationList.filter(
      publication => publication?.agency.toLowerCase().includes(this.texto.toLowerCase())
    );
  }
}
