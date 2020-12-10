import React, { useState, createContext, useContext, useEffect } from 'react';
import data from './data';

const PersonContext = createContext();

const App = ()=> {
    const [person, setPerson] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            setPerson(data);
        }, 3000);
    }, []);
    
    return(<div className="component">
        <PersonContext.Provider value={[person, setPerson]}>
            <h1>Hello World</h1>
            {(person)? <SubComponent1 /> : <h3>Loading</h3>}
        </PersonContext.Provider>
    </div>);
};

const SubComponent1 = ()=> {
    const [ person, setPerson] = useContext(PersonContext);
    const { name } = person;

    return(<div className="component">
        <p><strong>Name:</strong> { name.title } { name.first} { name.last}</p>
        <SubComponent2 />
    </div>);
};

const SubComponent2 = ()=> {
    const [ person ] = useContext(PersonContext);
    const { location } = person;

    return(<div className="component">
        <p><strong>Location:</strong> {location.street} {location.city} {location.state}</p>
        <SubComponent3 />
    </div>);
};

const SubComponent3 = ()=> {
    const [person, setPerson] = useContext(PersonContext);

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