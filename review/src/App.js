import React from 'react';

const App = ()=> {
    return(<div className="component">
        <h1>Hello World</h1>
        <SubComponent1 />
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