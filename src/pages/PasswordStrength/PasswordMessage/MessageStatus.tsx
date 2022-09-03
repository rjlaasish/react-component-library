import React from "react";

// import {
//   GreenCheckMarkIcon,
//   RedCrossIcon,
// } from 'assets/icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
interface IMessageStatus {
  status: boolean;
  text: string;
}

const MessageContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  align-items: center;
`;

const MessageStatus = ({
  status,
  text,
}: IMessageStatus): React.ReactElement => {
  return (
    <MessageContainer>
      {status ? (
        <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
      ) : (
        <FontAwesomeIcon icon={faXmark} style={{ color: "red" }} />
      )}
      <p>{text}</p>
    </MessageContainer>
  );
};

export default MessageStatus;
