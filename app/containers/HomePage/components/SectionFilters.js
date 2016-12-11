import styled from 'styled-components';

import media from 'styles/media';


const SectionFilters = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  margin-right: 30px;

  ${media.tablet`
    margin-right: 0;
  `}
`;


export default SectionFilters;
