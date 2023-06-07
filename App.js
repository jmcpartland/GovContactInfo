import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Member from './src/Member';
import Home from './src/Home';

export default function App() {
  const [allSenators, setAllSenators] = useState({})

  useEffect(() => {
    fetch('https://api.propublica.org/congress/v1/118/senate/members.json', {
      headers: { 
        'X-API-Key': 'tNm5YIP9zO7SCYymYDfjB73IRmhUzMmC8beETVXI'
      }
    })
    .then(response => response.json())
    .then(data => {
      setAllSenators(data.results[0].members)
    })
  }, [])

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
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    textAlignVertical: 'top',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
