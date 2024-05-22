import React from "react";
import Hoc from "./Hoc";

function LikePostHoc(props) {
    const {counter,  handleCounter } = props;

    return (
        <div>
        <button onClick={handleCounter}>Like Post {counter}</button>
        </div>
    );
}

export default Hoc(LikePostHoc);