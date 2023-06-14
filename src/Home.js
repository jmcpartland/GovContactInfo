import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { states } from './utils';
import Member from './Member';


const Home = () => {
  const [selectedState, setSelectedState] = useState();
  const [stateCongressmen, setStateCongressmen] = useState([]);

  const statesList = Object.keys(states).map((s) => {
    return (
        <Picker.Item key={s} label={s} value={s} />
    );
  });

  const house = "https://api.propublica.org/congress/v1/members/house/" + states[selectedState] + "/current.json";
  const senate = "https://api.propublica.org/congress/v1/members/senate/" + states[selectedState] + "/current.json";

  const selectState = () => {
    fetch(house, {
      headers: {'X-API-Key': 'tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI'}
    })
    .then(response => response.json())
    .then(data => setStateCongressmen(data.results))
    stateCongressmenList()
  };

  const stateCongressmenList = () => {
    if (stateCongressmen.length > 0) {
      return (
        stateCongressmen.map((s) => {
          return (
            <Member stateCongressman={s} selectedState={selectedState}/>
          )
        })
      )
    };
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
      <View style={styles.container}>

    </View>
      <View>
        <ScrollView>
          {stateCongressmenList()}
        </ScrollView>
      </View>
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