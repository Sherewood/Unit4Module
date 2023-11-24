import {Text} from 'react-native';
let minBoundary =1;
let maxBounary =100;

function GameScreen ({userNumber,onGameOver})
{
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
}

<View style={stlyes.listContainer}>
    
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
export default GameOverScreen;
const stlyes =StyleSheet.create({
    screen: {
        flex:1,
        padding:24,
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

    }
});