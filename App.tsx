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
  GuessRounds:number,
  
}
export default function App(props:AppProp) {

  const [userNumber, setUserNumber] =useState(0);
  const [gameIsOver, setGameIsOver]= useState(true);
  const [guessRounds, setGuessRounds]=useState(0);
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
  function GameOver(numberOfRounds:number){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function NewGame(){
    setGameIsOver(false);
    setUserNumber(0);
    setGuessRounds(0);
  }
  let screen= <StartGameScreen onPickedNumber={pickedNumberHandler} />;
  if (userNumber){
   // console.log(userNumber);
    screen= <GameScreen  userNumber={userNumber} onGameOver={GameOver}/>

  }
  if (gameIsOver && userNumber){
      screen= <GameOverScreen  GuessRounds={guessRounds} userNumber={userNumber} onGameOver={GameOver} onStartNewGame={NewGame}></GameOverScreen>
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
