import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { states } from './utils';
import { DataContext } from "./context";

const Home = ({ navigation }) => {
  const [selectedState, setSelectedState] = useState();
  const allCongress = useContext(DataContext);

  const statesList = Object.keys(states).map((s) => {
    return (
        <Picker.Item key={s} label={s} value={s} />
    );
  });

  const stateCongress = allCongress.filter((c) => c.state === states[selectedState]);

  const stateCongressSorted = stateCongress.sort(function(a, b) {
    return a["last_name"] - b["last_name"];
});


  const selectState = () => {
    navigation.navigate('MembersList', {
      selectedState: selectedState,
      stateCongress: stateCongressSorted,
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