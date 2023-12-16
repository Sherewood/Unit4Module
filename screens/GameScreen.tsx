import React, {useState,useEffect} from 'react';
import {Alert, FlatList, Text, View,StyleSheet} from 'react-native';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainers';
import PrimaryButton from '../components/PrimaryButton';
let minBoundary =1;
let maxBounary =100;

type GameScreenProps={
    userNumber:number,
    onGameOver: ()=>void,

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
            onGameOver();
        }
    },[currentGuess,userNumber,onGameOver]);
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
            maxBounary= currentGuess;
        }
        else if(direction=='greater'){
            minBoundary=currentGuess+1;
        }
            console.log(minBoundary+ " "+ maxBounary+" "+ currentGuess);
            const newGuess = generateRandomBetween (minBoundary,maxBounary,currentGuess);
            setCurrentGuess(newGuess);
            if (currentGuess!=userNumber){setCurrentGuess(currentGuess+1)}
            console.log("NEW "+minBoundary+ " "+ maxBounary+" "+ currentGuess);
        



        return;
    }
    return(
    <View style={stlyes.screen}>
        <Title>Oppenent's Guess</Title>
        <NumberContainer children={currentGuess} ></NumberContainer>
        <View>
            <Text>Higher or Lower</Text>
            <PrimaryButton  pressHandler={function (): void {
                nextGuessHandler('greater');
            } }>+</PrimaryButton>
            <PrimaryButton pressHandler={function (): void {
                nextGuessHandler('lower');
            }}>-</PrimaryButton>
        </View>
        
        

    </View>
    );
}

/*<FlatList
data={guessRounds}
renderItem={(itemData) =>(
    <View> </View>
  //<GuessLogItem
  //  roundNumber= {guessRoundsListLength - itemData.index}
  //  guess = {itemData.item}
  //  />
   

)}
// keyExtractor= {(item) => item}

/>*/
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
        flex:1,
        padding:16,

    },

});
