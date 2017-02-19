/**
 * Created by MACHENIKE on 2017/2/19.
 */

import React from 'react'
import ComList from './../components/comList.js'

import { connect } from 'react-redux'

const All  = React.createClass({

    render(){
        const {products} = this.props;
        return(
            <div>
                <ComList products = {products} ></ComList>
            </div>
        )
    }
})



const mapStateToProps = (state) => {
    return {
        products: state.product.products
    }
}


export default  connect(
    mapStateToProps
)(All)
