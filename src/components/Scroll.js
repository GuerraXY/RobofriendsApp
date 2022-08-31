import React from "react";

const Scroll = (props) => {
    return (
        <div style={{
            overflowY: 'scroll', 
            borderBlockEnd: '2px solid black', 
            borderBlockStart: '2px solid black', 
            height: '700px'}}>
            {props.children}
        </div>
        );
};

export default Scroll;