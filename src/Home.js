import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { usStates, usStatesShort } from './utils';
import Member from './Member';


const Home = () => {
  const [selectedState, setSelectedState] = useState();
  const [stateSenators, setStateSenators] = useState([])

  const usStatesList = usStates.map((s) => {
    return (
        <Picker.Item key={s} label={s} value={s} />
    );
  });

  const selectState = () => {
    fetch("https://api.propublica.org/congress/v1/members/senate/RI/current.json", {
      headers: {'X-API-Key': 'tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI'}
    })
    .then(response => response.json())
    .then(data => {
      setStateSenators(data.results)
    });
    listStateCongressmen();
  };

  const listStateCongressmen = () => {
    // if (stateSenators.length > 0) {
    //   return <Text>Test</Text>
    // }
    if (stateSenators.length > 0) {
      return (  
        stateSenators.map((s) => {
          return <Member stateSenators={s}/>
        })
      )
    };
  }

  return (
    <View>
      <Text style={styles.title}>
        Slect State
      </Text>

      <Picker
        selectedValue={selectedState}
        onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}>
        {usStatesList}
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
    fontSize: 18,
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