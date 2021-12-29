import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { StoreItem } from '../interfaces/store-item';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiStoreUrl = 'https://localhost:44384/Items/StoreData/'
  private apiItemUrl = 'https://localhost:44384/api/CartItemModels/'

  constructor(private http:HttpClient) { }

  getAllItems(): Observable<StoreItem[]> {
    return this.http.get<StoreItem[]>(this.apiStoreUrl);
  }

  getItemData(number: number): Observable<StoreItem[]> {
    return this.http.get<StoreItem[]>(`${this.apiStoreUrl}${number}`);
  }

}
