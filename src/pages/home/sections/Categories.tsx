import React from 'react';
import {
  Box,
  FlexWrapper,
  Container,
  ContentWrapper,
  Image,
  Typography,
  SectionWrapper,
  CategoryCard,
} from 'components';
import { useQuery } from 'styles/breakpoints';

const categoryItems = [
  {
    src: 'breakfast',
    title: 'Breakfast',
    backgroundColor: 'breakfast',
  },
  {
    src: 'vegan',
    title: 'Vegan',
    backgroundColor: 'vegan',
  },
  {
    src: 'meat',
    title: 'Meat',
    backgroundColor: 'meat',
  },
  {
    src: 'dessert',
    title: 'Dessert',
    backgroundColor: 'dessert',
  },
  {
    src: 'lunch',
    title: 'Lunch',
    backgroundColor: 'lunch',
  },
  {
    src: 'chocolate',
    title: 'Chocolate',
    backgroundColor: 'chocolate',
  },
];

export const Categories: React.FC = () => {
  const { isTablet } = useQuery();
  return (
    <SectionWrapper>
      <Typography type="h3" color="black" fontFamily="base">
        Categories
      </Typography>
      <FlexWrapper justifyContent="space-between" flexDirection={isTablet ? 'column' : 'row'}>
        {categoryItems.map((item, index) => (
          <CategoryCard
            key={index}
            src={item.src}
            title={item.title}
            display="flex"
            width="180px"
            height="202px"
            margin={isTablet ? '10px auto' : ''}
          />
        ))}
      </FlexWrapper>
    </SectionWrapper>
  );
};
