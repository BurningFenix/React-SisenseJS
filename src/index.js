import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* 	Import boostrap themes 	*/
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('react-root'));
registerServiceWorker();
