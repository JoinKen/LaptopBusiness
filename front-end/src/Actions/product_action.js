import callApi from '../until/callAPI';
import * as Types from '../Constant/ActionType';

export const getError = (message) =>{
    return {
        type: Types.SELECT_PRODUCT_ERR,
        message
    }
}
export const getProduct = (data) =>{
   return {
    type: Types.SELECT_PRODUCT,
    data

   }
}
export const getAllProducts =() =>{
    return (dispatch) =>{
        return callApi('listProduct', 'GET').then(res =>{
            console.log(res);
            if(res.data.length <=0){
                dispatch(getError(res.data));
            }
            else{
                console.log(res.data);
                dispatch(getProduct(res.data));
            }
        });
    }
}

