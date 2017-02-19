/**
 * Created by MACHENIKE on 2017/2/19.
 */


import * as types from '../actionTypes.js'


let _products = sessionStorage.products || [];

const listActions = {

    getList(){
        return {
            type:types.GET_LIST,
            products:_products
        }
    },
    removeProduct(id){
        return {
            type:types.REMOVE_PRODUCTS,
            id:id
        }
    }
}


export default  listActions