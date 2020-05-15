import { CHANGE_NAME } from '../actions/types';

const istate = {
    name: "Jays Vishwa",
    email: "jaysvishwa@gmail.com"
}


const testreducer = (state = istate, action) => {
    //console.log('In testReducer CHANGE_NAME is called')
    if (action.type === CHANGE_NAME) {

        return {
            name: action.payload.name,
            email: action.payload.email
        }
    }
    return state;
}

export default testreducer;