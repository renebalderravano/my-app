import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { PublicationService } from '../publication.service';
import { Publication } from '../publication.model';
@Component({
  selector: 'app-create-publication',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-publication.component.html',
  styleUrl: './create-publication.component.css'
})
export class CreatePublicationComponent {

  publicationService: PublicationService = inject(PublicationService);

  public publicationForm = new FormGroup({
    id: new FormControl(),
    carName: new FormControl(''),
    price: new FormControl(),
    agency: new FormControl(''),
    location: new FormControl(''),
    photo: new FormControl(''),
    availableUnits: new FormControl(0)
  });

  constructor(private location: Location) {
    console.log(this.location.getState());

    let data = this.location.getState() as Publication;

    if (typeof data !== 'undefined' && data.hasOwnProperty('id')) {
      this.publicationForm.get('id')?.setValue(data.id);
      this.publicationForm.get('carName')?.setValue(data.carName);
      this.publicationForm.get('price')?.setValue(data.price);
      this.publicationForm.get('agency')?.setValue(data.agency);
      this.publicationForm.get('location')?.setValue(data.location);
      this.publicationForm.get('photo')?.setValue(data.photo);
      this.publicationForm.get('availableUnits')?.setValue(data.availableUnits);
    }
  }
  onSubmit() {

    this.publicationService.savePublication(this.publicationForm.value).subscribe(
      res => {

        this.publicationForm.reset();
        console.log('Guardado con id: ' + res.id)

        alert('Tu publicación ha sido guardada exitosamente.')
      },
      error => {
        console.error(error.message)
      }
    )
    console.warn(this.publicationForm.value);
  }

}
