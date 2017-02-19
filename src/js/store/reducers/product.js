/**
 * Created by MACHENIKE on 2017/2/19.
 */
import * as types from '../actionTypes.js'

const initialState = {
    products:[],
    list:[]
}

const getProduct  = (state = initialState,action = {}) => {
    switch (action.type){
        case types.GET_PRODUCTS:
             state.products = action.products;
            return Object.assign([],state);
        default: return state
    }
}



export default  getProduct