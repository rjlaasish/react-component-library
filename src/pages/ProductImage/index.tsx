import React, {useState} from 'react';
import {faCaretLeft, faCaretRight} from "@fortawesome/free-solid-svg-icons";

import {Image1, Image2, Image3, Image4, Image5} from 'assets/images'
import {
    HeroImage,
    HeroImageWrapper,
    LeftFontAweIcon,
    ProductImageContainer,
    RightFontAweIcon,
    SectionImage,
    SectionImageContainer
} from "./styles";


interface IProps {
    width?: number;
    height?: number;
    magnifierHeight?: number;
    magnifierWidth?: number;
    zoomLevel?: number;
}

export interface IImageProps {
    src: string,
    alt: string
}

const ProductImage: React.FC = ({
                                    width = 400,
                                    height = 400,
                                    magnifierHeight = 300,
                                    magnifierWidth = 300,
                                    zoomLevel = 2
                                }: IProps) => {

    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<number>(0)
    const images: IImageProps[] = [{
        src: Image1,
        alt: 'image1'
    }, {
        src: Image2,
        alt: 'image2'
    }, {
        src: Image3,
        alt: 'image3'
    }, {
        src: Image4,
        alt: 'image4'
    }, {
        src: Image5,
        alt: 'image5'
    }];

    const handleImageClick = (idx: number) => {
        setSelectedImage(idx)
    }

    const handleLeftClick = () => {
        if (selectedImage > 0) {
            setSelectedImage(selectedImage - 1)
        }
    }

    const handleRightClick = () => {
        if (selectedImage < images.length - 1) {
            setSelectedImage(selectedImage + 1)
        }
    }

    const handleOnMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
        const elem = e.currentTarget;
        const {width, height} = elem.getBoundingClientRect();
        setSize([width, height]);
        setShowMagnifier(true);
    }

    const handleOnMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
        // update cursor position
        const elem = e.currentTarget;
        const {top, left} = elem.getBoundingClientRect();
        // calculate cursor position on the image
        const x = e.pageX - left - window.pageXOffset;
        const y = e.pageY - top - window.pageYOffset;
        setXY([x, y]);
    }

    const handleMouseMove = () => {
        // close magnifier
        setShowMagnifier(false);
    }


    return (
        <ProductImageContainer>
            <HeroImageWrapper>
                <HeroImage
                    src={images[selectedImage].src}
                    onMouseEnter={handleOnMouseEnter}
                    onMouseMove={handleOnMouseMove}
                    onMouseLeave={handleMouseMove}
                    alt={images[selectedImage].alt}
                />


                <div
                    style={{
                        display: showMagnifier ? "" : "none",
                        position: "absolute",

                        // prevent magnifier blocks the mousemove event of img
                        pointerEvents: "none",
                        // set size of magnifier
                        height: `${magnifierHeight}px`,
                        width: `${magnifierWidth}px`,
                        // move element center to cursor pos
                        top: `${y - magnifierHeight / 2}px`,
                        left: `${x - magnifierWidth / 2}px`,
                        opacity: "1", // reduce opacity so you can verify position
                        border: "1px solid lightgray",
                        backgroundColor: "white",
                        backgroundImage: `url('${images[selectedImage].src}')`,
                        backgroundRepeat: "no-repeat",

                        //calculate zoomed image size
                        backgroundSize: `${imgWidth * zoomLevel}px ${
                            imgHeight * zoomLevel
                        }px`,

                        //calculate position of zoomed image.
                        backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
                        backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                    }}
                ></div>

            </HeroImageWrapper>


            <SectionImageContainer>
                <LeftFontAweIcon icon={faCaretLeft} selectedImage={selectedImage} onClick={handleLeftClick}/>
                {images.map((image:IImageProps, idx:number) =>
                    <SectionImage key={idx} idx={idx} selectedImage={selectedImage} src={image.src}
                                  onClick={() => handleImageClick(idx)}/>
                )}
                <RightFontAweIcon selectedImage={selectedImage} images={images} icon={faCaretRight}
                                  onClick={handleRightClick}/>
            </SectionImageContainer>
        </ProductImageContainer>
    );
}

export default ProductImage;