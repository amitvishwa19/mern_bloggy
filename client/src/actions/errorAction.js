import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

//Return errors
export const returnErrors = (msg, status, id = null) => {
    //console.log('errorAction: returnError function')
    //console.log('msg:' + msg.msg)
    //console.log('status:' + status)
    //console.log('id:' + id)
    return {
        type: GET_ERRORS,
        payload: { msg, status, id }
    }
}

//Clear errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}
