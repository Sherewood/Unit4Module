import {Text,Image,View,StyleSheet,Dimensions,Button} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import  Colors  from '../constants/colors';
let minBoundary =1;
const deviceWidth= Dimensions.get('window').width;
let maxBounary =100;
type GameOverScreenProps={
    userNumber:number,
    GuessRounds:number,
    onGameOver: (arg0:number)=>void,
    onStartNewGame:()=>void,


}
function GameOverScreen (props:GameOverScreenProps)
{


return (
    <View style={stlyes.rootContainer}>
        <Title>Game Over</Title>
        <View style ={stlyes.imageContainer}>
            <Image 
            style={stlyes.image}
            source={require('../assets/komi.png')}
            />
        </View>
        <Text style={stlyes.summaryText}>
            Your phone needed <Text style= {stlyes.highlight}>{props.GuessRounds}</Text>{''}
             rounds to guess the number{' '}
            <Text style= {stlyes.highlight}>{props.userNumber}</Text>
        </Text>
        <PrimaryButton pressHandler={props.onStartNewGame} >Start New Game </PrimaryButton>
    </View>
)
}
export default GameOverScreen;


const stlyes =StyleSheet.create({
    rootContainer:{
       // flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center',
    },
    imageContainer: {
        width:deviceWidth <380 ?150 : 300,
        height:deviceWidth <380 ?150 : 300,
        borderRadius:deviceWidth <380 ?150 : 300,
        borderWidth:3,
        borderColor: Colors.primary800,
        overflow:'hidden',
        margin:36,
    },
    image:{
        width:'100%',
        height :'100%',
    },
    summaryText:{
        fontWeight: 'bold',
        fontSize:24,
        textAlign: 'center',
        marginBottom:24,
    },
    highlight:{
        fontWeight:'bold',
        color:Colors.primary500,

    },
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