import React from "react";
import Select from "react-select";


interface props {
    [x: string]: any
}



export const CSelect = (selectProps: props) => {
    return (
        <Select {...selectProps}/>
    );
}
