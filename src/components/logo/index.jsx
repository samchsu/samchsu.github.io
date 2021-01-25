import React from "react";
import styled from "styled-components";
import SamLogo from "../../assets/images/killua.jpg";
const LogoWrapper = styled.div`
    display:flex;
    align-items: center;
`;

const LogoImg = styled.div`
    width: 29px;
    height: 29px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const LogoText = styled.h2`
    font-size: 16px;
    margin: 0;
    margin-left: 8px;
    color: #FF0000;
    font-weight: 500;
`;

export function Logo(props) {
    return ( 
        <LogoWrapper>
            <LogoImg> <img src={SamLogo} alt="Sam's Portfolio"/></LogoImg>
            <LogoText>sam's world</LogoText>
        </LogoWrapper>
    )
}