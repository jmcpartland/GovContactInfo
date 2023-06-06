import React from 'react';
import {
  StyleSheet,
  Text,
  View  
} from 'react-native';

const Member = ({members}) => {
  const handlePress = () => {
    onPress(deal.key);
  };

  return (
      <View style={styles.info}>
        <Text style={styles.title}>{members.first_name}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    // marginTop: 12,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  info: {
    padding: 10,
    backgroundColor: 'fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
});

export default Member;
