import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  city:string;
  hotelName:string;
  hotelNights:number;
  price:string;
  constructor() {
    this.city="City: ";
    this.hotelName="Name: ";
    this.hotelNights=Math.floor(Math.random()*15);
    this.price="Price: ";
   }

  ngOnInit(): void {
  }

}
// let hotel1=new ContentComponent("kingston","Hotel1",50);