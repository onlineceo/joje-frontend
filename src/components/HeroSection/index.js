
import React,{useState} from 'react';
import Video from '../../videos/chick.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../Button/ButtonElemnts'; 


const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = ()=> {setHover(!hover)};
            return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    مجموعه تخصصی طیور وتنا
                </HeroH1>
                <HeroP>
                    تامین , درمان , پشتیبانی
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='login' onMouseEnter={onHover}
                        onMouseLeave={onHover}>
                        از اینجا شروع کنید {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
