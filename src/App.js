import React from 'react';
import { Global } from '@emotion/core'
import { Router } from '@reach/router';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming'

import { theme, globals } from './styles'
import { ProductList, ProductDetail } from './views';

const StyledRouter = styled(Router)`
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={globals} />
    <StyledRouter>
      <ProductList path="/" />
      <ProductDetail path="products/:productId" />
    </StyledRouter>
  </ThemeProvider>
);

export default App;
