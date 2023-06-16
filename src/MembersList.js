import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar } from 'react-native';
import Member from './Member';
import { states } from './utils';

const MembersList = ({route, navigation}) => {
  const { stateCongress, selectedState } = route.params;

  // const allMembersList = stateCongress.map((s) => {
  //   return <Member key={s.id} congressman={s} selectedState={selectedState}/>
  // });
  
  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleTop}>{selectedState}</Text>
        <Text style={styles.title}>Members of Congress</Text>

          <FlatList
            data={stateCongress}
            renderItem={({item}) => <Member congressman={item} selectedState={selectedState}/>}
            keyExtractor={item => item.id}
          />

        {/* {allMembersList} */}
      </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  titleTop: {
    color: "darkblue",
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top',
    marginTop: 10,
  },
  title: {
    color: "darkblue",
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top',
    marginBottom: 25,
  },
});

export default MembersList;
