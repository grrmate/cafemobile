import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#080214',
    },

    logo: {
      width: 200,
      height: 200
    },  

    header: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    title: {
      fontWeight: '700',
      fontSize: 20,
      color: '#404040',
      margin: 20
    },

    footer: {
      flex: 1,
      width: '100%',
      backgroundColor: '#F2F2F2',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    }
});

export default styles