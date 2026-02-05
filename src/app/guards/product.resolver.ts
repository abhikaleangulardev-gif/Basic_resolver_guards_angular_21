import { inject, Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ProductService } from "../service/product.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class ProductResolver implements Resolve<any> {
    myProductService: ProductService = inject(ProductService);

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.myProductService.getProductList();
    }
}