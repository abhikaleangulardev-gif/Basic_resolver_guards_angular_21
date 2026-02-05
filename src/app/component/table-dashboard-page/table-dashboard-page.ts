import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-dashboard-page',
  imports: [NgStyle],
  templateUrl: './table-dashboard-page.html',
  styleUrl: './table-dashboard-page.css',
})
export class TableDashboardPage implements OnInit {
  myProduct: any[] = [];

  // create a pagination
  myPageSize: number = 5;
  currentPage: number = 1;
  constructor(private ActivedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const myProductDetails = this.ActivedRoute.snapshot.data['productDetails'].products;
    console.log(myProductDetails);
    this.myProduct = myProductDetails;
  }

  get paginationProduct() {
    const start = (this.currentPage - 1) * this.myPageSize;
    return this.myProduct.slice(start, start + this.myPageSize);
  }

  get totalPage(){
    return Math.ceil(this.myProduct.length/this.myPageSize);
  }

  changePage(page: number) {
    this.currentPage = page;
  }
}
