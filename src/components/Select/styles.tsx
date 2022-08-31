import styled from "styled-components";

export const CSelect = styled.select`
  background: #f8f8f9;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  border-radius: 10px;
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 4px 45px 4px 10px;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
  linear-gradient(135deg, gray 50%, transparent 50%),
  linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 18px) calc(1em + 10px), calc(100% - 13px) calc(1em + 10px), calc(100% - 30px) 14px;
  background-size: 5px 5px,
  5px 5px,
  1px 1.5em;
  background-repeat: no-repeat;

  :focus-within {
    outline: none;
    z-index: 1;
    border: 1px solid #1d76fe;

    background-image: linear-gradient(45deg, #1d76fe 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, #1d76fe 50%),
    linear-gradient(to right, #1d76fe, #1d76fe);
    background-position: calc(100% - 13px) 19px, calc(100% - 18px) 19px, calc(100% - 30px) 14px;
    background-size: 5px 5px,
    5px 5px,
    1px 1.5em;
    background-repeat: no-repeat;
    outline: 0;

  }

  &:hover {
    cursor: pointer;
  }

  option {
    position: absolute;
    top: 5px;
    color: red;
    //background: red;
    outline: none;
    border: 1px solid red;
    display: flex;
    white-space: pre;
    min-height: 20px;
    //padding: 0px 2px 1px;
  }
`;


export const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

interface IHeaderProps {
    ref: any;
}

export const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  top: 50px;
  width: 10.5em;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 8px 12px;
  box-shadow: 0px 0px 1px rgba(5, 24, 57, 0.2), 0px 18px 28px rgba(5, 24, 57, 0.1);
`;

export const ListItem = styled.div`
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  line-height: 20px;

  &:hover {
    background-color: #e2eeff;
    cursor: pointer;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  height: 48px;
  /* to disable user-text select */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const CountryFlag = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 10px;
`

export const SelectButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #1D77FF;
  padding: 13px 16px;
  border-radius: 10px;
height: 100%;
  &:hover {
    background-color: #F8F8F9;
  }
`;