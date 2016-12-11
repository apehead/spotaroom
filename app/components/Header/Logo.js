import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import messages from './messages';


const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  color: ${(props) => props.theme.grayDark}
`;

const Title = styled.h1`
  margin: 0;
  font-family: 'Luckiest Guy';
  font-size: 50px;
  text-transform: lowercase;
`;

const Join = styled.span`
  position: relative;
  margin: 0 10px;

  &:before {
    display: block;
    position: absolute;
    content: "A";
    top: -6px;
    left: -9px;
    height: 49px;
    width: 49px;
    text-align: center;
    line-height: 1.2;
    border-radius: 50%;
    color: ${(props) => props.theme.secondaryLight};
    background-color: ${(props) => props.theme.grayDark};
  }
`;

const Tagline = styled.span`
  position: absolute;
  right: 0;
  bottom: 5px;
  color: ${(props) => props.theme.gray};
  font-family: 'Open Sans', sans-serif;
  font-size: 10px;
`;

const Logo = () => (
  <Wrapper>
    <Title>
      SPOT
      <Join>
        A
      </Join>
      ROOM
    </Title>
    <Tagline>
      <FormattedMessage {...messages.logoTagline} />
    </Tagline>
  </Wrapper>
);


export default Logo;
