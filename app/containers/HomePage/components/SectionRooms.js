import styled from 'styled-components';

import media from 'styles/media';


const SectionRooms = styled.section`
  width: 30%;
  height: calc(100vh - 160px);
  overflow: auto;
  flex-grow: 1;
  margin-bottom: 20px;

  ${media.tablet`
    margin-top: 2em;
    width: 100%;
  `}
`;


export default SectionRooms;
