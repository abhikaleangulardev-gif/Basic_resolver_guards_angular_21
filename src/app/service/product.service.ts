import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    myProductApiUrls: string = 'https://dummyjson.com/products';

    constructor(private http: HttpClient) { }

    getProductList() {
        return this.http.get(this.myProductApiUrls);
    }
}