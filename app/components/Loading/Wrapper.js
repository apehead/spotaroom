import styled from 'styled-components';

const Wrapper = styled.div`
  top: 50%;
  margin: -61px auto;
  width: 40px;
  height: 40px;
  position: relative;
  color: ${(props) => props.theme.primary};
`;

export default Wrapper;
