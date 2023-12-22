import {useState} from 'react';

import {StyleSheet,TextInput, Alert,useWindowDimensions, View,Text,ImageBackground} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/Title';
type StartGameScreenProp={
    onPickedNumber: (itm:number)=>void,
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
                console.log('re');
                Alert.alert('Invalid Number!',' Number has to be between 1 and 99', [{text:'Okay',style:'cancel', onPress:resetInputHandler}])
                return;

            }
            onPickedNumber(chosenNumber);
            console.log(onPickedNumber);
    }
    

    const marginTopDistance= height<400 ? 30 :100;
    return(
     <View style={[stlyes.rootContainer, {marginTop: marginTopDistance}]}>
        <Title> Welcome to the Game</Title>
        <TextInput style={stlyes.numberInput} maxLength={3} keyboardType='phone-pad' keyboardAppearance='dark'  autoCapitalize='none' value={enteredNumber} onChangeText={numberInputHandler}></TextInput>
         <View style={stlyes.buttonsContainer}>
            <Text > Guess a number </Text>
            <View style={stlyes.buttonContainer}>
            <PrimaryButton pressHandler={resetInputHandler} >RESET</PrimaryButton>
            </View>
            <View style={stlyes.buttonContainer}>
            <PrimaryButton pressHandler= {confirmInputHandler} >Confirm</PrimaryButton>
            </View>
        </View>
    </View>
    );
}


export default StartGameScreen;
//const deviceHeight = Dimensions.get('window').height;
const stlyes= StyleSheet.create({
    rootContainer:{
        marginTop: 300,
        marginHorizontal:20,
        alignItems:'center',
        padding:16,
        backgroundColor:Colors.primary400,
        borderRadius: 8,
        elevation: 10,
        shadowColor: 'blue',
        shadowOffset: {width: 0, height:2 },
        shadowRadius: 6,
        shadowOpacity:1,
        justifyContent: 'center',
        
      

    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize:32,
        borderBottomColor:Colors.primary300,
        borderBottomWidth: 2,
        color: Colors.primary300,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign:'center',

    },
    buttonsContainer:{
     flexDirection:'row',
    },
    buttonContainer: {
       flex:1,
    },
});