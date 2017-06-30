import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import route from './containers/Root';


let store = configureStore();


render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.getElementById('root')
);
