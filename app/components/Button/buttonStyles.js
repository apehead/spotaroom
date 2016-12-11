import { css } from 'styled-components';

/* eslint-disable no-confusing-arrow */
const buttonStyles = css`
  display: inline-block;
  font-family: 'Luckiest Guy', cursive;
  padding: 10px 15px 6px;
  color: ${(props) => props.theme.textLight};
  border-bottom: 5px solid ${(props) => props.secondary ? props.theme.secondaryDark : props.theme.primaryDark};
  font-size: 20px;
  line-height: 20px;
  background: ${(props) => props.secondary ? props.theme.secondary : props.theme.primary};
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: 0;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;

  &:hover {
    background: ${(props) => props.secondary ? props.theme.secondaryDark : props.theme.primaryDark};
  }

  &:active {
    background: ${(props) => props.secondary ? props.theme.secondaryDark : props.theme.primaryDark};;
  }
`;
/* eslint-enable */


export default buttonStyles;
