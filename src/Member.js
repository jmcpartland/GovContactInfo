import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Member = ({stateSenator}) => {

  const handlePress = () => {
    console.log(stateSenator.id);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.card, styles.shadowProp]}>
        <Text style={styles.name}>
          {stateSenator.short_title} {stateSenator.first_name} {stateSenator.last_name}
        </Text>
      </View>
    </TouchableOpacity> 
  );
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

export default Member;
