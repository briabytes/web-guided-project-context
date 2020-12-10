import React, { useState } from 'react';
import data from './data';

const App = ()=> {
    const [person, setPerson] = useState(data);

    return(<div className="component">
        <h1>Hello World</h1>
        <SubComponent1 person={person} setPerson={setPerson}/>
    </div>);
};

const SubComponent1 = ()=> {
    return(<div className="component">
        <h1>Sub1</h1>
        <SubComponent2 />
    </div>);
};

const SubComponent2 = ()=> {
    return(<div className="component">
        <h1>Sub2</h1>
        <SubComponent3 />
    </div>);
};

const SubComponent3 = ()=> {
    return(<div className="component">
        <h1>Sub3</h1>
    </div>);
};

export default App;