import React, { useState } from 'react'
import Hoc from "./Hoc";

function LikeImageHoc(props) {

    const {counter,  handleCounter} = props;

    return (
        <div>
            <button onClick={ handleCounter}>Like Image {counter}</button>
        </div>
    )
}

export default Hoc(LikeImageHoc);