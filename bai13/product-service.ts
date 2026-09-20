import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsImage = [
    {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"bai13/assets/coca.jpg"},
    {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"bai13/assets/pepsi.png"},
    {"ProductId":"p3","ProductName":"Sting","Price":200,"Image":"bai13/assets/sting.webp"},
  ];

  constructor() { }

  getProductsWithImages()
  {
    return this.productsImage;
  }

  getProductDetail(id:any){
    return this.productsImage.find(x=>x.ProductId==id);
  }
}