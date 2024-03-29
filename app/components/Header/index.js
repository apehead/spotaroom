import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import HeaderWrapper from './HeaderWrapper';
import HeaderLink from './HeaderLink';
import NavBar from './NavBar';
import Logo from './Logo';
import messages from './messages';


const Header = () => (
  <HeaderWrapper>

    <div>

      <Link to="/">
        <Logo />
      </Link>

      <NavBar>

        <HeaderLink to="/info/company">
          <FormattedMessage {...messages.company} />
        </HeaderLink>

        <HeaderLink to="/info/how-we-work">
          <FormattedMessage {...messages.work} />
        </HeaderLink>

        <HeaderLink to="/info/contact-us">
          <FormattedMessage {...messages.contact} />
        </HeaderLink>

      </NavBar>

    </div>

  </HeaderWrapper>
);


export default Header;
