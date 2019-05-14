import callApi from '../until/callAPI';
import * as Types from '../Constant/ActionType';

export const getProductError = (message) => {
    return {
        type: Types.SELECT_PRODUCT_ERR,
        message
    }
}
export const getProduct = (data) => {
    return {
        type: Types.SELECT_PRODUCT,
        data
    }
}
export const getFeatureProductError = (message) => {
    return {
        type: Types.SELECT_FEATURE_PRODUCT_ERR,
        message
    }
}
export const getFeatureProduct = (data) => {
    return {
        type: Types.SELECT_FEATURE_PRODUCT,
        data
    }
}
export const getFeatureProductAct = () => {
    return (dispatch) => {
        return callApi('listFeatureProduct', 'GET').then(res => {
            if (res.data.length <= 0) {
                dispatch(getProductError(res.data));
            }
            else {
                console.log(res.data);
                dispatch(getFeatureProduct(res.data));
            }
        });
    }
}

