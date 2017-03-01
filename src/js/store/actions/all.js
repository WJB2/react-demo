/**
 * Created by MACHENIKE on 2017/2/19.
 */


import * as types from '../actionTypes.js'
import api  from '../../api/api'


const allActions = {
    getProduct(){
        return dispatch =>{
            api.getProducts().then(function(res){
               console.log(res)
                dispatch({
                    type:types.GET_PRODUCTS,
                    products:res
                })
            });
        }

    },
    addProduct(id){

        return {
            type:types.ADD_PRODUCTS,
            id:id
        }
    }

}


export default  allActions