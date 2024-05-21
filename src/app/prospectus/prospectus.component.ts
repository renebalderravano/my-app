import { Component, OnInit, inject } from '@angular/core';
import { CustomerService } from '../customer.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prospectus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prospectus.component.html',
  styleUrl: './prospectus.component.css'
})
export class ProspectusComponent implements OnInit {




  customerService: CustomerService = inject(CustomerService);

  customerList: any[] = []


  ngOnInit(): void {

    this.customerService.getAllCustomers().subscribe(
      res => {
        this.customerList = res
        
        console.log(this.customerList)
      },
      error => {

      }
    )

  }

  
  constructor(private router: Router){

  }


  verCliente(customer: any){
    this.router.navigate(['/customer'],{state: customer})
  }
}

