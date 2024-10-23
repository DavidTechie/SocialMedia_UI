import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    title:{
        color:'#022150',
        fontSize:scaleFontSize(16),
        fontWeight:'500',
        letterSpacing:0.32,
        padding:horizontalScale(15),
    },
    titleNotFocus:{
        color:'#79869F',
        fontSize:scaleFontSize(16),
        fontWeight:'400',
        letterSpacing:0.32,
    },
});

export default style;