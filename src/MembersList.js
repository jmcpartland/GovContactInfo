import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const MembersList = ({stateCongressman, selectedState}) => {

  const handlePress = () => {
    console.log(stateCongressman.id);
  };

  const listStateCongressmen = () => {
    if (stateCongressmen.length > 0) {
      return (
        stateCongressmen.map((s) => {
          return (
            <Member stateCongressman={s} selectedState={selectedState}/>
          )
        })
      )
    };
  };
  
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.card, styles.shadowProp]}>
        <Text style={styles.name}>
          {stateCongressman.short_title} {stateCongressman.first_name} {stateCongressman.last_name}
        </Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
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
