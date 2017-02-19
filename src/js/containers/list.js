/**
 * Created by MACHENIKE on 2017/2/19.
 */

import React from 'react'
import ComList from './../components/comList.js'
import  actions from '../store/actions/index.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const List  = React.createClass({
    render(){
        const {list,actions} = this.props;
        actions();
        return(
            <div>
                <ComList products = {list} ></ComList>
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
    actions: bindActionCreators(actions.getList, dispatch)
});


export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
