import React from 'react';
import { Link } from 'gatsby';
import { Box, FlexWrapper, SectionWrapper, Typography } from 'components';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useQuery } from 'styles/breakpoints';

const menuItems = [
  {
    name: 'Recipes',
    link: '/recipes',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
  {
    name: 'About us',
    link: '/about',
  },
];

const socialItems = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/',
    icon: <FaFacebookF color="black" />,
  },
  {
    name: 'Twitter',
    link: 'https://www.twitter.com/',
    icon: <FaTwitter color="black" />,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/',
    icon: <FaInstagram color="black" />,
  },
];

export const Footer: React.FC = () => {
  const { isTablet } = useQuery();
  return (
    <SectionWrapper borderBottom="1px solid rgba(0, 0, 0, 0.1);">
      <FlexWrapper
        justifyContent="space-between"
        borderBottom="primary"
        flexDirection={isTablet ? 'column' : 'row'}
      >
        <FlexWrapper flexDirection="column" textAlign={isTablet ? 'center' : 'left'}>
          <Typography type="h7" color="black" fontFamily="bold">
            Foodieland
          </Typography>
          <Typography type="body16" color="black" fontFamily="base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </FlexWrapper>
        <FlexWrapper
          justifyContent="space-between"
          alignItems="center"
          width="30%"
          flexDirection={isTablet ? 'column' : 'row'}
          margin={isTablet ? '0 auto' : '0'}
          marginBottom={isTablet ? '30px' : '0'}
        >
          {menuItems.map((item) => (
            <Box key={item.name}>
              <Link
                to={item.link}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                {item.name}
              </Link>
            </Box>
          ))}
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper
        justifyContent="space-between"
        marginTop="48px"
        flexDirection={isTablet ? 'column' : 'row'}
      >
        <Typography
          type="body16"
          color="black"
          fontFamily="base"
          fontSize="fs18"
          fontWeight="fw500"
          margin="0 auto"
          textAlign={isTablet ? 'center' : ''}
        >
          © 2020 Flowbase. Powered by Webflow
        </Typography>
        <FlexWrapper
          justifyContent={isTablet ? 'space-around' : 'space-between'}
          width={isTablet ? '100%' : '5%'}
          alignItems="center"
          marginTop={isTablet ? '20px' : ''}
        >
          {socialItems.map((item) => (
            <Box key={item.name}>
              <a href={item.link}>{item.icon}</a>
            </Box>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
};
