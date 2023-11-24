import {useState} from 'react';
import {TextInput,Button,Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
function StartGameScreen(onPickedNumber){
    const [enteredNumber, setEnteredNumber]= useState('');
    function numberInputHandler(enteredText){
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
            conPickNumber(chosenNumber);
    }
    return(
     <View style={styles.inputContainer}>
        <TextInput style={styles.numberInput} 
        maxLength={2} 
        keyboardAppearance='number-pad' 
        autoCapitalize='none'
        autoComplete={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
         />
         <View style={styles.buttonsContainer}>
            <View>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress= {confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
    );
}

export default StartGameScreen;
const stlyes= StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
        marginTop:100,
        marginHorizontal:24 ,
        padding: 16,
        backgroundColor:'#72063c',
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
        borderBottomColor:'#dd52f',
        borderBottomWidth: 2,
        color: '#dd52f',
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