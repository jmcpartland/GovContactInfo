import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const SeachBar = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleSearch = (searchTerm) => {
  //   setSearchTerm(searchTerm)
  // };

  return (
    <View>
      <TextInput 
        placeholder='Search for Congressman'
        style={styles.input} 
        // onChangeText={handleSearch}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
  },
});

export default SeachBar;
