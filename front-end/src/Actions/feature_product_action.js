import callApi from '../until/callAPI';
import * as Types from '../Constant/ActionType';

export const getFeatureError = (message) => {
    return {
        type: Types.FEATUREPRODUCT_ERR,
        message
    }
}
export const getAllFeatureProduct = (data) => {
    return {
        type: Types.FEATUREPRODUCT,
        data
    }
}
export const getAllDealProduct = (data) => {
    return {
        type: Types.DEALPRODUCT,
        data
    }
}
export const getAllOnSaleProduct = (data) => {
    return {
        type: Types.ONSALEPRODUCT,
        data
    }
}
export const getAllBestRatedProduct = (data) => {
    return {
        type: Types.BESTRATEDPRODUCT,
        data
    }
}

export const getAllProductAct = () => {
    return (dispatch) => {
        var linkParam = "listProduct";
        return callApi(linkParam, "GET").then(res => {
            if (res.data.length <= 0) {
                dispatch(getFeatureError(res.data))
            }
            else {
                dispatch(getAllFeatureProduct(res.data))
                console.log(res.data);
            }
        })
    }
}

export const getAllFeatureProductAct = () => {
    return (dispatch) => {
        var linkParam = "listFeatureProduct?statementType=FEATURE";
        return callApi(linkParam, "GET").then(res => {
            if (res.data.length <= 0) {
                dispatch(getFeatureError(res.data))
            }
            else {
                dispatch(getAllFeatureProduct(res.data))
                console.log(res.data);
            }
        })
    }
}
export const getAllDealProductAct = () => {
    return (dispatch) => {
        var linkParam = "listFeatureProduct?statementType=DEAL";
        return callApi(linkParam, "GET").then(res => {
            if (res.data.length <= 0) {
                dispatch(getFeatureError(res.data))
            }
            else {
                dispatch(getAllDealProduct(res.data))
                console.log(res.data);
            }
        })
    }
}
export const getAllOnSaleProductAct = () => {
    return (dispatch) => {
        var linkParam = "listFeatureProduct?statementType=ONSALE";
        return callApi(linkParam, "GET").then(res => {
            if (res.data.length <= 0) {
                dispatch(getFeatureError(res.data))
            }
            else {
                dispatch(getAllOnSaleProduct(res.data))
                console.log(res.data);
            }
        })
    }
}
export const getAllBestRatedProductAct = () => {
    return (dispatch) => {
        var linkParam = "listFeatureProduct?statementType=BESTRATED";
        return callApi(linkParam, "GET").then(res => {
            if (res.data.length <= 0) {
                dispatch(getFeatureError(res.data))
            }
            else {
                dispatch(getAllBestRatedProduct(res.data))
                console.log(res.data);
            }
        })
    }
}

