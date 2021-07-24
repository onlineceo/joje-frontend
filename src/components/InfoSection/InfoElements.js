import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: #fff;

    @media screen and (max-width: 768px) {
        padding: 100px;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 100%;
    justify-content: center;
    
`;

export const InfoRow =styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`;


export const Column1 = styled.div`
    padding: 0px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    grid-area: col2;
    padding: 0px;
`;

export const TextWrapper = styled.div`
    max-width: 555px;
    padding-top: 0;
    white-space: nowrap;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #ff9900;
    white-space: nowrap;
    text-align: center;
    font-size: 35px;
    line-height: 70px;
    font-weight: 900;
    

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

export const Heading = styled.h1`
    padding-top: 20px;
    white-space: normal;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    font-weight: 600;
    color: #000;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        text-align: center;


    }

    @media screen and (max-width:480px) {
        font-size: 12px;
        margin-left: 20px;
        margin-right: 20px;
        
        

    }
`;

export const Subtitle = styled.p`
    max-width: 550px;
    text-align: center;
    margin: 50px;
    white-space: normal;
    font-size: 18px;
    line-height: 30px;
    color: #000;
    padding-bottom: 20px;
    padding-top: 20px;

    @media screen and (max-width: 480px) {
        margin: 0px;

        font-size: 12px;
        max-width: 100%;
        white-space: normal;
    }
`;
export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;

   
`;


export const ImgWrap = styled.div`  
    max-width: auto;
    height: 100%;
    width: 100%;
`;

export const Img=styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;