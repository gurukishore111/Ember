import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductComponent extends Component {
  //   @tracked number = 0;
  //   @action
  //   addNumber() {
  //     return (this.number = this.number + 1);
  //   }
  productImage = this.args.image.colors[0].image;
}
