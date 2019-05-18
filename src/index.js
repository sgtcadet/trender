import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Explicit icons*/
import {faCog} from '@fortawesome/free-solid-svg-icons';
import {faFire} from '@fortawesome/free-solid-svg-icons';
//import {faCannabis} from '@fortawesome/free-solid-svg-icons';

import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

library.add(faCog);
library.add(faFire);
//library.add(faCannabis);


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
