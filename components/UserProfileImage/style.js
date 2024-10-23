import { StyleSheet } from "react-native";
import { horizontalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    storyImageContainer:{
        borderColor:'#F35BAC',
        borderWidth:2,
        padding:horizontalScale(3),
    },
    storyImage:{
        backgroundColor: '#C4C4C4',
        alignContent:'center',
        alignItems:'center'
    },
    
});

export default style;