import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface CInput {
  isClearable: boolean;
}

export const CInput = styled.input`
  height: 38px;
  width: 340px;
  :focus {
    outline: none;
    z-index: 1;
    background-color: transparent;
    box-shadow: none;
    border: none;
  }
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 16px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;
export const InputContainer = styled.div`
  background-color: #f8f8f9;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 4px 10px;
  border: 1px solid #C1C7D0;
  :focus-within {
    outline: none;
    z-index: 1;
    border: 1px solid #1d76fe;
  }
`;

export const ClearIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  cursor: pointer;
  &:hover{
    color: #c5c2c2;
    box-shadow: 6px 6px 16px #00000047;
  }
`;

export const ClearFontAwesomeIcon = styled(FontAwesomeIcon)`
  height: 100%;
  border-radius: 20px;
  width: 100%;
  color: #d9d9d9;
`;
