import React from "react";
import { SafeAreaView, View, FlatList, ScrollView, TouchableOpacity, TouchableHighlight, Image, StyleSheet, Text, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
];

const Item = ({ title, avatar }) => (
  <TouchableHighlight>
    <View style={{ flex: 1,  flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderColor: "#161717" }}>
      <Image source={{uri: avatar}} style={{ width: 40, height: 40, borderRadius: 50 }} />
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 15, fontWeight: '700', color: '#ededed' }}>{title}</Text>
          <Text style={{ fontSize: 13, color: '#c7c7c7'}}><Icon name="message" size={10} color="#c7c7c7" /> 1, Matinho</Text>
        </View>
    </View>
  </TouchableHighlight>
);

const App = ({navigation}) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} avatar={item.avatar} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {DATA.length == 0 ? 
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="archive" size={80} color="#1a1a1a"/>
        </View>
        :
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      }
      <TouchableOpacity style={{position: 'absolute', bottom: 0, right: 0, margin: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFB800', borderRadius: 50, width: 60, height: 60}}                 
        onPress={() => {    
            navigation.navigate('CreateTopic')
        }}>
        <Icon name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080214'
  },
  item: {
    backgroundColor: '#171717',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 3

  },
  topicContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontSize: 32,
    color: '#fff',
  }
});

export default App;