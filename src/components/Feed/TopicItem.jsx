import React from 'react';
import {StyleSheet, TouchableHighlight, TextInputComponent, View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    AdMobBanner,
    AdMobInterstitial,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';

export default function TopicItem({ avatar, title, type, ...props}) {
    return (
        <View>
            <TouchableHighlight style={{marginVertical: 5,  width: "100%"}}>
                <View style={{ flex: 1,  flexDirection: 'row', borderRadius: 9, padding: 15, backgroundColor: '#212121' }}>
                <Image source={{uri: avatar}} style={{ width: 40, height: 40, borderRadius: 50 }} />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={{ fontSize: 15, fontWeight: '700', color: '#E3E3E3' }}>{title}</Text>
                        <Text style={{ marginVertical: 5,fontSize: 13, fontWeight: '600', color: '#E3E3E3'}}>1, Mescouleur</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}
  