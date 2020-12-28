import React from 'react';
import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
}
    from './heroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>web developer</HeroH1>
                <HeroP>Este site foi criado com o objetivo de aplicar o que aprendi em react até o momento</HeroP>
          </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
