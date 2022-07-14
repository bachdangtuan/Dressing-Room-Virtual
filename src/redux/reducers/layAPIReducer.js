


const stateDefault = {
    arrSP: [],

}

export const layAPIReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case "GET_API":{
            state.arrSP = action.arrSP
        }

        default: return { ...state }
    }


}
