import styled from "styled-components";

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 100;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding-right: 100px;
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
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

export function NavLinks(props) {
    return <NavLinksContainer>
        <LinksWrapper>
            <LinkItem><Link href="#/aboutme">about me</Link></LinkItem>
            <LinkItem><Link href="#/passions">passions</Link></LinkItem>
            <LinkItem><Link href="#/socials">socials</Link></LinkItem>
        </LinksWrapper>
    </NavLinksContainer>    
}