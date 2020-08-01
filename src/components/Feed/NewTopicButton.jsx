import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function NewTopicButton({...props}) {
    return (
        <TouchableOpacity {...props} style={styles.button} >
            <Icon name="plus" size={30} color="#000" />
        </TouchableOpacity>
    )
}
  

const styles = StyleSheet.create({
    button: {
        position: 'absolute', 
        bottom: 0, 
        right: 0, 
        margin: 20, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#D8802E', 
        borderRadius: 50, 
        width: 60, 
        height: 60
    }
});