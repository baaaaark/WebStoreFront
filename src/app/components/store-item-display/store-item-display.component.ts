import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { StoreItem } from '../../interfaces/store-item';

@Component({
  selector: 'app-store-item-display',
  templateUrl: './store-item-display.component.html',
  styleUrls: ['./store-item-display.component.css']
})
export class StoreItemDisplayComponent implements OnInit {

  title: string = 'Mid Century Furniture';
  items: StoreItem[] = [];
  itemUrl: any = new Object;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getAllItems().subscribe((items) => {
      this.items = items
    })

    for (let item of this.items) {
    this.itemUrl.id = item.id;
    this.itemUrl.address = `/app-single-item-display/${item.id}`
    }
  }

  
}
