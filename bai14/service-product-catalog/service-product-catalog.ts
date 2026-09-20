import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-service-product-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-product-catalog.html',
  styleUrl: './service-product-catalog.css'
})
export class ServiceProductCatalogComponent {

  categories: any;

  constructor(private _service: CatalogService) {
    this.categories = _service.getCategories();
  }

}