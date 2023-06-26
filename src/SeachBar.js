import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const SeachBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm)
  };

  return (
    <View>
      <Text style={styles.heading}>Search for Congress Member:</Text>
        <View style={styles.container}>
          <AntDesign style={styles.searchIcon} name="search1" size={22} color="black" />
          <TextInput
            style={styles.input} 
            placeholder='Search for Congressman'
            onChangeText={handleSearch}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // flex: 1,
    flexDirection: 'row',
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
  searchIcon: {
    paddingRight: 10,
    // backgroundColor: '#fff',
},
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#424242',
},
});

export default SeachBar;
