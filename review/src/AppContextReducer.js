import React, { useState, useReducer, createContext, useContext } from 'react';

import { initialState, reducer, changeName, changeLocation} from './reducers';

const PersonContext = createContext();

const App = ()=> {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(<div className="component">
        <PersonContext.Provider value={[state, dispatch]}>
            <h1>Hello World</h1>
            <SubComponent1 />
        </PersonContext.Provider>
    </div>);
};

const SubComponent1 = ()=> {
    const [ state ] = useContext(PersonContext);
    const { name } = state.person;

    return(<div className="component">
        <p><strong>Name:</strong> { name.title } { name.first} { name.last}</p>
        <SubComponent2 />
    </div>);
};

const SubComponent2 = ()=> {
    const [ state ] = useContext(PersonContext);
    const { location } = state.person;

    return(<div className="component">
        <p><strong>Location:</strong> {location.street} {location.city} {location.state}</p>
        <SubComponent3 />
    </div>);
};

const SubComponent3 = ()=> {
    const [state, dispatch] = useContext(PersonContext);

    const handleNameChange = ()=> {
        dispatch(changeName("Mr", "Warren", "Longmire"));
    }

    const handleLocationChange = () => {
        dispatch(changeLocation("22 N 22nd Street", "Philadelphia", "PA"));
    }

    return(<div className="component">
        <button onClick={handleNameChange}>Set Name</button>
        <button onClick={handleLocationChange}>Set Location</button>
    </div>);
};

export default App;