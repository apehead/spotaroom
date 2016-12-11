import styled from 'styled-components';

const A = styled.a`
  color: ${(props) => props.theme.link};

  &:hover {
    color: ${(props) => props.theme.linkHover};
  }

  &:visited {
    color: ${(props) => props.theme.linkVisited};
  }
`;

export default A;
