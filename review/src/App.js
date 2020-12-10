import React, { useState, createContext, useContext } from 'react';
import data from './data';

const PersonContext = createContext();

const App = ()=> {
    const [person, setPerson] = useState(data);

    return(<div className="component">
        <h1>Hello World</h1>
        <SubComponent1 person={person} setPerson={setPerson}/>
    </div>);
};

const SubComponent1 = ({ person, setPerson })=> {
    const { name } = person;

    return(<div className="component">
        <p><strong>Name:</strong> { name.title } { name.first} { name.last}</p>
        <SubComponent2 person={person} setPerson={setPerson}/>
    </div>);
};

const SubComponent2 = ({ person, setPerson })=> {
    const { location } = person;

    return(<div className="component">
        <p><strong>Location:</strong> {location.street} {location.city} {location.state}</p>
        <SubComponent3 person={person} setPerson={setPerson}/>
    </div>);
};

const SubComponent3 = ({ person, setPerson })=> {
    const handleNameChange = ()=> {
        setPerson({
            ...person,
            name: {
                title: "Mr",
                first: "Warren",
                last: "Longmire"
            }
        });
    }

    const handleLocationChange = () => {
        setPerson({
            ...person,
            location:{
                street: "22 N 22nd street",
                city: "Philadelphia",
                state: "PA"
            }
        })
    }

    return(<div className="component">
        <button onClick={handleNameChange}>Set Name</button>
        <button onClick={handleLocationChange}>Set Location</button>
    </div>);
};

export default App;