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
