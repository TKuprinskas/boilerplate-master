import React from 'react';

import { Header } from './sections/Header';
import { HotRecipes } from './sections/HotRecipes';
import { Categories } from './sections/Categories';
import { TastyRecipes } from './sections/TastyRecipes';
import { Chef } from './sections/Chef';
import { Subscribe } from './sections/Subscribe';
import { Footer } from './sections/Footer';
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
