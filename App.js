import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Member from './src/Member';
import Home from './src/Home';
import { usStates, usStatesShort } from './src/utils';

export default function App() {

  return (
    <NavigationContainer>
      <SafeAreaProvider>
          <SafeAreaView>
            <View>
              <Text style={styles.title}>Lookup Your Congressman</Text>
              <Home />
            </View>
          </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    textAlignVertical: 'top',
  },
  states: {
    fontSize: 13,
    // fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
    textAlignVertical: 'top',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
