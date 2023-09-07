/* eslint-disable max-len */
import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import SearchBar from './SeachBar';
import {states} from './utils';
import {DataContext} from './context';

const Home = ({navigation}) => {
  const [selectedState, setSelectedState] = useState();
  const allCongress = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");

  const stateCongress = allCongress.filter((c) => c.state === states[selectedState]);
  
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm)
  };

  const statesList = Object.keys(states).map((s) => {
    return <Picker.Item key={s} label={s} value={s} />;
  });

  const stateCongressSorted = stateCongress.sort(function(a, b) {
    return a['last_name'] - b['last_name'];
  });

  const selectState = () => {
    navigation.navigate('MembersList', {
      selectedState: selectedState,
      stateCongress: stateCongressSorted,
    });
  };



  return (
      <SafeAreaView style={styles.container}>
        <SearchBar />
        <Text style={styles.text}>- OR -</Text>
        <Text style={styles.title}>
          Select State
        </Text>
        <Picker
          selectedValue={selectedState}
          onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}>
          {statesList}
        </Picker>
        <TouchableOpacity style={styles.button} onPress={selectState}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    margin: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  title: {
    color: '#002868',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    padding: 5,
    marginHorizontal: 50,
    marginBottom: 35,
    borderRadius: 30,
    backgroundColor: '#002868',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    marginHorizontal: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
