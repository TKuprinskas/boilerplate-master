import React from 'react';
import { Box, FlexWrapper, Image, Typography } from 'components';
import { Colors } from 'styles/theme';

interface CategoryCardProps {
  src: string;
  title: string;
  backgroundColor?: Colors | string;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  borderRadius?: number;
  display?: string;
  border?: string;
  margin?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  src,
  title,
  backgroundColor,
  children,
  width,
  height,
  borderRadius,
  display,
  margin,
  ...props
}) => {
  return (
    <FlexWrapper
      flexDirection="column"
      width={width}
      height={height}
      alignItems="center"
      backgroundColor="secondary"
      padding="8px"
      borderRadius="br30"
      margin={margin}
    >
      <Image src={src} />
      <Typography
        type="body16"
        color="black"
        fontFamily="base"
        fontWeight="fw600"
        margin="50px 0 0 0"
        fontSize="fs18"
      >
        {title}
      </Typography>
    </FlexWrapper>
  );
};
