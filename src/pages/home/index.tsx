import React from 'react';

import { Categories, Chef, Footer, Header, HotRecipes, Subscribe, TastyRecipes } from './sections';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components/macro';

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HotRecipes />
      <Categories />
      <TastyRecipes />
      <Chef />
      <Subscribe />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
