import Controller from '@ember/controller';

export default class CartController extends Controller {
  //   subTotal = 0;
  //   tax = 0;
  //   total = 0;

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
}
