"use strict";

const thunk = require('redux-thunk');
const createLogger = require('redux-logger');

const { createStore, applyMiddleware, combineReducers } = require('redux');
module.exports = (reducers) => {
	const rootReducers = combineReducers(reducers);
	const createStoreWithMiddleware = applyMiddleware(thunk, createLogger())(createStore);
	return createStoreWithMiddleware(rootReducers);
};