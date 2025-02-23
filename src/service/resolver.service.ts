import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ResolverService {

  constructor() { }
  resolve(route: ActivatedRouteSnapshot): String {
    console.log('Called Get Product in resolver...', route);
    return 'pippoMagico'
  }
}
