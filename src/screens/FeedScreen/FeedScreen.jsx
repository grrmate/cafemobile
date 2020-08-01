import React, {useEffect, useReducer} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import TopicsTab from '../TopicsTab/TopicsTab'
import RecentTopicsTab from '../RecentTopicsTab/RecentTopicsTab'

export default function App({navigation}) {
  return (
     <Tab.Navigator
        tabBarOptions={{
            labelStyle: { fontSize: 10, fontWeight: "700"},
            style: {backgroundColor: '#1B1B1B'},
            activeTintColor: "#FFA048",
            inactiveTintColor: '#E3E3E3',
            indicatorStyle: {backgroundColor: '#1B1B1B'}
        }}
        
    >
      <Tab.Screen name="Topics" component={TopicsTab} />
      <Tab.Screen name="Recent" component={RecentTopicsTab} />
    </Tab.Navigator>
  );
}

