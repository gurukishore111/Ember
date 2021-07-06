import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 10 }, { price: 10 }];
    return items;
  }

  //accessing the controller
  //   setupController(controller, model) {
  //     super.setupController(controller, model);
  //     const subtotal = model.reduce((acc, item) => {
  //       return acc + item.price;
  //     }, 0);

  //     controller.set('subTotal', subtotal);
  //   }
}
