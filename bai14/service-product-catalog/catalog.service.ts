import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  datas = [
    {
      "Cateid": "cate1",
      "CateName": "nuoc ngot",
      "Products": [
        {
          "ProductId": "p1",
          "ProductName": "Coca",
          "Price": 100,
          "Image": "bai14/assets/coca.jpg"
        },
        {
          "ProductId": "p2",
          "ProductName": "Pepsi",
          "Price": 300,
          "Image": "bai14/assets/pepsi.png"
        },
        {
          "ProductId": "p3",
          "ProductName": "Sting",
          "Price": 200,
          "Image": "bai14/assets/sting.webp"
        }
      ]
    },
    {
      "Cateid": "cate2",
      "CateName": "Bia",
      "Products": [
        {
          "ProductId": "p4",
          "ProductName": "Heleiken",
          "Price": 500,
          "Image": "bai14/assets/heniken.jpg"
        },
        {
          "ProductId": "p5",
          "ProductName": "333",
          "Price": 400,
          "Image": "bai14/assets/bia333.jpg"
        },
        {
          "ProductId": "p6",
          "ProductName": "Sai Gon",
          "Price": 600,
          "Image": "bai14/assets/saigon.jpg"
        }
      ]
    }
  ];

  constructor() { }
  getCategories() {
    return this.datas;
}

}