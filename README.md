# our-vacations

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Steps for creating the blog:
* $ ember new our-vacations
* $ ember generate route about
* add web content to app/templates/about.hbs
* $ ember g route index
* update index.hbs template with link to about page at app/templates/index.hbs
* open app/routes/index.js and add some hard-coded data to act as our model
* go to app/templates/index.hbs and add helper files called {{#each}}
* generate our first Ember Data model:  $ ember g model vacation
* $ ember install emberfire
* Configure Firebase by going into config/environment.js and add placeholders for apiKey, etc.
* Manually import data to Firebase:
* - create vacations.json in the root directory of our project
* - go to routes/index.js, cut the vacations info and paste it into vacations.json
* import vacations.json to firebase by following their on screen instructions.
* update Firebase permissions to true for read and write
* add Firebase apiKey, etc. data to config/environment.js
* Update the Model hook by going into app/routes/index.js:  return this.store.findAll('vacation')
* Add a component to show the image:  $ ember g component vacation-tile
* Move the contents of the {{#each}} loop on the app/templates/index.hbs into the vacation-tile template (app/templates/components/vacation-tile.hbs).
* In app/templates/index.hbs alter the contents of the code between the <ul></ul> tags with:
   {{#each model as |vacation|}}
    {{vacation-tile vacation=vacation}}
  {{/each}}
* Add functionality to hide and show images for each rental.
* Add stuff from https://www.learnhowtoprogram.com/javascript/ember-js/components-hide-show-image.
* Add a navbar to  templates/application.hbs: using bootstrap navbar as found on w3schools webpage.
* Install bootstrap: $ ember install ember-bootstrap
* $ ember g route contact
* update contact.hbs with contact info
* Add functionality to delete a blog post: https://www.learnhowtoprogram.com/javascript/ember-js/components-delete
* Add functionality to add a blog post:  https://www.learnhowtoprogram.com/javascript/ember-js/components-save
* Add functionality to update a blog post:
https://www.learnhowtoprogram.com/javascript/ember-js/components-update
* Add functionality to add details (comments) to each vacation blog by making each vacation list item on our index a link to a template containing individual vacation details.:
https://www.learnhowtoprogram.com/javascript/ember-js/dynamic-routing-find-record
* $ ember g route vacation
* Add a Dynamic segment to access each vacation Object
* - update app/router.js to show: this.route('rental', {path: '/vacation/:vacation_id'});
* Generate code to display details of each vacation post in it's own page:
* - $ ember g component vacation-detail
* Add vacation.detail to vacations.json, vacation.js, update-vacation.js, update-vacation.hbs and new-vacation.js files to allow a freeform entry of text for details about the vacation.
* Refactor the code:  https://www.learnhowtoprogram.com/javascript/ember-js/dynamic-routing-find-record
* Create a comment Model: https://www.learnhowtoprogram.com/javascript/ember-js/one-route-multiple-models
* - $ ember g model comment
* - define its attributes in app/models/comment.js:
* import DS from 'ember-data';

* export default DS.Model.extend({
  author: DS.attr(),
  rating: DS.attr(),
  content: DS.attr()
* });

* Did this section: Return Multiple Model Types in One Model Hook
* Update app/templates/index.hbs to include the list of comments.
* Add functionality to allow visitors to add a new comment on individual posts - "Creating a new review".
* Implement a relationship between vacations and comments: https://www.learnhowtoprogram.com/javascript/ember-js/model-relationships
* Update vacation and comment models with hasMany keyword
* Refactor new-review component...see lesson referenced above: add      vacation: this.get('vacation') to app/components/new-review.js and
* 


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd our-vacations`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
