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

export const getAllFeatureProductAct = (statementType) => {
    return (dispatch) => {
        var linkParam = "listFeatureProduct?statementType=" + statementType;
        return callApi(linkParam, "GET").then(res => {
            if (res.data.length <= 0) {
                dispatch(getFeatureError(res.data))
            }
            else {
                dispatch(getAllFeatureProduct(res.data))
            }
        })
    }
}