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
    let i = 0;
    switch (action.type){
        case types.GET_PRODUCTS:
             state.products.products = action.products;
            return Object.assign([],state);
            break;
        case types.GET_LIST:
            state.list.products = action.products;
            return Object.assign([],state);
            break;
        case types.ADD_PRODUCTS:
            let l = state.products.products.length;
            for(;i<l;i++){
               if(state.products.products[i].id==action.id){
                   if(state.products.products[i].num>0){
                      state.products.products[i].num -=1;
                       let i1 = 0,l1 = state.list.products.length,s =true;
                       if(l1>0){
                           for(;i1<l1;i1++){

                               if(state.list.products[i1].id==action.id){
                                   s = false
                                   state.list.products[i1].num +=1;
                                   break
                               }
                           }

                          if(s){
                              state.list.products.push(Object.assign({},state.products.products[i],{num:1}))
                          }

                       }else{

                           state.list.products.push(Object.assign({},state.products.products[i],{num:1}))
                       }

              }else{
                       alert('库存不足')
                   }
               }
            }

            return Object.assign([],state,{
                products:{
                    type:'all',
                    products:state.products.products
                },
                list:{
                    type:'list',
                    products:state.list.products
                }
            });
            break;
        case types.REMOVE_PRODUCTS:
            let listLength = state.list.products.length;
            for(;i<listLength;i++){
                if(state.list.products[i].id==action.id){
                    if(state.list.products[i].num>1){
                        state.list.products[i].num -=1;
                    }else{
                        state.list.products.splice(i,1);
                    }

                    let listLength1 = 0,productsLength = state.products.products.length;

                        for(;listLength1<productsLength;listLength1++){

                            if(state.products.products[listLength1].id==action.id){
                                state.products.products[listLength1].num +=1;
                                break
                            }
                        }


                    break
                }
            }

            return Object.assign([],state,{
                products:{
                    type:'all',
                    products:state.products.products
                },
                list:{
                    type:'list',
                    products:state.list.products
                }
            });
            break;
        default: return state
    }
}



export default  getProduct