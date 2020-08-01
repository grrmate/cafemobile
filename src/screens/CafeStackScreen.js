import React, {useEffect, useReducer} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';

import I18n from '../i18n/locales'

import FeedScreen from '../screens/FeedScreen/FeedScreen'
import CreateTopicScreen from '../screens/CreateTopicScreen/CreateTopicScreen'

const Stack = createStackNavigator();

import NewTopicButton from '../components/Feed/NewTopicButton'

const Feed = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <FeedScreen/>
      <NewTopicButton onPress={() => {navigation.navigate('CreateTopic')}}/>      
    </View>
  )
}

export default function CafeStackScreen() {
  return (
    <Stack.Navigator screenOptions={{
      headerHideShadow: true,
    }}>
    <Stack.Screen name="Feed" component={Feed}
    options={{
      headerStyle: {
        backgroundColor: '#1B1B1B',

      }
    }}
    />

    <Stack.Screen name="CreateTopic" component={CreateTopicScreen}
      options={{
        headerStyle: {
          backgroundColor: '#1B1B1B',

        }
      }}
    />
    </Stack.Navigator>  
  );
}