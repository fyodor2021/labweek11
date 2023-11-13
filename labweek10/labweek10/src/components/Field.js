import React from "react";

const field = (props)=>{

    return <input id={props.id} 
    style={{marginRight: "10px"}}
    className={props.className} 
    placeholder={props.placeholder}/>
}

export default field