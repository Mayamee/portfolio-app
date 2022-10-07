import styled from "styled-components";

export const Container = styled.div`
  max-width: ${(props) => props.maxWidth || "100%"};
  margin: 0 auto;
  padding: 0 1rem;
`;

export const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: ${(props) => props.bgColor || "white"};
`;

export const Main = styled.main`
  background-color: ${(props) => props.bgColor || "white"};
  padding: 1rem;
  flex-grow: 1;
`;

export const Footer = styled.footer`
  background-color: ${(props) => props.bgColor || "white"};
`;

export const Link = styled.a`
  color: ${(props) => props.color || "inherit"};
  text-decoration: none;
`;

export const SVGLink = styled(Link)`
  height: 100%;
  width: 100%;
  & > svg {
    width: 100%;
    height: 100%;
  }
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

export const Paper = styled.div`
  background-color: ${(props) => props.bgColor || "white"};
  border-radius: ${(props) => props.borderRadius || "0.5rem"};
  width: ${(props) => props._width || "auto"};
  padding: ${(props) => props.padding || "1rem"};
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
`;

export const AvatarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size || "auto"};
  height: ${(props) => props.size || "auto"};
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 0.3rem 0;
`;

export const IconBlock = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size || "auto"};
  height: ${(props) => props.size || "auto"};
  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${(props) => props.color || "black"};
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.borderColor || "black"};
  background-color: ${(props) => props.bgColor || "white"};
  color: ${(props) => props.color || "black"};
  text-decoration: none;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translate(0.01rem, 0.05rem);
  }
`;

export const ParagraphHeading = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.color || "black"};
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.color || "black"};
`;

export const TicketContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const Ticket = styled.span`
  background-color: ${(props) => props.bgColor || "white"};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  user-select: none;
  border: 1px solid ${(props) => props.borderColor || "transparent"};
  color: ${(props) => props.color || "black"};
  font-size: 1rem;
`;
