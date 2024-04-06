import styled from '@emotion/native';
import React from 'react';
import {Animated} from 'react-native';

const Wrapper = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: #00a8ff;
`;

const Card = styled.View`
  width: 300px;
  height: 300px;

  justify-content: center;
  align-items: center;

  border-radius: 12px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);

  background-color: white;
`;

const CommonText = styled.Text`
  font-size: 50px;
  font-weight: 600;
  color: black;
`;

const AnimatedCard = Animated.createAnimatedComponent(Card);

const ScreenOne = () => {
  return (
    <Wrapper>
      <AnimatedCard>
        <CommonText>1</CommonText>
      </AnimatedCard>
    </Wrapper>
  );
};

export default ScreenOne;
