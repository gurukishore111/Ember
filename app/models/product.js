import Model, { attr } from '@ember-data/model';

//Ember data
export default class ProductModel extends Model {
  @attr name;
  @attr description;
  @attr price;
  @attr features;
  @attr colors;
}
