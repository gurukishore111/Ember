import EmberRouter from '@ember/routing/router';
import config from 'shopping-cart/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('clothes', function () {
    this.route('t-shirt');
  });
  //dynamic url route
  this.route('item', { path: '/item/:item_id' });
  //not founded page
  this.route('not-found', { path: '/*path' });
});
