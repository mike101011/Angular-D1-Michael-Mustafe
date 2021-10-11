import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
homeLink:string;
aboutLink:string;
  constructor() {
    this.homeLink="Home";
    this.aboutLink="Learn more";
   }

  ngOnInit(): void {
  }

}
