// * start app with yarn run dev-server

import React from 'react';
import ReactDOM from 'react-dom';
import PrioritizeApp from './components/PrioritizeApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<PrioritizeApp />, document.getElementById('app'));