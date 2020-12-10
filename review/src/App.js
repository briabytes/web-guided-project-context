import React, { useState } from 'react';
import data from './data';

const App = ()=> {
    const [person, setPerson] = useState(data);

    return(<div className="component">
        <h1>Hello World</h1>
        <SubComponent1 person={person} setPerson={setPerson}/>
    </div>);
};

const SubComponent1 = ({ person })=> {
    const { name } = person;

    return(<div className="component">
        <p><strong>Name:</strong> { name.title } { name.first} { name.last}</p>
        <SubComponent2 person={person} setPerson={setPerson}/>
    </div>);
};

const SubComponent2 = ({ person })=> {
    const { location } = person;

    return(<div className="component">
        <p><strong>Location:</strong> {location.street} {location.city} {location.state}</p>
        <SubComponent3 />
    </div>);
};

const SubComponent3 = ()=> {
    return(<div className="component">
        <h1>Sub3</h1>
    </div>);
};

export default App;