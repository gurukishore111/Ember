import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ItemController extends Controller {
  @tracked color = this.model?.colors[0].color;
  @service('shoppingCart') cart;

  get productImage() {
    return this.model.colors.find(({ color }) => color === this.color)?.image;
  }

  @action
  onChangeColor(newColor) {
    this.color = newColor;
    console.log(this.cart);
  }
}
