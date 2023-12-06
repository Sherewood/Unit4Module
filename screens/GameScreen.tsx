import React, {useState,useEffect} from 'react';
import {Alert, FlatList, Text, View,StyleSheet} from 'react-native';
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainers';
let minBoundary =1;
let maxBounary =100;

type GameScreenProps={
    userNumber:number,
    onGameOver: ()=>void,

}

function GameScreen ({userNumber,onGameOver}:GameScreenProps)
{
    function generateRandomBetween (min: number,max: number,exclude: number){
        const rndNum= Math.floor(Math.random() * (max-min))+min;
        if (rndNum ===exclude){
            return generateRandomBetween(min,max,exclude);
        }
        else{
            return rndNum;
        }
    }
    const initalGuess = generateRandomBetween (1,100,userNumber);
    const [currentGuess, setCurrentGuess]= useState(initalGuess);
    const [guessRounds,setGuessRounds]= useState([initalGuess]);
    useEffect(() =>{
        if (currentGuess ===userNumber){
            onGameOver();
        }
    },[currentGuess,userNumber,onGameOver]);
    useEffect(() =>{
        minBoundary=1;
        maxBounary=100;

    },[]);
    function nectGueesHandler(direction:'lower'|'greater') {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess >userNumber)
        ){
            Alert.alert("Don't Lie!","You know that this is wrong....",[
                {text:'Sorry!',style:'cancel'},
            ]);
        }
        return;
    }
    return(
    <View style={stlyes.screen}>
        <Title>Oppenent's Guess</Title>
        <NumberContainer children={currentGuess} ></NumberContainer>
        <FlatList
        data={guessRounds}
        renderItem={(itemData) =>(
            <View>
                <Text>Fart</Text>
            </View>
           // <GuessLogItem
           // roundNumber= {guessRoundsListLength - itemData.index}
           // guess = {itemData.item}
           // />
        )}
        //keyExtractor= {(item) => item}

    />
    </View>
    );
}


export default GameScreen;
const stlyes =StyleSheet.create({
    screen: {
        flex:1,
        padding:24,
        alignItems:'center'
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
