"use strict";

const { bindActionCreators } = require('redux');
const { connect } = require('react-redux');

module.exports = (actions, component) => {
	function mapStateToProps(state) {
		return state;
	}
	function mapDispatchToProps(dispatch) {
		return bindActionCreators(actions, dispatch);
	}
	return connect(mapStateToProps, mapDispatchToProps)(component);
};