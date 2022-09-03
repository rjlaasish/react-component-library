import React, { useState, useEffect } from "react";
import styled from "styled-components";

import MessageStatus from "./MessageStatus";

interface IPasswordMessage {
  inputPassword: string;
}

interface IConditionStatus {
  [property: string]: boolean;
}

const PasswordMessage = ({
  inputPassword,
}: IPasswordMessage): React.ReactElement => {
  // regex
  const upperCaseRegex = /[A-Z]/;
  const lowerCaseRegex = /[a-z]/;
  const specialCharacterRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const containsDigitRegex = /\d/;

  // err message
  const LENGTHERROR = (length: number) => `${length} characters`;
  const LOWERCASEERROR = "Lowercase letter";
  const NUMBERERROR = "Number";
  const UPPERCASEERROR = "Uppercase letter";
  const SPECIALCHARERROR = "Special character";

  const PasswordContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
  `;

  const [conditionStatus, setConditionStatus] = useState<IConditionStatus>({
    minSixChar: false,
    upperCase: false,
    hasNumber: false,
    hasSpecialChar: false,
    lowerCase: false,
  });

  useEffect(() => {
    if (inputPassword.length > 0) {
      if (inputPassword.length > 6) {
        setConditionStatus((prevState) => ({
          ...prevState,
          minSixChar: true,
        }));
      }
      if (lowerCaseRegex.test(inputPassword)) {
        setConditionStatus((prevState) => ({
          ...prevState,
          lowerCase: true,
        }));
      }

      if (upperCaseRegex.test(inputPassword)) {
        setConditionStatus((prevState) => ({
          ...prevState,
          upperCase: true,
        }));
      }
      if (specialCharacterRegex.test(inputPassword)) {
        setConditionStatus((prevState) => ({
          ...prevState,
          hasSpecialChar: true,
        }));
      }
      if (containsDigitRegex.test(inputPassword)) {
        setConditionStatus((prevState) => ({
          ...prevState,
          hasNumber: true,
        }));
      }
    } else {
      setConditionStatus({
        minSixChar: false,
        upperCase: false,
        hasNumber: false,
        hasSpecialChar: false,
        lowerCase: false,
      });
    }
  }, [inputPassword]);

  return (
    <PasswordContainer>
      <MessageStatus
        status={conditionStatus.minSixChar}
        text={LENGTHERROR(6)}
      />
      <MessageStatus status={conditionStatus.upperCase} text={UPPERCASEERROR} />
      <MessageStatus status={conditionStatus.hasNumber} text={NUMBERERROR} />
      <MessageStatus
        status={conditionStatus.hasSpecialChar}
        text={SPECIALCHARERROR}
      />
      <MessageStatus status={conditionStatus.lowerCase} text={LOWERCASEERROR} />
    </PasswordContainer>
  );
};

export default PasswordMessage;
