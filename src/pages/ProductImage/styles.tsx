import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const HeroImageWrapper = styled.div`
  position: relative;
  height: 400px;
  width: 400px;
  display: flex;
  user-select: none;
`;

export const HeroImage = styled.img`
  height: 400px;
  width: 400px;
  user-select: none;
  object-fit: cover
`;

export const SectionImageContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;

export const LeftFontAweIcon = styled(FontAwesomeIcon)<{selectedImage:number}>`
  width: 50px;
  height: 50px;
  cursor: pointer;
  color: ${props => props.selectedImage === 0 ? '#afafaf' : '#000000'};
`;

export const RightFontAweIcon = styled(FontAwesomeIcon)<{selectedImage:number,images:any}>`
  width: 50px;
  height: 50px;
  cursor: pointer;
  color: ${props => props.selectedImage === props.images.length - 1 ? '#afafaf' : '#000000'}};
`;


export const SectionImage = styled.img<{idx:number,selectedImage:number}>`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 5px;
  border: ${props=>props.idx === props.selectedImage ? '2px solid #000000' : ''};
  opacity: ${props=>props.idx === props.selectedImage ? '0.6' : '1'};
  margin: 10px;
  cursor: pointer;
  user-select: none;
`;
