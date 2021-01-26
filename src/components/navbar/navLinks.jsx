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
    color: #eaebfe;
    font-weight: 500;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-bottom: 2px solid transparent;
    transition: all 200ms ease-in-out; 

    &:hover {
        border-bottom: 2px solid #2980b9;
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
            <LinkItem><Link href="website-by-sam/#/aboutme">about me</Link></LinkItem>
            <LinkItem><Link href="website-by-sam/#/passions">passions</Link></LinkItem>
            <LinkItem><Link href="website-by-sam/#/socials">socials</Link></LinkItem>
            <LinkItem><Link href="website-by-sam/#/contact">contact</Link></LinkItem>
        </LinksWrapper>
    </NavLinksContainer>    
}