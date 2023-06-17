import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MemberDetails = ({route, navigation}) => {
  const { congressman } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {congressman.short_title} {congressman.first_name} {congressman.last_name}
      </Text>
    </View>
  );
};

export default MemberDetails;

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
  },
});