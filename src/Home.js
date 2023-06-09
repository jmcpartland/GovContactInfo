import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { usStates, usStatesShort } from './utils';


const Home = () => {
  const [selectedState, setSelectedState] = useState();

  const usStatesList = usStates.map((s) => {
    return (
        <Picker.Item key={s} label={s} value={s} />
    );
  });

  const selectState = () => {
    return (
      <Text>{selectedState}</Text>
    )
  };

  return (
    <View>
      <Text style={styles.title}>Choose State</Text>
      <Picker
        selectedValue={selectedState}
        prompt="Pick one, just one"
        onValueChange={(itemValue, itemIndex) =>
          setSelectedState(itemValue)
      }>
        {usStatesList}
      </Picker>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>

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