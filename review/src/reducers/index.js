import data from './../data';


const initialState = {
    person: data
}

export const changeName = ((title, first, last) => {
    return({ type:"CHANGE_NAME"});
}

export const reducer = (state, action) => {
    switch(action.type) {
        case("CHANGE_NAME"):
            return({
                ...state,
                person: {
                    ...person,
                    name: action.payload
                }
            });

        case("CHANGE_LOCATION"):
            return({
                ...state,
                person: {
                    ...person,
                    location: action.payload
                }
            });

        default:
            return(state);
    }

}