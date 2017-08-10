import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('vacation');
  },

  actions: {
    saveVacation3(params) {
      var newVacation = this.store.createRecord('vacation', params);
      newVacation.save();
      this.transitionTo('index');
    }
  }
});
