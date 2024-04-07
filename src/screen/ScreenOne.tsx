import styled from '@emotion/native';
import React, {useRef} from 'react';
import {Animated, PanResponder, View} from 'react-native';

const Wrapper = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: #00a8ff;
`;

const Card = styled(Animated.createAnimatedComponent(View))`
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

const ScreenOne = () => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => onPressIn(),
      onPanResponderRelease: () => onPressOut(),
    }),
  ).current;

  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = () =>
    Animated.spring(scale, {toValue: 0.95, useNativeDriver: true}).start();
  const onPressOut = Animated.spring(scale, {
    toValue: 1,
    useNativeDriver: true,
  }).start;

  return (
    <Wrapper>
      <Card {...panResponder.panHandlers} style={{transform: [{scale}]}}>
        <CommonText>1</CommonText>
      </Card>
    </Wrapper>
  );
};

export default ScreenOne;
