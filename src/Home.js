import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';
import { states } from './utils';


const Home = ({ navigation }) => {
  const [selectedState, setSelectedState] = useState();
  const [stateSenators, setStateSenators] = useState([]);
  const [stateHouse, setStateHouse] = useState([]);
  const house = "https://api.propublica.org/congress/v1/members/house/" + states[selectedState] + "/current.json";
  const senate = "https://api.propublica.org/congress/v1/members/senate/" + states[selectedState] + "/current.json";

  const statesList = Object.keys(states).map((s) => {
    return (
        <Picker.Item key={s} label={s} value={s} />
    );
  });

  // const selectState = () => {
  //   fetch(house, {
  //     headers: {'X-API-Key': 'tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI'}
  //   })
  //   .then(response => response.json())
  //   .then(data => setStateCongressmen(data.results))
  //   membersList()
  // };

  const selectState = () => {
    fetch(senate, {
      headers: {'X-API-Key': 'tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI'}
    })
    .then(response => response.json())
    .then(data => setStateSenators(data.results))
    fetchHouse()
  };

  const fetchHouse = () => {
    fetch(house, {
      headers: {'X-API-Key': 'tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI'}
    })
    .then(response => response.json())
    .then(data => {
      // const results = Array.from(data.results)
      // console.log(typeof data.results)
      setStateHouse(data.results)
      // return stateCongressmen
    })
    membersList()
  }




  const membersList = () => {
    // console.log(stateHouse)
    const allMembers = stateSenators.concat(stateHouse)
    // console.log(allMembers)
      navigation.navigate('MembersList', {
        allMembers: allMembers,
        selectedState: selectedState,
      });
  };

  return (
    <View>
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
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  title: {
    color: "darkblue",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top',
  },
  button: {
    padding: 5,
    marginHorizontal: 25,
    marginBottom: 35,
    borderColor: 'black',
    borderRadius: 30,
    backgroundColor: 'lightblue',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    marginHorizontal: 25,
    textAlign: 'center',
    textAlignVertical: 'top',
  },
})