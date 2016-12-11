import styled from 'styled-components';

import media from 'styles/media';

import H2 from 'components/H2';


const LabelFilter = styled(H2)`
  ${media.tablet`
    margin-bottom: 0;
  `}
`;


export default LabelFilter;
