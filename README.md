Ionic V1 Application Seed
=====================

A starting project for all Ionic V1 projects. Features:

- ES6 / Babel
- Webpack
- ngAnnotate
- SCSS imports
- **Proper component based** application architecture
- Testing harness setup Karma, Webpack, Jasmine, and Sinon

## Using this project

```bash
$ git clone --depth 1 https://github.com/ModusCreateOrg/ionic-seed
$ npm i -g ionic
$ npm i
$ ionic serve
```

## Gotchas
The first time you run `ionic serve`, a browser will open and likely give you
an error, something like `Cannot find www/index.html`. This seems to be due
to the Ionic CLI not waiting until all gulp tasks are complete.

If you wait until Webpack is done, and all gulp tasks are complete, the app
will load. You shouldn't run into this error again.

## Testing
There are 2 gulp tasks available for running tests.

`gulp test`

Will start a Karma server, run tests, and then exit.

`gulp tdd` 

Starts a Karma server in watch mode.


## Issues
This is always a work in progress.

## TODO
- production, minified build step
- examples of ngCordova integration
- examples of Directive tests
- examples of Service tests
