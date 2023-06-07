import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Member = ({senateMember}) => {

  const handlePress = () => {
    console.log(senateMember.id);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.card, styles.shadowProp]}>
        <Text style={styles.name}>
          {senateMember.short_title} {senateMember.first_name} {senateMember.last_name}
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
    margin: 5,
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
