import React, { useState, createContext, useContext } from 'react';
import data from './data';

const PersonContext = createContext();
const DogContext = createContext();

const App = ()=> {
    const [person, setPerson] = useState(data);

    const contextData = { person:person, setPerson:setPerson };

    return(<div className="component">
        <PersonContext.Provider value={[person, setPerson]}>
            <DogContext.Provider value={{dogName:"Bark"}}>
                <h1>Hello World</h1>
                <SubComponent1 />
            </DogContext.Provider>
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
    const { dogName } = useContext(DogContext);

    const { location } = person;

    return(<div className="component">
        <p><strong>Location:</strong> {location.street} {location.city} {location.state}</p>
        <p><strong>DogName:</strong> { dogName }</p>
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