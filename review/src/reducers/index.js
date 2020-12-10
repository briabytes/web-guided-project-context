import data from './../data';


const initialState = {
    person: data
}

export const reducer = (state, action) => {
    switch(action.type) {
        case("CHANGE_NAME"):
            return({
                person: {
                    ...person,
                    name: action.payload
                }
            });
        case("CHANGE_LOCATION"):
        default:
            return(state);
    }

}