import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { CommonModule, CurrencyPipe, Location } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CurrencyPipe],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {


  @Input('publication') publication: any;

  customerForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    cellphone: new FormControl(''),
    email: new FormControl(),
    publication: new FormControl()
  });
  customerService: CustomerService = inject(CustomerService);

  isEdit: boolean = false;

  constructor(private location: Location) {
    console.log(this.location.getState());


    let data = this.location.getState() as any;

    if (typeof data !== 'undefined' && data.hasOwnProperty('id'))  {
        this.isEdit = true
        this.customerForm.get('id')?.setValue(data.id);
        this.customerForm.get('name')?.setValue(data.name);
        this.customerForm.get('city')?.setValue(data.city);
        this.customerForm.get('state')?.setValue(data.state);
        this.customerForm.get('cellphone')?.setValue(data.cellphone);
        this.customerForm.get('email')?.setValue(data.email);
        this.customerForm.get('publication')?.setValue(data.publication);
      }



  }
  onSubmit() {
    this.customerForm.get('publication')?.setValue(this.publication)

    this.customerService.saveCustomer(this.customerForm.value).subscribe(
      res => {

        this.customerForm.reset();
        console.log('Guardado con id: ' + res.id)
        alert('Guardado Exitosamente')
      },
      error => {
        console.error(error.message)
      }
    )
    console.warn(this.customerForm.value);
  }

}
