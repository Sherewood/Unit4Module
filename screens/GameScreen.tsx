import React, {useState,useEffect} from 'react';
import {Ionicons} from '@expo/vector-icons';
import {Alert, FlatList, Text, View,StyleSheet} from 'react-native';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainers';
import PrimaryButton from '../components/PrimaryButton';
import GuessLogItem from '../components/GuessLogItem';
let minBoundary =1;
let maxBounary =100;

type GameScreenProps={
    userNumber:number,
    onGameOver: (arg0: number)=>void,
  

}

function GameScreen ({userNumber,onGameOver}:GameScreenProps)
{
    function generateRandomBetween (min: number,max: number,exclude: number){
        if (min==exclude-1 && max==exclude+1)
        {
            console.log('return');
            return exclude;
        }
        const rndNum= Math.floor(Math.random() * (max-min))+min;
        if (rndNum ===exclude){
            return generateRandomBetween(min,max,exclude);
        }
        else{
            return rndNum;
        }
    }
    const initalGuess =generateRandomBetween (1,100,userNumber);
    const [currentGuess, setCurrentGuess]= useState(initalGuess);
    const [guessRounds,setGuessRounds]= useState([initalGuess]);
    useEffect(() =>{
        if (currentGuess ===userNumber){
            console.log("PAYPAYA");
            onGameOver(guessRoundsLenght);
        }
    },[currentGuess,userNumber,onGameOver]);
    useEffect(()=>{
        minBoundary=1;
        maxBounary=100;
    },[]);
    function nextGuessHandler(direction:'lower'|'greater') {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess >userNumber)
        ){
            Alert.alert("Don't Lie!","You know that this is wrong....",[
                {text:'Sorry!',style:'cancel'},
            ]);
            return;
        }
        if (direction== 'lower'){
            maxBounary= currentGuess+1;
        }
        else if(direction=='greater'){
            minBoundary=currentGuess;
        }
            console.log(minBoundary+ " "+ maxBounary+" "+ currentGuess);
            const newGuess = generateRandomBetween (minBoundary,maxBounary,currentGuess);
            setCurrentGuess(newGuess);
            setGuessRounds(prevGuessRoudns => [newGuess,...prevGuessRoudns]);
           
            console.log("NEW "+minBoundary+ " "+ maxBounary+" "+ currentGuess);
        



        return;
    }
    const guessRoundsLenght= guessRounds.length;
    return(
    <View style={stlyes.screen}>
        <Title>Oppenent's Guess</Title>
        <NumberContainer children={currentGuess} ></NumberContainer>
        <View>
            <Text>Higher or Lower</Text>
            <View style={stlyes.buttonsContainer}>
                <View style={stlyes.buttonContainer}>
            <PrimaryButton  pressHandler={function (): void {
                nextGuessHandler('greater');
            } }><Ionicons name='md-add' color='white'></Ionicons></PrimaryButton>
                 </View>
            </View>
            <View style={stlyes.buttonsContainer}>
                <View style={stlyes.buttonContainer}>
            <PrimaryButton pressHandler={function (): void {
                nextGuessHandler('lower');
            }}><Ionicons name='md-remove' color='yellow'></Ionicons></PrimaryButton>
                 </View>
            </View>
        </View>
        <View style={stlyes.listContainer}>
           <FlatList   data={guessRounds} renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsLenght-itemData.index} guess={itemData.item}></GuessLogItem>} ></FlatList> 
    
        </View> 
        
        

    </View>
    );
}
// for line 96 keyExtractor={(item)=>item}

export default GameScreen;
const stlyes =StyleSheet.create({
    screen: {
        //flex: 1,
        padding:24,
        alignItems:'center',
        marginTop:100
    },
    instructionText:{
        marginBottom:12,
    },
    buttonsContainer:{
        flexDirection: 'row',
    },
    buttonContainer:{
        flex:1,
    },
    listContainer:{
        flex:0,
        padding:16,

    },

});
