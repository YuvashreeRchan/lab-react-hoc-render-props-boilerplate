import React from 'react'

function LikeImageRP(props) {
    const {counter,  handleCounter} = props;
    return (
        <div>
            <button onClick={ handleCounter}>Like Image {counter}</button>
        </div>
    )
}

export default LikeImageRP;