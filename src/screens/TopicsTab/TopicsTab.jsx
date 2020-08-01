import React, {useEffect, useReducer} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import NewTopicButton from '../../components/Feed/NewTopicButton'
import Feed from '../../components/Feed/Feed'

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#161515'}}>
        <Feed />
    </View>
  );
}