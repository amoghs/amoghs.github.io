import React from "react";
import hero from "./assets/hero.svg";
import styled from "styled-components";

function App() {
  return (
    <Root>
      <Header>
        <Link onClick={() => window.Intercom('trackEvent', 'linkedIn-viewed')} href={"https://www.linkedin.com/in/amoghsarda/"}>LinkedIn</Link>
        <Link onClick={() => window.Intercom('trackEvent', 'medium-viewed')} href={"https://medium.com/@amogh.sarda"}>Medium</Link>
        <Link onClick={() => window.Intercom('trackEvent', 'instagram-viewed')} href={"https://www.instagram.com/studio.amogh/"}>Instagram</Link>
        <Link onClick={() => window.Intercom('trackEvent', 'twitter-viewed')} href={"https://twitter.com/amoghito"}>Twitter</Link>
      </Header>
      <Main>
        <Hero src={hero} />
        <Intro>
          <Line>Hey! I’m Amogh Sarda.</Line>
          <Line>
            I’m a product manager who has worked for Atlassian and Intercom. I’m
            currently working on{" "}
            <InlineLink href="https://chrome.google.com/webstore/detail/obair/jffaiidojfhflballoapgofphkadiono">
              Obair
            </InlineLink>
            , <InlineLink href="https://www.arenahq.io/">Arena</InlineLink>.
          </Line>
          <Line>I love improv comedy, surfing and my uke.</Line>
        </Intro>
      </Main>
    </Root>
  );
}

const InlineLink = styled.a`
  color: black;
`;
const Root = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  top: 0;
  overflow-x: hidden;
`;

const Header = styled.div`
  text-align: right;
  padding: 1rem;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Link = styled.a`
  padding: 1rem;
  font-size: 1.5rem;
  color: black;
`;

const Intro = styled.div`
  font-size: 2rem;
  padding: 1.5rem;
`;

const Hero = styled.img`
  max-width: 80vh;
  padding: 3rem;
`;

const Line = styled.p``;
export default App;
