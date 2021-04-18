import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 1500;
`;

const LinksWrapper = styled.ul`
    background-color: black;
    margin: 0;
    padding: 20px;
    display: flex;
    height: 150%;
    list-style: none;
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
`;

const LinkItem = styled.li`
    width: 100%;
    padding: 0 1.1em;
    color: #FFFFFF;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;


export function MobileNavLinks(props) {
    const [isOpen, setOpen] = useState(false);

    function HandleClick() {
        setOpen(!isOpen);
    }

    return ( 
        <NavLinksContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
                <LinksWrapper>
                    <LinkItem><Link href="#/aboutme" onClick={HandleClick}>about me</Link></LinkItem>
                    <LinkItem><Link href="#/passions" onClick={HandleClick}>passions</Link></LinkItem>
                    <LinkItem><Link href="#/socials" onClick={HandleClick}>socials</Link></LinkItem>
                    < Accessibility />
                </LinksWrapper>
            )}
        </NavLinksContainer>    
    );
}