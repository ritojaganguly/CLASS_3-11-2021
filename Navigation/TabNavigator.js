import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from "./screens/Feed";
import CreateStory from './screens/CreateStory';

const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreateStory" component={CreateStory} />
      </Tab.Navigator>
    )
}

export default BottomTabNavigator;