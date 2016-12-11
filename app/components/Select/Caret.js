import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';

const Wrapper = styled.span`
  position: absolute;
  right: 10px;
  top: 8px;
  color: ${(props) => props.theme.grayDark};
`;

const Caret = () => (
  <Wrapper>
    <Icon icon={'caret-down fa-lg'} />
  </Wrapper>
);

export default Caret;
