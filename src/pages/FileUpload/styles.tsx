import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 200px;
  padding: 20px;
  border-width: 2px;
  border-radius: 30px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #00a8cc1f;
  color: #000000;
  outline: none;
  margin-bottom: 50px;
  transition: border 0.24s ease-in-out;
`;

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#0C7B93";
};

export const FilePickerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 200px;
`;

export const FilePickerImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const PreviewImage = styled.img`
  width: 90px;
  height: 90px;
  object-fit: contain;
  border-radius: 5px;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #dddddd;
  text-align: center;
  &:last-child {
    border-bottom: none;
  }
`;
