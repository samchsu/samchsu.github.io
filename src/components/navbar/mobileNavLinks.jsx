import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import smoothscroll from 'smoothscroll-polyfill';
// kick off the polyfill!
smoothscroll.polyfill();

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 1500;
    cursor: pointer;
`;

const LinksWrapper = styled.ul`
    background-color: black;
    margin: 0;
    padding: 20px;
    display: flex;
    height: auto;
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
    cursor: pointer;
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

    function handleAboutClick(e) {
        setOpen(!isOpen);
        e.preventDefault();
        document.querySelector('.section-aboutme').scrollIntoView({ behavior: 'smooth' });
        console.log("clicked")
      }
      function handleProjectsClick(e) {
        setOpen(!isOpen);
        e.preventDefault();
        document.querySelector('.section-projects').scrollIntoView({ behavior: 'smooth' });
        console.log("clicked")
      }
      function handleExperienceClick(e) {
        setOpen(!isOpen);
        e.preventDefault();
        document.querySelector('.section-experience').scrollIntoView({ behavior: 'smooth' });
        console.log("clicked")
      }
      function handleContactClick(e) {
        setOpen(!isOpen);
        e.preventDefault();
        document.querySelector('.section-contact').scrollIntoView({ behavior: 'smooth' });
        console.log("clicked")
      }

    return ( 
        <NavLinksContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
                <LinksWrapper>
                    <LinkItem><Link onClick={handleAboutClick}>about me</Link></LinkItem>
                    <LinkItem><Link onClick={handleProjectsClick}>projects</Link></LinkItem>
                    <LinkItem><Link onClick={handleExperienceClick}>experience</Link></LinkItem>
                    <LinkItem><Link onClick={handleContactClick}>contact</Link></LinkItem>
                    < Accessibility />
                </LinksWrapper>
            )}
        </NavLinksContainer>    
    );
}