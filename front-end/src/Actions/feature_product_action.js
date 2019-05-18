import callApi from '../until/callAPI';
import * as Types from '../Constant/ActionType';

export const getError = (message) => {
    return {
        type: Types.PRODUCT_ERR,
        message
    }
}
export const getAllProduct = (data) => {
    return {
        type: Types.PRODUCT,
        data
    }
}
export const getAllDealProduct = (data) => {
    return {
        type: Types.DEALPRODUCT,
        data
    }
}
export const getAllProductAct = () => {
    return (dispatch) => {
        var linkParam = "listProduct";
        return callApi(linkParam, "GET").then(res => {
            if (res.data.length <= 0) {
                dispatch(getError(res.data))
            }
            else {
                dispatch(getAllProduct(res.data))
            }
        })
    }
}

export const getAllDealProductAct = () => {
    return (dispatch) => {
        var linkParam = "listFeatureProduct?statementType=DEAL";
        return callApi(linkParam, "GET").then(res => {
            if (res.data.length <= 0) {
                dispatch(getError(res.data))
            }
            else {
                dispatch(getAllDealProduct(res.data))
                console.log(res.data);
            }
        })
    }
}

