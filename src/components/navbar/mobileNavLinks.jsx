import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 1;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
    background-color: #000000;
    width: 100%;
    flex-direction: column;
    position: fixed;
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

    return ( 
        <NavLinksContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
                <LinksWrapper>
                    <LinkItem><Link href="aboutme">about me</Link></LinkItem>
                    <LinkItem><Link href="passions">passions</Link></LinkItem>
                    <LinkItem><Link href="socials">socials</Link></LinkItem>
                    <LinkItem><Link href="contact">contact</Link></LinkItem>
                    < Marginer />
                    < Accessibility />
                </LinksWrapper>
            )}
        </NavLinksContainer>    
    );
}