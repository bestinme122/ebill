import { Component, OnInit } from '@angular/core';
import { Shop } from './shop';
import { ShopService } from './shop.service';

@Component({
  selector: 'shop-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let shop of shops">
        {{shop.id}} :{{shop.name}} 
    </li>
  </ul>
  `
})
export class ShopListComponent implements OnInit{
  shops: Shop[] = [];
  constructor(private _shopService : ShopService){ }

  ngOnInit(){
    this.shops = this._shopService.getAll();
  }

}
