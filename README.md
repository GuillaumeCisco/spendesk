# Spendesk

This test project uses my own custom opinionated react/redux framework.   
There is a lot of boilerplate files in this project.  
Especially for supporting http2, http stream, SEO, SSR, PWA (serviceWorker), Desktop (electron), code injection under route splitting, Redis cache, TLS support features.  
I did not remove all the unnecessary extra code for not spending too much time on setuping.

The main business code which will interest you can be found in the `src/app` folder and especialy the business logic in `src/app/business/routes/home`

I hope all the extra code won't be too much disturbing.

## About the test

I've implemented all the stories with a few tests but did not implement some edge cases that require more specifications.  
I'm thinking about the "Above" value step.  
When creating a new step, I assign by default the first available approver in the list, this can be changed by clicking on its name.

Some edge cases with the values steps were not implemented. Example: putting on a second step a value inferior from the prior one.   
This would require validation and user warning handling. As we are only saving in local and not on the server I did not implement this not required extra feature. But could be easily implemented wth a simple value check on the input change and the 'Save approval flow' button handling.


Css is very basic, I could have spent more time on it but choose not as specified in the exercise.

## Data structures

I use a redux store for storing the teams, users and approvers.   
When playing with the single application, hit CTRL+H for viewing the devtools panel and see the redux store in action.

I use redux-sagas for fetching the data and handling them thanks to redux-actions.  
A selector is used for merging users in teams in order to work with a better data structure.

Redux-first-router is used for dealing with the routes (although we just work with one here).
Reducers and Sagas injection is supported but not used here.

Emotion is used for working with css in js and css http stream.

## Under the hood

This project uses webpack and many plugins for working with the last ECMAScript proposals.  
A node.js server is used using koa for delivering http streaming. http2 can be enabled in production mode with TLS.

## Installation

This project use yarn and the experimental yarn workspaces for package.json splitting and convenience.

Please install the last version of yarn and run   
`yarn config set workspaces-experimental true`

Then run:  
`yarn install`

For electron, you need to install `libgconf-2-4`

`sudo apt install libgconf-2-4`

For testing and developping on the projet with true hot module replacement, run  
`yarn start`

For testing with prod config:  
`yarn start:prod`

For testing in electron, run:  
`yarn dev`

For packaging for electron:
```
yarn build:electron
yarn build-electron
yarn package-all
```

For building the production website, run:  
```
yarn build:main
```

## Test
Tests run under jest.  
Launch them with:
```
jest
```
