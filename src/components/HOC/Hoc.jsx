
import React, { useState } from 'react';

const Hoc = (WrappedComponent) => {
    const newComponent = ()=>{
        const [counter, setCounter] = useState(0);
        const handleCounter = () => {
        setCounter(counter + 1);
        };
        return <WrappedComponent counter={counter} handleCounter={handleCounter}/>;
    };

    return newComponent;
};

export default Hoc;