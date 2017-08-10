import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      vacations: this.store.findAll('vacation'),
      comments: this.store.findAll('comment')
    });
  },

  actions: {
    saveVacation3(params) {
      var newVacation = this.store.createRecord('vacation', params);
      newVacation.save();
      this.transitionTo('index');
    }
  }
});
