import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(vacation, params) {
      this.sendAction('update', vacation, params);
    },
    delete(vacation) {
      if (confirm('Are you sure you want to delete this vacation blog post?')) {
        this.sendAction('destroyVacation', vacation);
      }
    }
  }
});
