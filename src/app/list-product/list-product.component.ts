import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})


export class ListProductComponent implements OnInit {
  public title: String;
  public list:Product[];
  public maxPrice:number;
  constructor() {
  }
  ngOnInit(): void {
    this.title = 'MyStore App'

    this.list=
      [
      {
        id: 12,
        name: 'T-shirt 1',
        description: 'moche t-shirt',
        nbrLike: 3,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28xa-eeLwQKEjfo7KwgWmw0-mAhMfb7u7vQ&usqp=CAU',
        quantity: 5,
        price:12

      },
      {
        id: 16,
        name: 'T-shirt 2',
        description: 'beau t-shirt',
        nbrLike: 8,
        picture: 'https://www.exist.com.tn/69177-large_default/t-shirt-de-sport.jpg?fbclid=IwAR1mC8Nyxq2fS7W_TmcbPw4Hx_HtEW2uoWfL7GpXqnoL-9oBNpzzb2gNVPA',
        quantity: 20,
        price:69

      }
      ]


  }


  incrementLike(product :Product) :void{
    let i = this.list.indexOf(product);
    if (i!=-1){
      this.list[i].nbrLike++;

    }

  }
  decrementquantity(product :Product) :void{
    let i = this.list.indexOf(product);
    if (i!=-1){
      this.list[i].quantity--;

    }

  }


}
