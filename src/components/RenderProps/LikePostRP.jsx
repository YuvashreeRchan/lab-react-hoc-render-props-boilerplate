import React from "react";

function LikePostRP(props) {
    const {counter,  handleCounter } = props;
    return (
        <div>
            <button onClick={handleCounter}>Like Post {counter}</button>
        </div>
    );
}

export default LikePostRP;