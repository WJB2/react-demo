/**
 * Created by MACHENIKE on 2017/2/19.
 */


import React from 'react';

import style from '../../css/comList.scss'
const comList  = React.createClass({
    propTypes:{
        products: React.PropTypes.array.isRequired
    },
    render(){
        console.log(this.props)
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
                 <tr>
                 <td>1</td>
                 <td>1</td>
                 <td>1</td>
                 <td>1</td>
                 </tr>
                </tbody>
            </table>
        )
    }
})

export default comList