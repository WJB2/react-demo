/**
 * Created by MACHENIKE on 2017/2/19.
 */

import React from 'react'
import ComList from './../components/comList.js'
import  allAction from '../store/actions/all.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const All  = React.createClass({
    render(){
        const {products,actions} = this.props;
        console.log(products)
        actions.getProduct();
        return(
            <div>
                <ComList actions = {actions.addProduct} products = {products} ></ComList>
            </div>
        )
    }
})

const mapStateToProps = state => {

    return {
        products: state.product.products
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(allAction, dispatch)
});


export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(All)
