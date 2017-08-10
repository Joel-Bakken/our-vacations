import Ember from 'ember';

export default Ember.Component.extend({
  addNewVacation: false,
  actions: {
    vacationFormShow() {
      this.set('addNewVacation', true);
    },
    saveVacation1() {
      var params = {
        traveler: this.get('traveler'),
        location: this.get('location'),
        image: this.get('image'),
        when: this.get('when'),
        detail: this.get('detail')
      };
      this.set('addNewVacation', false);
      this.sendAction('saveVacation2', params);
    }
    }
  }
);
