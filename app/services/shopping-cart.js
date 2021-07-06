import Service from '@ember/service';

export default class ShoppingCartService extends Service {
  itemList = [];

  addItem(item) {
    this.itemList = [...this.itemList, item];
    console.log(this.itemList);
  }
}
