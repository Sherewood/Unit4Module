import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreens';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
export default function App() {
  const [userNumber, setUserNumber] =useState();
  function pickedNumberHandler(pickedNumber:any){
      setUserNumber(pickedNumber);
  }
  let screen= <StartGameScreen/>;
  if (userNumber){
    screen= <GameScreen />

  }
  return <View >
<SafeAreaView style={styles.rootScreen}>
    <StartGameScreen onPickNumber= {pickedNumberHandler} />
    
  </SafeAreaView>
  </View>
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    backgroundColor: '#ddb52f'
  },
});
