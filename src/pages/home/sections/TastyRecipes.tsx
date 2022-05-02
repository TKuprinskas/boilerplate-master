import React from 'react';
import {
  SectionWrapper,
  ContentWrapper,
  Typography,
  TastyRecipesCard,
  GridWrapper,
  FlexWrapper,
} from 'components';
import { FaClock, FaUtensils } from 'react-icons/fa';
import { useQuery } from 'styles/breakpoints';

const TastyRecipesCardList = [
  {
    src: 'cheeseburger',
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    meal: 'Snack',
    time: '30 Minutes',
    timeIcon: <FaClock />,
    mealIcon: <FaUtensils />,
  },
  {
    src: 'salmon',
    title: 'Fresh Lime Roasted Salmon With Ginger Sauce',
    meal: 'Fish',
    time: '30 Minutes',
    timeIcon: <FaClock />,
    mealIcon: <FaUtensils />,
  },
  {
    src: 'pancake',
    title: 'Strawberry Oatmeal Pancake with Honey Syrup',
    meal: 'Breakfast',
    time: '30 Minutes',
    timeIcon: <FaClock />,
    mealIcon: <FaUtensils />,
  },
  {
    src: 'salad',
    title: 'Fresh and Healthy Mixed Mayonnaise Salad',
    meal: 'Healthy',
    time: '30 Minutes',
    timeIcon: <FaClock />,
    mealIcon: <FaUtensils />,
  },
  {
    src: 'meatballs',
    title: 'Chicken Meatballs with Cream Cheese',
    meal: 'Meat',
    time: '30 Minutes',
    timeIcon: <FaClock />,
    mealIcon: <FaUtensils />,
  },
  {
    src: 'ads',
    title: '',
    meal: '',
    time: '',
    timeIcon: '',
    mealIcon: '',
  },
  {
    src: 'fruitypancake',
    title: 'Fruity Pancake with Orange & Blueberry',
    meal: 'Sweet',
    time: '30 Minutes',
    timeIcon: <FaClock />,
    mealIcon: <FaUtensils />,
  },
  {
    src: 'chickenrice',
    title: 'The Best Easy One Pot Chicken and Rice',
    meal: 'Snack',
    time: '30 Minutes',
    timeIcon: <FaClock />,
    mealIcon: <FaUtensils />,
  },
  {
    src: 'chickenpasta',
    title: 'The Creamiest Creamy Chicken and Bacon Pasta',
    meal: 'Noodles',
    time: '30 Minutes',
    timeIcon: <FaClock />,
    mealIcon: <FaUtensils />,
  },
];

export const TastyRecipes: React.FC = () => {
  const { isTablet } = useQuery();
  return (
    <SectionWrapper>
      <ContentWrapper marginBottom="52px">
        <Typography
          type="h4"
          color="black"
          fontFamily="base"
          margin="0 0 24px 0"
          textAlign="center"
        >
          Simple and tasty recipes
        </Typography>
        <Typography type="body16" color="black" fontFamily="base" margin="0" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
        </Typography>
      </ContentWrapper>
      {!isTablet ? (
        <GridWrapper
          gridGap="40px"
          gridTemplateColumns="repeat(3, auto)"
          justifyContent="space-between"
        >
          {TastyRecipesCardList.map((item, index) => (
            <TastyRecipesCard
              key={index}
              src={item.src}
              title={item.title}
              meal={item.meal}
              time={item.time}
              timeIcon={item.timeIcon}
              mealIcon={item.mealIcon}
            />
          ))}
        </GridWrapper>
      ) : (
        <FlexWrapper
          flexDirection="column"
          width="90%"
          justifyContent="space-between"
          marginBottom="10px"
        >
          {TastyRecipesCardList.map((item, index) => (
            <TastyRecipesCard
              key={index}
              src={item.src}
              title={item.title}
              meal={item.meal}
              time={item.time}
              timeIcon={item.timeIcon}
              mealIcon={item.mealIcon}
            />
          ))}
        </FlexWrapper>
      )}
    </SectionWrapper>
  );
};
