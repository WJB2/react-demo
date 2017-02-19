/**
 * Created by MACHENIKE on 2017/2/19.
 */
import * as types from '../actionTypes.js'

const initialState = {
    products:{
        type:'all',
        products:[]
    },
    list:{
        type:'list',
        products:[]
    },
}

const getProduct  = (state = initialState,action = {}) => {
    switch (action.type){
        case types.GET_PRODUCTS:
             state.products.products = action.products;
            return Object.assign([],state);
        case types.GET_LIST:
            state.list.products = action.products;
            return Object.assign([],state);
        default: return state
    }
}



export default  getProduct