import React from "react";
import {InputContainer, CInput, ClearIcon, ClearFontAwesomeIcon} from "./styles";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

interface InputProps {
  isClearable?: boolean;
  onClear?: (evt: React.SyntheticEvent) => void;
  [rest: string]: any;
}

export default function Input({
  type = "text",
  isClearable = false ,
  onClear,
  ...rest
}: InputProps) {
  return (
    <InputContainer>
      <CInput {...rest} type={type} />
      {isClearable && (
        <ClearIcon onClick={onClear}>
          <ClearFontAwesomeIcon icon={faCircleXmark} />
        </ClearIcon>
      )}
    </InputContainer>
  );
}
