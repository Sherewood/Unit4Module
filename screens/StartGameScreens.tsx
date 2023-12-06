import {useState} from 'react';
import {StyleSheet,TextInput,Button,Alert,useWindowDimensions, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';
type StartGameScreenProp={
    onPickedNumber: (itm:number)=>void,
    numberInputHandler: (text:string)=>void,
////onChangeText={StartGameScreen.numberInputHandler} on line 33 
}
function StartGameScreen({onPickedNumber}:StartGameScreenProp){
    const [enteredNumber, setEnteredNumber]= useState('');

    const {width,height}= useWindowDimensions();
    function numberInputHandler(enteredText:string){
            setEnteredNumber(enteredText);
    }
    function resetInputHandler(){
        setEnteredNumber('');
    }
    function confirmInputHandler(){
            const chosenNumber = parseInt(enteredNumber);
            if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >99 ){
                Alert.prompt('Invalid Number!',' Number has to be between 1 and 99', [{text:'Okay',style:'destructive', onPress:resetInputHandler}])
                return;

            }
            onPickedNumber(chosenNumber);
    }

    const marginTopDistance= height<400 ? 30 :100;
    return(
     <View style={[stlyes.rootContainer, {marginTop: marginTopDistance}]}>
        <TextInput style={stlyes.numberInput} maxLength={2}  keyboardAppearance='light' autoCapitalize='none'   value={enteredNumber}></TextInput>
         <View style={stlyes.buttonsContainer}>
            <View>
            <PrimaryButton pressHandler={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={stlyes.buttonContainer}>
            <PrimaryButton pressHandler= {confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
    );
}


export default StartGameScreen;
//const deviceHeight = Dimensions.get('window').height;
const stlyes= StyleSheet.create({
    rootContainer:{
        flex: 1,
        //marginTop: deviceHeight <400 ? 30 :100,
        alignItems:'center',
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
        marginTop:100,
        marginHorizontal:24 ,
        padding: 16,
        backgroundColor:Colors.primary500,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'blue',
        shadowOffset: {width: 0, height:2 },
        shadowRadius: 6,
        shadowOpacity:0.35,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize:32,
        borderBottomColor:Colors.primary400,
        borderBottomWidth: 2,
        color: Colors.primary400,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign:'center',

    },
    buttonsContainer:{
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    },
});