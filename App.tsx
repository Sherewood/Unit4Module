import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreens';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
type AppProp={
  onPickedNumber:number,
  userNumber:number,
  
}
export default function App(props:AppProp) {

  const [userNumber, setUserNumber] =useState(0);
  const [gameIsOver, setGameIsOver]= useState(true);
  function pickedNumberHandler(pickedNumber:number){
      console.log('ads');
      setUserNumber(pickedNumber);
      setGameIsOver(false);
  }
  function numberInputHandler(){
    console.log('Handled');
  }
  function PickedNumer(){
    setUserNumber
  }
  function GameOver(){
    setGameIsOver(true);
  }
  function NewGame(){
    setGameIsOver(false);
    setUserNumber(0);
  }
  let screen= <StartGameScreen onPickedNumber={pickedNumberHandler} />;
  if (userNumber){
   // console.log(userNumber);
    screen= <GameScreen userNumber={userNumber} onGameOver={GameOver}/>

  }
  if (gameIsOver && userNumber){
      screen= <GameOverScreen userNumber={userNumber} onGameOver={GameOver} onStartNewGame={NewGame}></GameOverScreen>
  }
  return( 
    
  <ImageBackground source={require("./assets/darkmagiciangirl.png")} resizeMode="cover" style={styles.rootScreen} >
  <SafeAreaView  >
   
    {screen}
    
  </SafeAreaView>
  </ImageBackground>
 
  )
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    backgroundColor:Colors.primary200,
  },
  ImageBackDrop:{
    opacity:.45,
  }
});
