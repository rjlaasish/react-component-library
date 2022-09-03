import React, { useState } from "react";
import {
  Container,
  Input,
  InputBox,
  InputContainer,
  ToggleBtn,
} from "./styles";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import PasswordMessage from "./PasswordMessage";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const handlePassword = (passwordValue: string) => {
    setPassword(passwordValue);
  };

  return (
    <Container>
      <InputContainer>
        <InputBox>
          <Input
            value={password}
            onChange={({ target }) => {
              handlePassword(target.value);
            }}
            type={hidePassword ? "password" : "text"}
            placeholder="Enter Password"
            autoComplete="off"
          />
          <ToggleBtn
            fontVariant="light"
            icon={!hidePassword ? faEye : faEyeSlash}
            onClick={() => setHidePassword(!hidePassword)}
          />
        </InputBox>
      </InputContainer>
      <PasswordMessage inputPassword={password || ""} />
    </Container>
  );
};

export default PasswordStrength;
