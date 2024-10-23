import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    profileTabContentContainer:{
        backgroundColor:'#FFFFFF',
    },
    profileTabContent:{
        paddingHorizontal: horizontalScale(21),
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
    },
    image:{
        width: horizontalScale(90),
        height: verticalScale(90),
        marginVertical: verticalScale(10),
    }
});

export default style;