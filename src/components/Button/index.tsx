import React from 'react';
import {StyledButton} from './styles'

interface Props{
    children: React.ReactNode | string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    type?:"submit"| "button";
}


function Button({children,onClick,type}:Props) {
    return (
        <StyledButton onClick={onClick} type={type}>{children}</StyledButton>
    );
}

export default Button;