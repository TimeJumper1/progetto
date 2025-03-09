import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../ObjModel/product";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersComponent {
  products: Product[] | undefined;
  constructor( private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(){
    console.log(
      'Activated route data in Component:::',
      this.activatedRoute.data
    );
    this.activatedRoute.data.subscribe((response: any) => {
      console.log('PRODUCT FETCHING', response);
      this.products = response.products;
      console.log(this.products)
      console.log('PRODUCT FETCHED');

    });
  }

  cannoneGianicolo(){

    return
  }
}
