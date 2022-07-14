
let stateDefault = {
    topclothes:'',
    botclothes:'',
    handbags:'',
    shoes:'',
    necklaces:'',
    hairstyle:'',
    background:'',
}

export const modelReducer = (state = stateDefault, action) => {


    switch (action.type) {
        case "THU_QUAN_AO":{
            state[action.payload.type] = action.payload.cloth

            return {... state}
        }

        default: return { ...state }
    }

}
