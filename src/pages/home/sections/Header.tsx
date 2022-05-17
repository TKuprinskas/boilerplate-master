import React from 'react';
import { Link } from 'gatsby';
import { Box, FlexWrapper, SectionWrapper, Typography } from 'components';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useQuery } from 'styles/breakpoints';

const menuItems = [
  {
    name: 'Home',
    link: '/',
  },
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

export const Header: React.FC = () => {
  const { isTablet } = useQuery();
  return (
    <SectionWrapper borderBottom="1px solid rgba(0, 0, 0, 0.1);">
      <FlexWrapper flexDirection={isTablet ? 'column' : 'row'} marginTop={isTablet ? '-30px' : '0'}>
        <Box textAlign={isTablet ? 'center' : 'left'}>
          <Typography type="h7" color="black" fontFamily="bold">
            Foodieland
          </Typography>
        </Box>
        <FlexWrapper
          justifyContent="space-between"
          width="30%"
          margin="0 auto"
          flexDirection={isTablet ? 'column' : 'row'}
          alignItems="center"
        >
          {menuItems.map((item) => {
            const { name, link } = item;
            return (
              <Box key={item.name} marginTop={isTablet ? '10px' : '0'}>
                <Link
                  to={link}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontWeight: '500',
                  }}
                >
                  {name}
                </Link>
              </Box>
            );
          })}
        </FlexWrapper>
        <FlexWrapper
          width={isTablet ? '100%' : '5%'}
          alignItems="center"
          justifyContent={isTablet ? 'space-around' : 'space-between'}
          marginTop={isTablet ? '20px' : '0'}
        >
          {socialItems.map((item) => {
            const { name, link, icon } = item;
            return (
              <Box key={item.name}>
                <a href={item.link}>{item.icon}</a>
              </Box>
            );
          })}
        </FlexWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
};
