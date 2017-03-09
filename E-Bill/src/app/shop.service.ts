import { Shop } from './shop';

export class ShopService{
  getAll() : Shop[] {
    return [
      {id: 1, name: 'Vitaly'},
      {id: 2, name: 'Bun cha Obama'},
      {id: 3, name: 'Viet Phuong'}
    ];
  }

}
