import React from 'react';
import {StyleSheet, TextInput} from 'react-native';


export default function Input({...props}) {
    return <TextInput {...props} style={styles.input} />
  }
  

const styles = StyleSheet.create({
    input: {
        color: '#676565',
        backgroundColor: '#E1E1E1',
        width: '90%',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        fontWeight: "600"
    }
});