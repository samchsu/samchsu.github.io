import styled from "styled-components";

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
`;

const LinkItem = styled.li`
    height: 100%;
    padding: 0 1.1em;
    color: #DEF0EB;
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
            <LinkItem><Link href="https://samchsu.github.io/website-by-sam/aboutme">about me</Link></LinkItem>
            <LinkItem><Link href="/website-by-sam/passions">passions</Link></LinkItem>
            <LinkItem><Link href="/website-by-sam/socials">socials</Link></LinkItem>
            <LinkItem><Link href="/website-by-sam/contact">contact</Link></LinkItem>
        </LinksWrapper>
    </NavLinksContainer>    
}