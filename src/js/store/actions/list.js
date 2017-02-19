/**
 * Created by MACHENIKE on 2017/2/19.
 */


import * as types from '../actionTypes.js'

const listActions = {

    getList(){
        return {
            type:types.GET_LIST,
            products:[
                {id:1,name:'ipad',price:2000,num:2}
            ]
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