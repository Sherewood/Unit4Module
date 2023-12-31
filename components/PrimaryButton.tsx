import Colors from '../constants/colors';
import {View,Text,Pressable, StyleSheet} from 'react-native';
type PrimaryButtonProp=
{
    children:React.ReactNode,
    pressHandler:()=> void,
    
}
function PrimaryButton({pressHandler, children}:PrimaryButtonProp)
{
return( 

    <View style={styles.buttonOuterContainer}>
    <Pressable style= {({pressed})=> pressed ? [styles.buttonInnercontainer,styles.pressed] : styles.buttonInnercontainer} onPress={pressHandler} android_ripple={{color:'#640233'}}>
    <Text style={[styles.buttonText]} >{children}</Text>
    </Pressable>
    </View>
    );
}

export default PrimaryButton;
const styles= StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin:4,
        overflow:'hidden',
    },
    buttonInnercontainer:{
        backgroundColor:Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal:16,
        elevation:2,
    },
    buttonText:{
        color:'white',
        textAlign:'center',
    },
    pressed:{
        opacity:.65,
    }
});