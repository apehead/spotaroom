import React, { PropTypes } from 'react';
import styled from 'styled-components';

import media from 'styles/media';


const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 20px;

  ${media.tablet`
    align-items: center;
  `}
`;

const HeaderWrapper = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
);

HeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired
};


export default HeaderWrapper;
