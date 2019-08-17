// Primary location for starting the react side of redux
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//two arguments: the JSX component we want to render and an
// existing DOM node where we want to rendered. This is the client/public/index.html "root" id
ReactDOM.render (<App />, document.querySelector ('#root'));