import { CHANGE_NAME } from '../actions/types';

export const changname = () => (dispatch) => {
    //console.log('In action testclicked is invoked')
    dispatch(
        {
            type: CHANGE_NAME,
            payload: { name: 'Amit vishwa', email: 'amitvishwa19@gmail.com' }
        }
    )
} 