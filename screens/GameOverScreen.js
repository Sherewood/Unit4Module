import {Text} from 'react-native';
let minBoundary =1;
let maxBounary =100;

function GameScreen ({userNumber,onGameOver, onstartNewGame})
{
return (
    <View style={stlyes.rootContainer}>
        <Title> Game Over</Title>
    </View>
)
}
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