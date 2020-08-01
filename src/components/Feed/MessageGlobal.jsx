import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swipeout from 'react-native-swipeout';


export default function MessageGlobal({type, message, ...props}) {
    const checkType = (n) => {
        switch (n) {
            case 0:
                return Array('#0B6CFF', '#214A87')
                break
            case 1: 
                return Array('#44DF66', '#35AB4F')
                break
            case 2:
                return Array('#DF4444', '#983838')
        }
    }

    return (
        <TouchableOpacity style={{marginVertical: 20, width: '95%'}}>
            <View style={{backgroundColor: checkType(type).map((x) => x)[0], padding: 10, borderRadius: 9, borderWidth: 2, borderColor: checkType(type).map((x) => x)[1]}}>
                <Text style={{color: "#E3E3E3"}}>{message} <Text style={{fontWeight: "bold"}}>Clique para fechar</Text></Text>
            </View>
        </TouchableOpacity>
    )
}
  
