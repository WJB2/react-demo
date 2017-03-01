/**
 * Created by MACHENIKE on 2017/2/19.
 */
import React from 'react'
import {Router,Route,browserHistory } from 'react-router'
import {createStore,applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from '../containers/app.js'
import allReducers from '../store/reducers/index'
import All from '../containers/all'
import List from '../containers/list'
let store = createStore(allReducers,applyMiddleware(thunk));


store.subscribe(function(){
    console.log(store.getState())
});

export default  (
<Provider store = {store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/all" component={All}></Route>
            <Route path="/list" component = {List}></Route>
         </Route >
    </Router>
</Provider>
)

