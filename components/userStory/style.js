import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    storyContainer: {
        marginRight: horizontalScale(10),
    },
    storyImageContainer:{
        borderColor:'#F35BAC',
        borderWidth:2,
        padding:horizontalScale(3),
        borderRadius: 70
    },
    storyImage:{
        width:70,
        height:70,
        borderRadius:70,
        backgroundColor: '#C4C4C4',
        alignContent:'center',
        alignItems:'center'
    },
    firstName:{
        color:'#022150',
        fontSize:scaleFontSize(14),
        fontWeight:'500',
        letterSpacing:0.14,
        textAlign:"center",
        marginTop: verticalScale(8),
    }
});

export default style;