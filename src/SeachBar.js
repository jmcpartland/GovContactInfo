import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const SeachBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm)
  };

  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color="black" />

      <TextInput
        placeholder='Search for Congressman'
        style={styles.input} 
        onChangeText={handleSearch}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // flex: 1,
    flexDirection: 'row',
  },
  input: {
    margin: 5,
    height: 40,
    width: '90%',
    padding: 5,
    backgroundColor: '#fff',
  },
});

export default SeachBar;
