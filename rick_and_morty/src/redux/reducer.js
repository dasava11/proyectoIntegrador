import { ADD_FAVORITE, DELETE_FAVORITE } from "./actionsType";

const initialState = {
    myFavorites: [],
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAVORITE:
            return{
                ...state, 
                myFavorites: [...state.myFavorites, payload]
            };
            case DELETE_FAVORITE:
            const filtered = state.myFavorites.filter((char)=> char.id !== payload)
            return{
                ...state,
                myFavorites: filtered
            }
    
        default:
            return {...state}
    }
}

export default reducer;