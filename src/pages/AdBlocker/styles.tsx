import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  opacity: 0.8;
  height: 100vh;
  z-index: 999;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AdBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 480px;
  background: #fff;
  border-radius: 15px;
  padding: 15px;
  z-index: 9999;
  pointer-events: none;
  user-select: none;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #27496d;
  border-radius: 50%;
`;

export const Icon = styled(FontAwesomeIcon)`
  background: #fff;
  padding: 20px;
  border-radius: 50%;
  font-size: 30px;
`;

export const AdText = styled.h2`
  padding: 15px;
`;
