import { AppWrapper, Container } from "../styled/Block";
import { Footer, Header, IconGroup, Main } from "../styled/Block";
import { FlexContainer } from "../styled/Flex";
import IconButton from "../UI/IconButton/IconButton";
import { ReactComponent as GitHubIcon } from "../../icons/github-svg-white.svg";
import { ReactComponent as TelegramIcon } from "../../icons/telegram.svg";
import { ReactComponent as LinkedInIcon } from "../../icons/linkedin.svg";
import { TypeAnimation } from "react-type-animation";
import AboutMe from "../AboutMe/AboutMe";
const Layout = ({ children }) => {
  return (
    <AppWrapper>
      <Header bgColor="#000">
        <FlexContainer
          style={{
            height: "160px",
          }}
          number-cols={4}
          align="stretch"
        >
          <div />
          <div />
          <FlexContainer align="center" justify="center">
            <TypeAnimation
              sequence={["React", 1000, "Redux", 1000, "Nodejs", 1000]}
              speed={50}
              style={{
                fontSize: "2rem",
                color: "#fff",
              }}
              wrapper="span"
            />
          </FlexContainer>
          <div />
        </FlexContainer>
      </Header>
      <Main>
        <Container>
          <FlexContainer align="center" justify="space-between">
            <AboutMe />
          </FlexContainer>
        </Container>
      </Main>
      <Footer>
        <FlexContainer
          align="center"
          justify="center"
          style={{ padding: "1rem", backgroundColor: "#000", color: "#fff" }}
        >
          <FlexContainer align="center">
            Made by Mew&nbsp;
            <IconGroup>
              <IconButton
                to="https://github.com/Mayamee"
                icon={<GitHubIcon />}
                size="24px"
              />
              <IconButton
                to="https://t.me/ymmwmm"
                icon={<TelegramIcon />}
                size="24px"
              />
              <IconButton
                to="https://www.linkedin.com/in/dmitry-belykh-bb8a6b252"
                icon={<LinkedInIcon />}
                size={"24px"}
              />
            </IconGroup>
          </FlexContainer>
        </FlexContainer>
      </Footer>
    </AppWrapper>
  );
};

export default Layout;
