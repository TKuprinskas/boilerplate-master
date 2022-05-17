import React from 'react';
import { SectionWrapper, Box, FlexWrapper, ContentWrapper, Image, Typography } from 'components';
import { FaClock, FaUtensils, FaPlayCircle } from 'react-icons/fa';
import { useQuery } from 'styles/breakpoints';

export const HotRecipes: React.FC = () => {
  const { isTablet } = useQuery();
  return (
    <SectionWrapper>
      <Box backgroundColor="secondary" borderRadius="br30">
        <FlexWrapper width="100%" flexDirection={isTablet ? 'column' : 'row'}>
          <FlexWrapper width={isTablet ? '100%' : '50%'} flexDirection="column" marginTop="50px">
            <ContentWrapper margin={isTablet ? '0 auto' : '0 0 0 50px'}>
              <FlexWrapper
                backgroundColor="white"
                width={isTablet ? '100%' : '156px'}
                borderRadius="br8"
                padding="8px"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Image src="hotRecipes" width="24px" />
                <Typography type="body16" color="black" margin="0 0 0 8px" fontFamily="base">
                  Hot Recipes
                </Typography>
              </FlexWrapper>
            </ContentWrapper>

            <ContentWrapper margin={isTablet ? '0 auto' : '-50px 50px 0 50px'}>
              <Typography type="h1" color="black" fontFamily="base">
                Spicy delicious chicken wings
              </Typography>
            </ContentWrapper>

            <ContentWrapper margin={isTablet ? '0 auto' : '-50px 50px 0 50px'}>
              <Typography type="body16" color="black" fontFamily="base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore veniam unde
                officiis itaque soluta quos eaque sunt quae, nobis ipsam doloremque maxime
                perferendis ut error iusto suscipit exercitationem dolorum rem?
              </Typography>
            </ContentWrapper>

            <FlexWrapper flexDirection={isTablet ? 'column' : 'row'}>
              <FlexWrapper
                backgroundColor="primary"
                width={isTablet ? '60%' : '156px'}
                borderRadius="br30"
                padding="8px"
                justifyContent="space-evenly"
                margin={isTablet ? '0 auto' : '0 0 0 50px'}
                alignItems="center"
              >
                <FaClock size="24px" />
                <Typography type="body16" color="black" margin="0 0 0 8px" fontFamily="base">
                  30 Minutes
                </Typography>
              </FlexWrapper>

              <FlexWrapper
                backgroundColor="primary"
                width={isTablet ? '60%' : '156px'}
                borderRadius="br30"
                padding="8px"
                justifyContent="space-evenly"
                margin={isTablet ? '0 auto' : '0 0 0 50px'}
                marginTop={isTablet ? '10px' : ''}
                alignItems="center"
              >
                <FaUtensils size="24px" />
                <Typography type="body16" color="black" margin="0 0 0 8px" fontFamily="base">
                  Chicken
                </Typography>
              </FlexWrapper>
            </FlexWrapper>

            <FlexWrapper
              justifyContent="space-between"
              flexDirection={isTablet ? 'column' : 'row'}
              marginTop={isTablet ? '50px' : '0'}
            >
              <FlexWrapper
                width={isTablet ? '60%' : '156px'}
                alignItems="center"
                margin={isTablet ? '0 auto' : '104px 50px 0 50px'}
              >
                <Image src="person" width="50px" />
                <FlexWrapper flexWrap="wrap">
                  <Typography type="body16" color="black" fontWeight="fw700" fontFamily="Inter">
                    John Smith
                  </Typography>
                  <Typography
                    type="body16"
                    color="black"
                    fontWeight="fw400"
                    fontFamily="base"
                    fontSize="fs14"
                  >
                    15 March 2022
                  </Typography>
                </FlexWrapper>
              </FlexWrapper>

              <FlexWrapper
                width="200px"
                alignItems="center"
                backgroundColor="black"
                borderRadius="br8"
                height="60px"
                margin={isTablet ? '0 auto' : '104px 50px 0 50px'}
                marginBottom={isTablet ? '50px' : ''}
              >
                <FlexWrapper alignItems="center" margin="0 auto">
                  <Typography type="body16" color="white" margin="0 1rem 0 0" fontFamily="Inter">
                    View Recipes
                  </Typography>
                  <FaPlayCircle size="24px" color="white" />
                </FlexWrapper>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
          <Image
            src="badge"
            width={isTablet ? '0%' : '100%'}
            margin={isTablet ? '0 auto' : '50px 0'}
          />
          <ContentWrapper width={isTablet ? '95%' : ''} textAlign="left" margin="0">
            <Image
              src="chicken"
              alt=""
              width={isTablet ? '100%' : '800px'}
              height={isTablet ? '' : '660px'}
            />
          </ContentWrapper>
        </FlexWrapper>
      </Box>
    </SectionWrapper>
  );
};
