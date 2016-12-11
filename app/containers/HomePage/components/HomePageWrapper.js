import React, { PropTypes } from 'react';
import styled from 'styled-components';

import media from 'styles/media';


const Wrapper = styled.article`
  display: flex;

  ${media.tablet`
    flex-direction: column;
  `}
`;

const HomePageWrapper = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
);

HomePageWrapper.propTypes = {
  children: PropTypes.node.isRequired
};


export default HomePageWrapper;
