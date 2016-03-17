const redux = require('redux');
const thunk = require('redux-thunk');
const exampleReducers = require('./reducers.js');

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

module.exports = function (data) {
    var reducers = redux.combineReducers({
        exampleReducerNamespace: exampleReducers
    });
    var finalCreateStore;
    //If we're in production, don't use the logger middleware
    if (process.env.NODE_ENV != 'production') {
        finalCreateStore = redux.applyMiddleware(logger, thunk)(redux.createStore)
    } else {
        finalCreateStore = redux.applyMiddleware(thunk)(redux.createStore)
    }
    var store = finalCreateStore(reducers, data)
    console.log(store);
    return store
}