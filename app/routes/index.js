import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;
  async model() {
    const products = await this.store.findAll('product');
    return products;
  }
}
