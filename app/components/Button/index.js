import React, { PropTypes, Children } from 'react';

import A from './A';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';


const Button = (props) => {
  const {
    children,
    href,
    onClick,
    handleRoute,
    ...rest
  } = props;

  let button = (
    <A
      href={href}
      onClick={onClick}
      {...rest}
    >
      {Children.toArray(children)}
    </A>
  );

  if (handleRoute) {
    button = (
      <StyledButton
        onClick={handleRoute}
      >
        {Children.toArray(children)}
      </StyledButton>
    );
  }

  return (
    <Wrapper>
      {button}
    </Wrapper>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  handleRoute: PropTypes.func,
  children: PropTypes.node.isRequired
};


export default Button;
