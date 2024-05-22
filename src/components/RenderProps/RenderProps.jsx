import React, { useState } from "react";

const RenderProps = (props) => {
    const { render } = props;

    const [counter, setCounter] = useState(0);
        
    const handleCounter = () => {
        setCounter(counter + 1);
        };

    return <div>{render(counter, handleCounter)}</div>;
};

export default RenderProps;