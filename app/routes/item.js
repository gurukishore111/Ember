import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ItemRoute extends Route {
  @service store;
  async model(params) {
    const { item_id } = params;
    const products = await this.store.findAll('product');
    const product = products.find(({ id }) => id === item_id);
    console.log(product);
    return product;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.colors[0].color;
  }
}
