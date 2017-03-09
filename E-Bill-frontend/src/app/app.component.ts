import { Component } from '@angular/core';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>  {{title}} </h1>
  <shop-list></shop-list>
  `,
  styleUrls: ['./app.component.less'],
  providers: [ShopService]
})
export class AppComponent {
  title = 'This is E-Bill system. Order billing automatically!';
}
