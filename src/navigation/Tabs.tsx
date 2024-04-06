import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ScreenOne from '../screen/ScreenOne';
import ScreenThree from '../screen/ScreenThree';
import ScreenTwo from '../screen/ScreenTwo';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ScreenOne" component={ScreenOne} />
      <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
      <Tab.Screen name="ScreenThree" component={ScreenThree} />
    </Tab.Navigator>
  );
};

export default Tabs;
