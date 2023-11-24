import {View,Text,Pressable, StyleSheet} from 'react-native';
function PrimaryButton({children})
{
    function PrimaryButton ({children, onPress}){
        function pressHandler (){
            console.log('Pressed');
        }
    }
return( 

    <View style={styles.buttonOutercontainer}>
    <Pressable style= {({pressed})=> pressed ? [styles.buttonInnercontainer,styles.pressed] : styles.buttonInnercontainer} onPress={pressHandler} android_ripple={{color:'#640233'}}>
    <Text styles={[styles.buttonText]} >{props.children}</Text>
        
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
    backgroundColor:'#72063c',
    
    paddingVertical: 8,
    paddingHorizontal:16,
    elevation:2,
    

},
buttonText:{
    color:'white',
    textAlign:'center',
},
pressed:{
    opacity:.75,
}
});