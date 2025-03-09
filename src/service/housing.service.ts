import { Injectable } from '@angular/core';
import { HousingLocation } from './housing.service.spec';
import {Product} from "../app/ObjModel/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'http://localhost:3000/locations';

  constructor(public http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  // async getAllHousingLocations(): Promise<HousingLocation[]> {
  //   const data = await fetch(this.url);
  //   return await data.json() ?? [];
  // }
  //
  // async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
  //   const data = await fetch(`${this.url}/${id}`);
  //   return await data.json() ?? {};
  // }
  //
  // submitApplication(firstName: string, lastName: string, email: string) {
  //   console.log(firstName, lastName, email);
  // }
}
