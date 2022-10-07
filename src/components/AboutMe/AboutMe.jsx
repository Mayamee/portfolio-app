import {
  AvatarBox,
  Button,
  List,
  ListItem,
  Paper,
  Paragraph,
  ParagraphHeading,
  Ticket,
  TicketContainer,
} from "../styled/Block";
import { FlexContainer } from "../styled/Flex";
import Avatar from "../../images/avatar.png";
import ItemIcon from "../ItemIcon/ItemIcon";
import { ReactComponent as RussiaIcon } from "../../icons/russia.svg";
import { ReactComponent as GreenEllips } from "../../icons/greenEllips.svg";
import { ReactComponent as MailIcon } from "../../icons/mail.svg";
import { ReactComponent as PhoneIcon } from "../../icons/phone.svg";
import { ReactComponent as GitHubBlackIcon } from "../../icons/github-svg.svg";
import { ReactComponent as TelegramIcon } from "../../icons/telegram.svg";
import { ReactComponent as LinkedInIcon } from "../../icons/linkedin.svg";
import IconButton from "../UI/IconButton/IconButton";

const AboutMe = () => {
  return (
    <section
      className="aboutme"
      style={{ position: "relative", top: "-124px" }}
    >
      <Paper borderRadius={"15px"} _width={"500px"} padding="1.5rem">
        <FlexContainer id="about-wrapper" _direction="column" align="stretch">
          <FlexContainer
            id="about-title"
            number-cols={2}
            align="stretch"
            gap="1.2rem"
            style={{
              paddingBottom: "1.2rem",
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <AvatarBox
                size="180px"
                style={{
                  display: "inline-block",
                }}
              >
                <img src={Avatar} alt="Avatar" />
              </AvatarBox>
            </div>
            <div className="about">
              <h1
                style={{
                  fontSize: "1.7rem",
                  padding: "0 0 0.5rem 0",
                  margin: 0,
                }}
              >
                Dmitry Belykh
              </h1>
              <h2
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "400",
                  margin: "0 0 0.5rem 0",
                  padding: 0,
                }}
              >
                Frontend Developer
              </h2>
              <List>
                <ListItem>
                  <ItemIcon icon={<RussiaIcon />}>Moscow, Russia</ItemIcon>
                </ListItem>
                <ListItem>
                  <ItemIcon icon={<GreenEllips />}>Open to work</ItemIcon>
                </ListItem>
              </List>
            </div>
          </FlexContainer>
          <FlexContainer
            id="about-buttons"
            align="center"
            gap="1.2rem"
            style={{
              paddingTop: "1.5rem",
            }}
          >
            <Button href="#" bgColor="#221C1C" color="#fff">
              My Profile
            </Button>
            <Button
              href="#"
              bgColor="#fff"
              color="#221C1C"
              borderColor="#221C1C"
            >
              Recent Work
            </Button>
          </FlexContainer>
          <div
            id="about-text"
            style={{
              paddingTop: "1.5rem",
            }}
          >
            <ParagraphHeading>🎓My skills</ParagraphHeading>
            <TicketContainer>
              <Ticket bgColor="#E01B1B" color="#fff">
                HTML
              </Ticket>
              <Ticket bgColor="#4963E7" color="#fff">
                CSS
              </Ticket>
              <Ticket bgColor="#EB13BB" color="#fff">
                SCSS
              </Ticket>
              <Ticket bgColor="#EBBB11" color="#fff">
                Javascript
              </Ticket>
              <Ticket bgColor="#1390EB" color="#fff">
                React
              </Ticket>
              <Ticket bgColor="#8C13EB" color="#fff">
                Redux
              </Ticket>
              <Ticket bgColor="#1713EB" color="#fff">
                Typescript
              </Ticket>
              <Ticket bgColor="#1376EB" color="#fff">
                Webpack
              </Ticket>
              <Ticket bgColor="#23CC15" color="#fff">
                NodeJS
              </Ticket>
              <Ticket bgColor="#DF2489" color="#fff">
                Express
              </Ticket>
            </TicketContainer>
            <ParagraphHeading>💁‍♂️About me</ParagraphHeading>
            <Paragraph>
              I'm an experienced Frontend developer who loves what he does. I
              Can redesign, build websites, and fix bugs for you.
            </Paragraph>
            <ParagraphHeading>📱Contact me</ParagraphHeading>
            <List>
              <ListItem>
                <ItemIcon icon={<MailIcon />}>ponyashcat228@gmail.com</ItemIcon>
              </ListItem>
              <ListItem>
                <ItemIcon icon={<PhoneIcon />}>+79932316385</ItemIcon>
              </ListItem>
            </List>
            <TicketContainer
              style={{
                marginTop: "1rem",
              }}
            >
              <IconButton
                to="https://github.com/Mayamee"
                icon={<GitHubBlackIcon />}
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
                size="24px"
              />
            </TicketContainer>
          </div>
        </FlexContainer>
      </Paper>
    </section>
  );
};

export default AboutMe;
