import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';

var stuff = [{name: 'Title', content: 'Content'}];

ReactDOM.render(<Accordion data={stuff} />, document.getElementById('accordion'));
