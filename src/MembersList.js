import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Member from './Member';
import { states } from './utils';

const MembersList = ({route, navigation}) => {
  const { stateCongress, selectedState } = route.params;
  
  // const stateCongress = allCongress.filter((c) => c.state === `"${states[selectedState]}"`);
  
  // console.log(allCongress);


  const allMembersList = stateCongress.map((s) => {
    return <Member key={s.id} congressman={s} selectedState={selectedState}/>
  });
  
  return (
      <View>
        <Text style={styles.titleTop}>{selectedState}</Text>
        <Text style={styles.title}>Members of Congress</Text>
        {allMembersList}
      </View>
  )
};

const styles = StyleSheet.create({
  titleTop: {
    color: "darkblue",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top',
    marginTop: 10,
    // marginBottom: 5,
  },
  title: {
    color: "darkblue",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top',
    // marginTop: 10,
    marginBottom: 25,
  },
});

export default MembersList;
