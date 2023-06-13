import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const MemberDetails = ({stateSenators}) => {


  return (
      <View style={styles.container}>
        <Text style={styles.name}>
          {stateSenators.short_title} {stateSenators.first_name} {stateSenators.last_name}
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  container: {
    marginHorizontal: 25,
    marginBottom: 15,
    padding: 12,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default MemberDetails;
