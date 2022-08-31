import React from "react";
import Select from "react-select";
import styled from "styled-components";


interface props {
    [x: string]: any
}

const StyledSelect=styled(Select)`
    
`


export const CSelect = (selectProps: props) => {
    return (
        <Select {...selectProps}/>
    );
}
