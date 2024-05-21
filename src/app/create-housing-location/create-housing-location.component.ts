import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HousingService } from '../housing.service';
import { error } from 'console';
import { Location } from '@angular/common';
import { HousingLocation } from '../housinglocation';
@Component({
  selector: 'app-create-housing-location',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-housing-location.component.html',
  styleUrl: './create-housing-location.component.css'
})
export class CreateHousingLocationComponent {

  housingService: HousingService = inject(HousingService);

  public profileForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    photo: new FormControl(''),
    availableUnits: new FormControl(0),
    wifi: new FormControl(false),
    laundry: new FormControl(false),
  });

  constructor(private location: Location) {
    console.log(this.location.getState());

    let data = this.location.getState() as HousingLocation;

    if (typeof data !== 'undefined' && data.hasOwnProperty('id')) {
      this.profileForm.get('id')?.setValue(data.id);
      this.profileForm.get('name')?.setValue(data.name);
      this.profileForm.get('city')?.setValue(data.city);
      this.profileForm.get('state')?.setValue(data.state);
      this.profileForm.get('photo')?.setValue(data.photo);
      this.profileForm.get('availableUnits')?.setValue(data.availableUnits);
      this.profileForm.get('wifi')?.setValue(data.wifi);
      this.profileForm.get('laundry')?.setValue(data.laundry);
    }
  }
  onSubmit() {

    this.housingService.saveHousingLocation(this.profileForm.value).subscribe(
      res => {

        this.profileForm.reset();
        console.log('Guardado con id: ' + res.id)
      },
      error => {
        console.error(error.message)
      }
    )
    console.warn(this.profileForm.value);
  }

}
