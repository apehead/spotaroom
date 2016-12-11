import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import messages from 'containers/HomePage/messages';
import Button from 'components/Button';


const StyledButton = styled(Button)`
  width: 100%;
  padding: 20px 15px 15px;
`;

const serializeData = (data) => encodeURIComponent(JSON.stringify(data, null, 4));

const DonwloadSearch = ({ data } = {}) => (
  <StyledButton
    download={'spotaroom.json'}
    href={`data:text/json;charset=utf-8, ${serializeData(data)}`}
  >
    <FormattedMessage {...messages.downloadSearch} />
  </StyledButton>
);


export default DonwloadSearch;
