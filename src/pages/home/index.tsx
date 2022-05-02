import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { Box, SectionWrapper, Typography, Image } from 'components';
import { useQuery } from 'styles/breakpoints';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components/macro';
import { StaticImage } from 'gatsby-plugin-image';

const Home: React.FC = () => {
  const { isMobile } = useQuery();

  return (
    //NOTE: THIS ISNT A GOOD PRACTICE. WE WILL CREATE A FILE, FOR PROVIDERS.
    <ThemeProvider theme={theme}>
      <SectionWrapper>
        <Box
          backgroundColor={{ _: 'secondary', ltablet: 'primary' }}
          minHeight={isMobile ? '50%' : '100vh'}
          minWidth="100vw"
        >
          <Typography type="h1" textAlign="center">
            Hello world
          </Typography>
          <Image src="gatsbyImg" alt="" />
          <StaticImage
            src="../../assets/images/students.png"
            alt="students"
            placeholder="tracedSVG"
            draggable="false"
          />
        </Box>
      </SectionWrapper>
    </ThemeProvider>
  );
};

export default Home;
