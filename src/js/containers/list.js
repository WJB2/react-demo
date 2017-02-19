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
        actions.getList();
        return(
            <div>
                <ComList actions = {actions.removeProduct} products = {list} ></ComList>
            </div>
        )
    }
})

const mapStateToProps = state => {
    return {
        list: state.product.list
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(listActions, dispatch)
});


export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
