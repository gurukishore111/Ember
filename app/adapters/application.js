import RESTAPIAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAPIAdapter {
  namespace = 'api';
  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
