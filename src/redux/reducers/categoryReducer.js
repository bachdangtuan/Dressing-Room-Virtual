const stateDefault = {
    arrButton: [
        {tabName: "tabTopClothes", showName: "Áo", type:"topclothes"},
        {tabName: "tabBotClothes", showName: "Quần", type:"botclothes"},
        {tabName: "tabShoes", showName: "Giày Dép", type:"shoes"},
        {tabName: "tabHandBags", showName: "Túi Xách", type:"handbags"},
        {tabName: "tabNecklaces", showName: "Dây Chuyền", type:"necklaces"},
        {tabName: "tabHairStyle", showName: "Kiểu Tóc", type:"hairstyle"},   
        {tabName: "tabBackGround", showName: "Nền", type:"background"},   
    ],
    chooseCategory: "top"
}

export const categoryReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "SET_CATEGORY":{
            state.chooseCategory = action.category
        }

        default: return { ...state }
    }


}
