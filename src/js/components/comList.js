/**
 * Created by MACHENIKE on 2017/2/19.
 */


import React from 'react';

import style from '../../css/comList.scss'
const comList  = React.createClass({
    propTypes:{
        products: React.PropTypes.object.isRequired,
        actions: React.PropTypes.func.isRequired
    },
    componentDidMount(){

    },
    componentWillReceiveProps(){
        console.log(this.props.products)
    },
    render(){

        let products = this.props.products;
        let t,self =this;
        if(products.type=='all'){
            t = '购买'
        }else{
            t = '取消'
        }
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
                    products.products.map(function(item) {
                       return(
                           <tr key = {(new Date()).getTime()*Math.random()}>
                               <td >{item.name}</td>
                               <td >{item.price}</td>
                               <td >{item.num}</td>
                               <td ><a onClick = { self.props.actions.bind(self,item.id)} id = {item.id}>{t}</a></td>
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