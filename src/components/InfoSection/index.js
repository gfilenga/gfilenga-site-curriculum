import React from 'react'
import { 
    InfoContainer, 
    Heading, 
    Column1, 
    InfoRow, 
    InfoWrapper, 
    Subtitle, 
    TextWrapper,
    TopLine, 
    Column2, 
    ImgWrap,
    Img
} 
from './infoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, img, alt}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading  lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
