import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Member from './Member';

const MembersList = ({route, navigation}) => {
  const { allMembers, selectedState } = route.params;

  const allMembersList = allMembers.map((s) => {
    return <Member stateCongressman={s} selectedState={selectedState}/>
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
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
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
  titleTop: {
    color: "darkblue",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top',
    marginTop: 10,
    // marginBottom: 5,
  },
    card: {
    marginHorizontal: 25,
    marginBottom: 15,
    padding: 12,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default MembersList;
