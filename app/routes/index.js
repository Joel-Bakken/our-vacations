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
    },

    update(vacation, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          vacation.set(key,params[key]);
        }
      });
      vacation.save();
      this.transitionTo('index');
    },

    destroyVacation(vacation) {
      vacation.destroyRecord();
      this.transitionTo('index');
    }
  }
});
