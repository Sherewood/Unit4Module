import {Text,StyleSheet} from 'react-native';
import Colors from '../constants/colors';
type Titleprops={
    children:string,

}
function Title(children:Titleprops){
    return <Text style = {styles.title}>{children.children}</Text>
}

export default Title;

const styles =StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'#ddb52f',
        textAlign: 'center',
        borderWidth:2,
        backgroundColor:Colors.primary200,
        borderColor: '#ddb52f',
        padding:12,
        maxWidth:'80%',
        width:300,


    },
});