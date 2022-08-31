import styled from "styled-components";

export const OtpInput = styled.input`
  height: 40px;
  width: 40px;
  background-color: #f8f8f9;
  border: 1px solid #5e5e5e;
  border-radius: 10px;
  text-align: center;
  padding: 4px 10px;
margin:5px;
  :focus {
    outline: none;
    z-index: 1;
    border: 1px solid #1d76fe;
  }
  outline: none;
  font-size: 16px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;