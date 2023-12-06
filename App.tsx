import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreens';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
type AppProp={
  onPickedNumber:number,
  userNumber:number,
  
}
export default function App(props:AppProp) {

  const [userNumber, setUserNumber] =useState();
  function pickedNumberHandler(pickedNumber:any){
      setUserNumber(pickedNumber);
  }
  let screen= <StartGameScreen onPickedNumber={function (itm: number):void{}} numberInputHandler={pickedNumberHandler} />;
  if (userNumber){
    screen= <GameScreen userNumber={0} onGameOver={function (): void {
      throw new Error('Function not implemented.');
    } } {...props.userNumber, GameOverScreen} />

  }
  return( <View >
<SafeAreaView style={styles.rootScreen}>
    <StartGameScreen onPickedNumber={pickedNumberHandler} numberInputHandler={function (text: string): void {
        throw new Error('Function not implemented.');
      } } />
    
  </SafeAreaView>
  </View>
  )
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    backgroundColor: Colors.primary400,
  },
});
