import { StyleSheet } from "react-native";
import { scaleFontSize } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    title: {
        color: '#022150', 
        fontSize : scaleFontSize(24), 
        fontStyle : 'normal', 
        fontWeight : '600', 
        letterSpacing: 0.48}
});

export default style;