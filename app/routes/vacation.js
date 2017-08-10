import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('vacation', params.vacation_id);
  },
  actions: {
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
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var vacation = params.vacation;
      vacation.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return vacation.save();
      });
      this.transitionTo('vacation', vacation);
    }
  }
});
