import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './redux';
import RouterApp from './routes';

ReactDOM.render(<Provider store={store}><RouterApp/></Provider>,document.getElementById('app'))
