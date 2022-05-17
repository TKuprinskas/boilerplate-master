import React from 'react';
import {
  Box,
  SectionWrapper,
  FlexWrapper,
  InputComponent,
  ContentWrapper,
  Typography,
  Image,
  Button,
} from 'components';
import { useQuery } from 'styles/breakpoints';

export const Subscribe: React.FC = () => {
  const { isTablet } = useQuery();
  return (
    <SectionWrapper>
      <FlexWrapper
        backgroundColor="secondary"
        borderRadius="br60"
        height={isTablet ? '100%' : '442px'}
        flexDirection="column"
      >
        <ContentWrapper textAlign="center">
          <Typography type="h4" color="black" fontFamily="base">
            Deliciousness to your inbox
          </Typography>
          <Typography type="body16" color="black" fontFamily="base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex illum voluptatem
            maiores, corporis ad unde provident possimus fugiat, sunt nesciunt optio obcaecati omnis
            eaque blanditiis harum perferendis dolor in?
          </Typography>

          <FlexWrapper
            width={isTablet ? '100%' : '480'}
            height={isTablet ? '100%' : '80px'}
            borderRadius="br8"
            backgroundColor="white"
            justifyContent={isTablet ? 'center' : 'space-between'}
            alignItems="center"
            padding={isTablet ? '0' : '8px'}
            flexDirection={isTablet ? 'column' : 'row'}
            marginBottom={isTablet ? '60px' : ''}
          >
            <InputComponent
              type="email"
              placeholder="Your email address.."
              margin="0"
              width="90%"
              border="none"
              padding={isTablet ? '0' : '16px'}
            />
            <FlexWrapper
              width={isTablet ? '100%' : '160px'}
              backgroundColor="black"
              borderRadius="br8"
              height={isTablet ? '100%' : '60px'}
              justifyContent="center"
            >
              <Button type="submit" color="white" backgroundColor="black" borderRadius="br8">
                Subscribe
              </Button>
            </FlexWrapper>
          </FlexWrapper>
        </ContentWrapper>
        <FlexWrapper justifyContent="space-between">
          <Image src="subscribeLeft" alt="" width="60%" margin="-145px 0 0 0" />
          <FlexWrapper textAlign="right">
            <Image src="subscribeRight" alt="" width="60%" margin="-60px 0 0 0" />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </SectionWrapper>
  );
};
