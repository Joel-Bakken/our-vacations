import Ember from 'ember';

export default Ember.Component.extend({
  updateVacationForm: false,
actions: {
  updateVacationForm() {
    this.set('updateVacationForm', true);
  },
  update(vacation) {
    var params = {
      traveler: this.get('traveler'),
      location: this.get('location'),
      when: this.get('when'),
      image: this.get('image'),
      detail: this.get('detail'),
    };
    this.set('updateVacationForm', false);
    this.sendAction('update', vacation, params);
  }
}
});
