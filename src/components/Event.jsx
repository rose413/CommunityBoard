import React from "react";

const Event = (props) => {
    return (
        <div className = {'Event '}>
            {/*Name of Computer Science Field Prop*/}
            <h3>{props.event}</h3> 

            {/*Name of Programming Language Prop*/}
            <h4>{props.location}</h4>
        </div>
    )
}

export default Event;