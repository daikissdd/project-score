"use strict";

const React = require('react');

const AppComponent = React.createClass({
    render() {	    
		return (
		<div classNameName="content-wrap">
			<nav className="container">
		        <div className="row">
		            <div className="five columns">
		                <a className="navbar-brand navbar-link" href="/">
		                    <strong>Project::Score </strong>
		                    <small style={{fontSize: '12px'}}> 事業の将来性を視覚化</small>
		                </a>
		            </div>
		        </div>
		    </nav>
		    
		    <footer className="container">
		        <div className="row">
					<h6 style={{fontSize: '12px', textAlign: 'center'}}>Project::Score © 2016</h6>
		        </div>
		    </footer>
		</div>
		);
    }
});

module.exports = AppComponent;