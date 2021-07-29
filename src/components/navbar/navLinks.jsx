import styled from "styled-components";
import smoothscroll from 'smoothscroll-polyfill';
// kick off the polyfill!
smoothscroll.polyfill();

const NavLinksContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-right: 67px;
    z-index: 100;
`;

const LinksWrapper = styled.ul`
    display: flex;
    height: 100%;
    list-style: none;
`;

const LinkItem = styled.li`
    height: 100%;
    padding: 0 2.5em;
    color: #98e5f7;
    font-weight: 500;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-bottom: 2px solid transparent;
    transition: all 200ms ease-in-out; 
    &:hover {
        border-bottom: 2px solid #E8AB4C;
        cursor: pointer;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

export function NavLinks(props) {
    function handleAboutClick(e) {
        e.preventDefault();
        document.querySelector('.section-aboutme').scrollIntoView({ behavior: 'smooth' });
        console.log("clicked")
      }
      function handleProjectsClick(e) {
        e.preventDefault();
        document.querySelector('.section-projects').scrollIntoView({ behavior: 'smooth' });
        console.log("clicked")
      }
      function handleExperienceClick(e) {
        e.preventDefault();
        document.querySelector('.section-experience').scrollIntoView({ behavior: 'smooth' });
        console.log("clicked")
      }
      function handleContactClick(e) {
        e.preventDefault();
        document.querySelector('.section-contact').scrollIntoView({ behavior: 'smooth' });
        console.log("clicked")
      }
    return <NavLinksContainer>
        <LinksWrapper>
            <LinkItem onClick={handleAboutClick}><Link>about me</Link></LinkItem>
            <LinkItem onClick={handleProjectsClick}><Link>projects</Link></LinkItem>
            <LinkItem onClick={handleExperienceClick}><Link>experience</Link></LinkItem>
            <LinkItem onClick={handleContactClick}><Link>contact</Link></LinkItem>
        </LinksWrapper>
    </NavLinksContainer>    
}