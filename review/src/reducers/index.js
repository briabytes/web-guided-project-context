import data from './../data';

const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_LOCATION = 'CHANGE_LOCATION';

const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAIL = 'FETCH_FAIL';

export const initialState = {
    person: null,
    fetching: false
}

export const changeName = (title, first, last) => {
    return({ type:CHANGE_NAME, payload:{title, first, last}});
}

export const changeLocation = (street, city, state) => {
    return({ type:CHANGE_LOCATION, payload:{street, city, state}});
}

export const reducer = (state, action) => {
    switch(action.type) {
        case(FETCH_START):
            return({
                ...state,
                fetching:true
            })
        case(FETCH_SUCCESS):
            return({
                ...state,
                person: action.payload,
                fetching:false
            })
        case(FETCH_FAIL):
            return({
                ...state,
                err: action.payload,
                fetching:false
            })
        case(CHANGE_NAME):
            return({
                ...state,
                person: {
                    ...state.person,
                    name: action.payload
                }
            });

        case(CHANGE_NAME):
            return({
                ...state,
                person: {
                    ...state.person,
                    name: action.payload
                }
            });

        case(CHANGE_NAME):
            return({
                ...state,
                person: {
                    ...state.person,
                    name: action.payload
                }
            });

        case(CHANGE_LOCATION):
            return({
                ...state,
                person: {
                    ...state.person,
                    location: action.payload
                }
            });

        default:
            return(state);
    }

}