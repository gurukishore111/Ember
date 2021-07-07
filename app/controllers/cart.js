import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  //   subTotal = 0;
  //   tax = 0;
  //   total = 0;
  @service('shoppingCart') cart;

  get subTotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }

  get tax() {
    return 0.08 * this.subTotal;
  }

  get total() {
    return this.subTotal + this.tax;
  }

  @action
  updateItemCount(item, event) {
    const count = parseInt(event.target.value);
    console.log(item, event, count);
    if (count >= 0) {
      item.count = count;
    } else {
      item.count = 0;
    }
  }
}
