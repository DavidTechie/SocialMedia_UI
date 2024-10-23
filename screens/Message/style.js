import { StyleSheet } from "react-native";
import { horizontalScale,verticalScale,scaleFontSize } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    header: {
        marginLeft:horizontalScale(10), 
        marginRight: horizontalScale(10), 
        marginTop: verticalScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    messageIcon:{
        padding: horizontalScale(14), 
        borderRadius:50, 
        backgroundColor: '#FFFFFF'
    },
    messageNumContainer :{
        backgroundColor:'#F35BAC',
        justifyContent:'center',
        flexDirection:'row',
        width:horizontalScale(12),
        height:horizontalScale(12),
        borderRadius:horizontalScale(12),
        position:'absolute',
        right:horizontalScale(10) ,
        top:verticalScale(8)
    },
    messageNum:{
        color:'#FFFFFF',
        fontSize:scaleFontSize(8),
        fontWeight: '600',
        alignContent:'center'
    },
    userStoryContainer:{
        marginTop:verticalScale(10),
        marginHorizontal:horizontalScale(15),
        
    },
    userPostcontainer:{
        marginHorizontal:horizontalScale(24),
    }
});

export default style;