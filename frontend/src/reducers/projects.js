import { GET_PROJECTS} from '../actions/types.js'

const initialState ={
    projects: []
}

export default function(state = initialState, action){

    switch (action.type){
        case GET_PROJECTS:
            return{
                ...state,
                leads: action.payload
            }
        default:
            return state;
    }

}