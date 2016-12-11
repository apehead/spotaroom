import React from 'react';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import theme from 'styles/themes/main';
import Header from 'components/Header';


const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 0 16px;
`;

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>

        <Helmet
          titleTemplate="%s - Spot-A-Room"
          defaultTitle="Spot-A-Room"
        />

        <Header />

        {React.Children.toArray(props.children)}

      </AppWrapper>
    </ThemeProvider>
  );
}

App.propTypes = {
  children: React.PropTypes.node
};


export default App;
