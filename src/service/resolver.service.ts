import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";

import {catchError, Observable, of} from "rxjs";
import {HousingService} from "./housing.service";


@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {
  constructor(private product: HousingService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log('Called Get Product in resolver...', route);
    return this.product.getProducts().pipe(
      catchError(error => {
        return of('No data');
      })
    );
  }




}
