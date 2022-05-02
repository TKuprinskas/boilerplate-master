import React from 'react';
import {
  SectionWrapper,
  Box,
  FlexWrapper,
  Container,
  ContentWrapper,
  Image,
  Typography,
} from 'components';
import { useQuery } from 'styles/breakpoints';

export const Chef: React.FC = () => {
  const { isTablet } = useQuery();
  return (
    <SectionWrapper>
      <Box>
        <FlexWrapper width="100%" flexDirection={isTablet ? 'column' : 'row'}>
          <FlexWrapper
            width={isTablet ? '100%' : '50%'}
            flexDirection="column"
            justifyContent="center"
          >
            <ContentWrapper padding="0" margin="0">
              <Typography type="h4" color="black" fontFamily="base">
                Spicy delicious chicken wings
              </Typography>
              <Typography type="body16" color="black" fontFamily="base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veniam unde
                officiis itaque soluta quos eaque sunt quae, nobis ipsam doloremque maxime
                perferendis ut error iusto suscipit exercitationem dolorum rem?
              </Typography>
            </ContentWrapper>

            <FlexWrapper
              width="200px"
              backgroundColor="black"
              borderRadius="br8"
              height="60px"
              justifyContent="center"
              marginTop="72px"
              margin={isTablet ? '10px auto' : ''}
            >
              <Typography type="body16" color="white" margin="0 1rem 0 0" fontFamily="base">
                Learn More
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
          <ContentWrapper
            width={isTablet ? '100%' : '50%'}
            textAlign={isTablet ? 'center' : 'right'}
            padding={isTablet ? '0' : ''}
            margin={isTablet ? '20px 0' : ''}
          >
            <Image
              src="cookchef"
              alt=""
              width={isTablet ? '100%' : '710px'}
              height={isTablet ? '' : '597px'}
            />
          </ContentWrapper>
        </FlexWrapper>
      </Box>
    </SectionWrapper>
  );
};
