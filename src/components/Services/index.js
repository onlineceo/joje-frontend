import React from 'react';
import {ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';
import icon1 from'../../images/Icon1.png'

const Services = () => {
    return (
        <ServicesContainer id='Services'>
            <ServicesH1>مجموعه خدمات ما</ServicesH1>
            <ServicesWrapper>
               
                <ServicesCard>
                    <ServicesIcon src={icon1} />
                        <ServicesH2>خدمات تامینی</ServicesH2>
                        <ServicesP>امکان دسترسی مستقیم به کارخانجات تولید کننده دان و کنسانتره و تچهیزات پرورشی </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={icon1} />
                        <ServicesH2>خدمات تامینی</ServicesH2>
                        <ServicesP>امکان دسترسی مستقیم به کارخانجات تولید کننده دان و کنسانتره و تچهیزات پرورشی </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={icon1} />
                        <ServicesH2>خدمات تامینی</ServicesH2>
                        <ServicesP>امکان دسترسی مستقیم به کارخانجات تولید کننده دان و کنسانتره و تچهیزات پرورشی </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={icon1} />
                        <ServicesH2>خدمات تامینی</ServicesH2>
                        <ServicesP>امکان دسترسی مستقیم به کارخانجات تولید کننده دان و کنسانتره و تچهیزات پرورشی </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services;