import React from 'react';
import { Global } from '@emotion/core'
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming'
import { HashRouter, Route } from "react-router-dom";

import { theme, globals } from './styles'
import { ProductList, ProductDetail } from './views';

const StyledRouter = styled(HashRouter)`
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={globals} />
    <StyledRouter>
      <Route path="/" exact component={ProductList} />
      <Route path="/products/:productId" component={ProductDetail} />
    </StyledRouter>
  </ThemeProvider>
);

export default App;
