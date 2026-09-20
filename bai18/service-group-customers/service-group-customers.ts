import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-service-group-customers',
  standalone: false,
  templateUrl: './service-group-customers.html',
  styleUrl: './service-group-customers.css'
})
export class ServiceGroupCustomersComponent {

  customers: any;

  constructor(private _service: CustomerService) {
    this._service.getCustomers().subscribe(data => {
      console.log(data);
      this.customers = data;
    });
  }

}