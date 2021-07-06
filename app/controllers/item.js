import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {
  @tracked color = 'red';

  get ProductImage() {
    return `/asset/image/beats-solo-${this.color}.png`;
  }

  @action
  onChangeColor(newColor) {
    this.color = newColor;
  }
}
