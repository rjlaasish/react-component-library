import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
`;

export const Title = styled.h2`
    font-size: 1rem;
    font-weight: 500;
    color: #343434;
    margin: 0;
  }
  `;
export const InputContainer = styled.div`
    border-radius: 0.5rem;
    border: 1px solid #f3f3f3;
    overflow: hidden;
  }
  `;
export const Input = styled.input`
    width: 20rem;
    font-size: 1rem;
    letter-spacing: 0.04rem;
    outline: none;
    border: none;
    padding: 0.8rem 0.3rem;
    background-color: transparent;
    ::placeholder {
        color: #b8bac5;
      }
  }
  `;

export const InputBox = styled.div`
    display: flex;
    align-items: center;
    padding: 0.2rem 1rem;
    position: relative;
  }
  `;
export const ProgressBg = styled.div`
    width: 100%;
    height: 0.25rem;
    background-color: #fbfbfb;
    border-radius: 0 0 0.2rem 0.2rem;
    position: relative;
  }
  `;

export const Progress = styled.div`
    width: 0%;
    height: 0.25rem;
    position: absolute;
    border-radius: 0 0 0.2rem 0.2rem;
    transition: all 0.5s ease-out;
  }
  `;

export const ToggleBtn = styled(FontAwesomeIcon)`
    text-decoration: none;
    color: #c3c3c3;
    margin-top: 0.5rem;
    cursor:pointer;
    width:20px;
  }
  `;

export const Message = styled.p`
    font-size: 0.7rem;
    font-weight: 500;
    margin-top: 0.8rem;
    letter-spacing: 0.05rem;
    color: #ff6837;
  }
  `;
