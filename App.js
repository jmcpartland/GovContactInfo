import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DataProvider } from "./src/context";
import MembersList from './src/MembersList';
import Home from './src/Home';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <DataProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Lookup Your Members of Congress" 
              component={Home}
              
            />
            <Stack.Screen 
              name="MembersList" 
              component={MembersList}
              options={{ title: 'Members of Congress' }}
            />
          </Stack.Navigator>
        </DataProvider>
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
    marginBottom: 80,
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
