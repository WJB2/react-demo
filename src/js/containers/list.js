/**
 * Created by MACHENIKE on 2017/2/19.
 */

import React from 'react'
import ComList from './../components/comList.js'
import  listActions from '../store/actions/list.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const List  = React.createClass({
    render(){
        const {list,actions} = this.props;
        actions.getList(list.products);
        return(
            <div>
                <ComList actions = {actions.removeProduct} products = {list} ></ComList>
            </div>
        )
    }
})



export default  connect(
    state => ({ list: state.product.list}),
    dispatch => ({actions: bindActionCreators(listActions, dispatch)})
)(List)
