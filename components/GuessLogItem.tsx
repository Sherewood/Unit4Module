import { View, StyleSheet, Dimensions, Text} from "react-native";
import Colors from '../constants/colors';
import React from "react";

type GuessLogProps={
    roundNumber:number,
    guess:number,
}
function GuessLogItem(props:GuessLogProps){
    return <View style={styles.listItem}>
        <Text style={styles.itemText}>#{props.roundNumber}</Text>
        <Text style={styles.itemText}>Opponent's guess: {props.guess}</Text>
    </View>
}

export default GuessLogItem;
const styles=StyleSheet.create({
    listItem:{
        borderColor: Colors.primary800,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor: Colors.accent400,
        flexdirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation: 4,
        shadowColor:'black',
        shadowOffset: {width:0,height:0},
        shadowOpacity:0.23,
        shadowRadius:1,

    },
    itemText:{
        fontWeight:'bold',
    }
});