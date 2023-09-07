import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Member from './Member';

function MembersList({route, navigation}) {
  const {stateCongress, selectedState} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleTop}>{selectedState}</Text>
      <Text style={styles.title}>Members of Congress</Text>
      <FlatList
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
        data={stateCongress}
        renderItem={({item}) => <Member congressman={item} selectedState={selectedState} navigation={navigation} />}
        keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
}

export default MembersList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  titleTop: {
    color: '#002868',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top',
    marginTop: 10,
  },
  title: {
    color: '#002868',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top',
    marginBottom: 25,
  },
});
