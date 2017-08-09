import DS from 'ember-data';

export default DS.Model.extend({
  traveler: DS.attr(),
  location: DS.attr(),
  image: DS.attr(),
  when: DS.attr()
});
