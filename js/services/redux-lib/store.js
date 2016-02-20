const createStore = require('../services/create-store');

const tab = require('../reducers/tab-reducer');
const search = require('../reducers/search-reducer');

module.exports = () => {
	return createStore({
		tab,
		search
	});
};