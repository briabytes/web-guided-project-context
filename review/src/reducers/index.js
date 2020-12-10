import data from './../data';

const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_LOCATION = 'CHANGE_LOCATION';

export const initialState = {
    person: null
}

export const changeName = (title, first, last) => {
    return({ type:CHANGE_NAME, payload:{title, first, last}});
}

export const changeLocation = (street, city, state) => {
    return({ type:CHANGE_LOCATION, payload:{street, city, state}});
}

export const reducer = (state, action) => {
    switch(action.type) {
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