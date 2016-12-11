import { Link } from 'react-router';
import styled from 'styled-components';

import media from 'styles/media';

export default styled(Link)`
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  color: ${(props) => props.theme.secondaryLight};

  &:not(:first-child):before {
    content: "-";
    color: ${(props) => props.theme.secondaryLight};
    margin: 0 10px;
  }

  ${media.phablet`
    font-size: 14px;

    &:not(:first-child):before {
      content: "";
    }
  `}


  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;
