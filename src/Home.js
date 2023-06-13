import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { states } from './utils';
import Member from './Member';


const Home = () => {
  const [selectedState, setSelectedState] = useState();
  const [stateSenators, setStateSenators] = useState([]);

  const statesList = Object.keys(states).map((s) => {
    return (
        <Picker.Item key={s} label={s} value={s} />
    );
  });

  const selectState = () => {
    fetch("https://api.propublica.org/congress/v1/members/senate/"+ states[selectedState] +"/current.json", {
      headers: {'X-API-Key': 'tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI'}
    })
    .then(response => response.json())
    .then(data => setStateSenators(data.results));
    listStateCongressmen();
  };

  const listStateCongressmen = () => {
    if (stateSenators.length > 0) {
      return (  
        stateSenators.map((s) => {
          return <Member stateSenator={s}/>
        })
      )
    };
  };

  return (
    <View>
      <Text style={styles.title}>
        Slect State
      </Text>

      <Picker
        selectedValue={selectedState}
        onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}>
        {statesList}
      </Picker>

      <TouchableOpacity style={styles.button} onPress={selectState}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
      
      {listStateCongressmen()}
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
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