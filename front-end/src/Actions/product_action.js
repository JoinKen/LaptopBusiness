import callApi from '../until/callAPI';
import * as Types from '../Constant/ActionType';

export const getFeatureError = (message) => {
    return {
        type: Types.SELECT_FEATUREPRODUCT_ERR,
        message
    }
}
export const getAllFeatureProducts = (data) => {
    return {
        type: Types.SELECT_FEATUREPRODUCT,
        data
    }
}

export const getAllFeatureProductsAct = () => {
    return (dispatch) => {
        var linkParam = "listFeatureProduct?statementType=";
        // var linkParam = 'listFeatureProduct';
        return callApi(linkParam, "GET").then(res => {
            if (res.data.length <= 0) {
                dispatch(getFeatureError(res.data));
            }
            else {
                dispatch(getAllFeatureProducts(res.data));
                console.log("getAllFeatureProductsAct");
                console.log(res.data);
            }
        });
    }
}

