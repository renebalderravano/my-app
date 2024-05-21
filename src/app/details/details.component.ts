
import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { CustomerComponent } from "../customer/customer.component";
import { Publication } from '../publication.model';
import { PublicationService } from '../publication.service';
@Component({
    selector: 'app-details',
    standalone: true,
    templateUrl: './detail.component.html',
    styleUrl: './details.component.css',
    imports: [CustomerComponent, CurrencyPipe]
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  publicationService = inject(PublicationService);
  publication: Publication | undefined;

  constructor() {
    const publicationId = Number(this.route.snapshot.params['id']);

    this.publicationService.getPublicationById(publicationId).subscribe(
      data=>{
        this.publication = data
      }
    );
  }

}