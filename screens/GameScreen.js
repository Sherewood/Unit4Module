import {userState} from 'react';
import {Text} from 'react-native';
import Title from './components/Title';
import NumberContainers from './components/NumberContainers';
let minBoundary =1;
let maxBounary =100;


function GameScreen ({userNumber,onGameOver})
{
    function generateRandomBetween (min,max,exclude){
        const rndNum= Math.floor(Math.random() * (max-min))+min;
        if (rndNum ===exclude){
            return generateRandomBetween(min,max,exclude);
        }
        else{
            return rndNum;
        }
    }
    const initalGuess = generateRandomBetween (1,100,userNumber);
    const [currentGuess, setCurrentGuess]= userState(initalGuess);
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
    function nectGueesHandler(direction) {
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
        <NumberContainers>{currentGuess}</NumberContainers>
        <FlateList
        data={guessRounds}
        renderItem={(itemData) =>(
            <GuessLogItem
            roundNumber= {guessRoundsListLength - itemData.index}
            guess = {itemData.item}
            />
        )}
        keyExtractor= {(item) => item}

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
