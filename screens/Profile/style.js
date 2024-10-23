import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    profileImage:{
        width: horizontalScale(110),
        height: horizontalScale(110),
        borderRadius: horizontalScale(110),
        backgroundColor: 'grey'
    },
    profileImageContainer:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:verticalScale(32),
    },
    profileImageContent:{
        borderRadius: horizontalScale(110),
        borderWidth:2,
        borderColor: '#0150EC',
        padding:horizontalScale(4)
    },
    userName:{
        marginTop: verticalScale(20),
        textAlign:'center',
        fontWeight:'600',
        fontSize: scaleFontSize(20)
    },
    statAmount:{
        color:'#022150',
        fontSize:scaleFontSize(20),
        fontWeight:'600',
        letterSpacing: 0.4,
        textAlign:'center'
    },
    statLabel:{
        fontWeight:'400',
        fontSize:scaleFontSize(16),
        color:'#79869F',
        letterSpacing:0.32,
        textAlign:'center'
    },
    statContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal: horizontalScale(40),
        paddingVertical:verticalScale(30),
        borderBottomWidth:1,
        borderColor:'#E9EFF1'
    },
    statBorder:{
        borderWidth:1,
        borderColor:'#E9EFF1'
    }
});

export default style;