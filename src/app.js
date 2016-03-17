require('babel-polyfill');
const React = require('react');
const render = require('react-dom').render;
const Provider = require('react-redux').Provider;

const Application = require('./application');

const Store = require('./store')();

render(
    // ... and to provide our Redux store to our Root component as a prop so that Redux
    // Provider can do its job.
    <Provider store={ Store }>
        <Application />
    </Provider>, document.getElementById('main')
)




