import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(vacation) {
      if (confirm('Are you sure you want to delete this vacation?')) {
        this.sendAction('destroyVacation', vacation);
      }
    },
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    }
  }
});
