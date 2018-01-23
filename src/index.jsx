import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import {store} from './store/index'

import {AppComponent} from './container/app'
import './assets/less/style.less';
import './assets/less/reset.less';
import './assets/less/lay.less';
import './assets/less/lottery.less';


ReactDOM.render(
    <Provider store={store}>
        <AppComponent/>
    </Provider>,
    document.getElementById('root')
);

