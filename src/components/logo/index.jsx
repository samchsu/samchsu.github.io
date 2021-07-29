import React from "react";
import styled from "styled-components";
import SamLogo from "../../assets/images/killua.jpg";
import xu from "../../assets/images/xu.png";
import smoothscroll from 'smoothscroll-polyfill';
// kick off the polyfill!
smoothscroll.polyfill();

const LogoWrapper = styled.div`
    display:flex;
    align-items: center;
    cursor: pointer;
    transition: all 200ms ease-in-out; 
    &:hover {
        color: #FF0000;
        cursor: pointer;
    }
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
    font-weight: 500;
    color: inherit;
`;

export function Logo(props) {
    function handleClick(e) {
        e.preventDefault();
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        console.log("clicked")
    }
    return ( 
        <LogoWrapper onClick={handleClick}>
            <LogoImg> <img src={xu} class="image" alt="Xu"/></LogoImg>
            <LogoText>sam's portfolio</LogoText>
        </LogoWrapper>
    )
}