import React from 'react';

import Icon from 'components/Icon';
import Wrapper from './Wrapper';

const Loading = () => (
  <Wrapper>
    <Icon icon={'circle-o-notch fa-spin fa-3x fa-fw'} />
  </Wrapper>
);

export default Loading;
