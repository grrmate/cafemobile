import React, {useState} from "react";
import { SafeAreaView, View, FlatList, ScrollView, RefreshControl, TouchableOpacity, TouchableHighlight, Image, StyleSheet, Text, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Constants from 'expo-constants';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Lorem ipsum dolor sit amet',
      avatar: 'https://lh3.googleusercontent.com/proxy/-oCk24zi6Li2BQiEaW39wctr9emLU9FnTlbJa7e4hDHlamx_Rw7yKZeoo5DfPThnu9QOTSunQgAkj0ObCMmqZqzJu9XFqTT-3mG_jD_z87OlvCGEUg',
      type: 0
    }
];

import TopicItem from './TopicItem'

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const App = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderItem = ({ item }) => (
    <TopicItem title={item.title} avatar={item.avatar} type={item.type} />
  );

  return (
    <View style={styles.container} >
      {DATA.length == 0 ? 
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>No topics created</Text>
        </View>
        :
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} progressBackgroundColor={"#FFA048"} />
          }
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%'
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