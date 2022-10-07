import Layout from "./components/hoc/Layout";
import {
  Footer,
  Header,
  IconGroup,
  Link,
  Main,
} from "./components/styled/Block";
import { FlexContainer } from "./components/styled/Flex";
import IconButton from "./components/UI/IconButton/IconButton";
import { ReactComponent as GitHubIcon } from "./icons/github-svg-white.svg";
import { ReactComponent as TelegramIcon } from "./icons/telegram.svg";

function App() {
  return (
    <Layout>
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
            <span
              style={{
                color: "#fff",
                fontSize: "2rem",
              }}
            >
              Some text
            </span>
          </FlexContainer>
          <div />
        </FlexContainer>
      </Header>
      <Main>Main</Main>
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
            </IconGroup>
          </FlexContainer>
        </FlexContainer>
      </Footer>
    </Layout>
  );
}

export default App;
