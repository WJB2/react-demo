/**
 * Created by MACHENIKE on 2017/2/19.
 */

import React from 'react'
import ComList from './../components/comList.js'
import  actions from '../store/actions/index.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const All  = React.createClass({
    render(){
        console.log(this.props)
        const {products,actions} = this.props;
        return(
            <div>
                <ComList actions = {actions} products = {products} ></ComList>
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
    actions: bindActionCreators(actions, dispatch)
});


export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(All)
