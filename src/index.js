import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import BlogDashboard from './BlogDashboard';
import * as serviceWorker from './serviceWorker';

// TODO: Modify isAdmin when login functionality implemented
ReactDOM.render(<BlogDashboard isAdmin={true}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
