import React from 'react';

const App = ()=> {
    return(<div className="component">
        <h1>Hello World</h1>
        <SubComponent1 />
    </div>);
};

const SubComponent1 = ()=> {
    return(<div className="component">
        <SubComponent2 />
    </div>);
};

const SubComponent2 = ()=> {
    return(<div className="component">
        <SubComponent3 />
    </div>);
};

export default App;