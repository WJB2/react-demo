/**
 * Created by MACHENIKE on 2017/2/19.
 */


import * as types from '../actionTypes.js'

const _products = [
    {id:1,name:'ipad',price:2000,num:2},
    {id:2,name:'ipad2',price:3000,num:1},
    {id:3,name:'ipad3',price:4000,num:4},
    {id:4,name:'ipad4',price:5000,num:6},
]

const allActions = {
    getProduct(){
        return {
            type:types.GET_PRODUCTS,
            products:_products
        }
    },
    addProduct(id){
        console.log(id)
        return {
            type:types.ADD_PRODUCTS,
            id:id
        }
    }

}


export default  allActions