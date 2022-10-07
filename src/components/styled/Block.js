import styled from "styled-components";

export const Container = styled.div`
  max-width: ${(props) => props.maxWidth || "100%"};
  margin: 0 auto;
  padding: 0 1rem;
`;

export const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: ${(props) => props.bgColor || "white"};
`;

export const Main = styled.main`
  background-color: ${(props) => props.bgColor || "white"};
  flex-grow: 1;
`;

export const Footer = styled.footer`
  background-color: ${(props) => props.bgColor || "white"};
`;

export const Link = styled.a`
  color: ${(props) => props.color || "inherit"};
  text-decoration: none;
`;

export const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
  & > * {
    transition: all 0.1s linear;
  }
  & > *:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
export const Box = styled.div`
  width: ${(props) => props.size || "auto"};
  height: ${(props) => props.size || "auto"};
`;
