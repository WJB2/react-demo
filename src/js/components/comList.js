/**
 * Created by MACHENIKE on 2017/2/19.
 */


import React from 'react';

import style from '../../css/comList.scss'
const comList  = React.createClass({
    propTypes:{
        products: React.PropTypes.array.isRequired,
        actions: React.PropTypes.object.isRequired
    },
    componentDidMount(){
        this.props.actions.getProduct();

    },
    render(){
        let {products}  = this.props;
     
        return(
            <table className="m-com-list">
                <thead>
                 <tr>
                  <th>商品名称</th>
                  <th>价格</th>
                  <th>数量</th>
                  <th>操作</th>
                 </tr>
                </thead>
                <tbody>
                {
                    products.map(function(item) {
                       return(
                           <tr key = {item.id}>
                               <td >{item.name}</td>
                               <td >{item.price}</td>
                               <td >{item.num}</td>
                               <td >{item.id}</td>
                           </tr>
                       )
                    })
                }

                </tbody>
            </table>
        )
    }
})

export default comList