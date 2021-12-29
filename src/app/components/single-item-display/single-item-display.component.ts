import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { StoreItem } from '../../interfaces/store-item';
import { CartItem } from '../../interfaces/cart-item';

import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
import { isNgTemplate } from '@angular/compiler';
import { StoreItemDisplayComponent } from '../store-item-display/store-item-display.component';
import { single } from 'rxjs';

@Component({
  selector: 'app-single-item-display',
  templateUrl: './single-item-display.component.html',
  styleUrls: ['./single-item-display.component.css']
})
export class SingleItemDisplayComponent implements OnInit {

  singleStoreItem: StoreItem = {} as StoreItem;
  singleCartItem = {} as CartItem;

  constructor(private apiService: ApiService, private route:ActivatedRoute) {   }

  ngOnInit(): void {
    
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('id'));

  this.apiService.getItemData(productIdFromRoute).subscribe((singleStoreItem) => {
    
    this.singleStoreItem.id = singleStoreItem[1].id;
    console.log(this.singleStoreItem)

    })
  }
}
