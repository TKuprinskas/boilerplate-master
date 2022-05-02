import React from 'react';
import { FlexWrapper, Image, Typography } from 'components';
import { Colors } from 'styles/theme';
import { useQuery } from 'styles/breakpoints';

interface TastyRecipesCardProps {
  src: string;
  title: string;
  backgroundColor?: Colors | string;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  borderRadius?: number;
  display?: string;
  meal?: string;
  time?: string;
  timeIcon?: React.ReactNode;
  mealIcon?: React.ReactNode;
}

export const TastyRecipesCard: React.FC<TastyRecipesCardProps> = ({
  src,
  title,
  backgroundColor,
  children,
  width,
  height,
  borderRadius,
  display,
  meal,
  time,
  timeIcon,
  mealIcon,
  ...props
}) => {
  const { isTablet } = useQuery();
  return (
    <FlexWrapper
      flexDirection="column"
      alignItems="center"
      backgroundColor="secondary"
      padding="8px"
      borderRadius="br30"
      width={isTablet ? '100%' : '400px'}
      height={isTablet ? 'auto' : '434px'}
      margin={isTablet ? '10px auto' : ''}
    >
      <Image src={src} width="100%" />
      <Typography type="h7" color="black" fontFamily="base" margin="24px">
        {title}
      </Typography>
      <FlexWrapper
        justifyContent={isTablet ? 'center' : 'flex-start'}
        width={isTablet ? '100%' : '400px'}
        marginLeft={isTablet ? '' : '27px'}
        flexDirection={isTablet ? 'column' : 'row'}
      >
        <FlexWrapper
          width="107px"
          justifyContent="space-evenly"
          alignItems="center"
          margin={isTablet ? '0 auto' : ''}
        >
          {timeIcon}
          <Typography type="body16" color="black" fontFamily="base" fontSize="fs14">
            {time}
          </Typography>
        </FlexWrapper>
        <FlexWrapper
          width="107px"
          justifyContent="space-evenly"
          alignItems="center"
          margin={isTablet ? '0 auto' : ''}
        >
          {mealIcon}
          <Typography type="body16" color="black" fontFamily="base" fontSize="fs14">
            {meal}
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};
