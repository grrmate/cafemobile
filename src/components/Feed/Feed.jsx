import React from 'react';
import {StyleSheet, TouchableOpacity, ScrollView, TextInputComponent, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import RenderListTopics from './RenderListTopics'
export default function Feed({...props}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <RenderListTopics />
        </View>
    )
}
  