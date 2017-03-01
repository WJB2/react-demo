/**
 * Created by MACHENIKE on 2017/2/19.
 */

import React from 'react'
import ComList from './../components/comList.js'
import  allAction from '../store/actions/all.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const All  = React.createClass({

    componentWillUpdate(){

    },
    componentDidMount(){
        this.props.actions.getProduct()
    },
    render(){
        const {products,actions} = this.props;
        return(
            <div>
                <ComList actions = {actions.addProduct} products = {products} ></ComList>
            </div>
        )
    }
})


export default  connect(
    state =>({products: state.product.products}),
    dispatch => ({actions: bindActionCreators(allAction, dispatch)})
)(All)
