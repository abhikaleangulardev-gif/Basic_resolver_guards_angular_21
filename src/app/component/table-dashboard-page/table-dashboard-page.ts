import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-dashboard-page',
  imports: [NgStyle],
  templateUrl: './table-dashboard-page.html',
  styleUrl: './table-dashboard-page.css',
})
export class TableDashboardPage implements OnInit{
  myProduct:any[] = [];
  constructor(private ActivedRoute:ActivatedRoute){}

  ngOnInit(): void {
    const myProductDetails = this.ActivedRoute.snapshot.data['productDetails'].products;
    console.log(myProductDetails);
    this.myProduct = myProductDetails;
  }
}
