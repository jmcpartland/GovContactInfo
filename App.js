import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Member from './Member';

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
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text style={styles.title}>Congress Contact Info</Text>
          <FlatList
            data={allSenators}
            renderItem={({item}) => <Member members={item}/>}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});