import styled from "styled-components";
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #232f3e;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;


export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;


export const FooterLinkWrapper = styled.div`
    display: flex;
`;