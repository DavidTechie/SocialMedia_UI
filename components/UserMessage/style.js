import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    userPostContainer:{
        marginTop:verticalScale(15),
        paddingBottom: verticalScale(15),
        borderBottomWidth: verticalScale(1),
        borderBottomColor:'#EFF2F6',
        padding:horizontalScale(5),

    },
    postContainer:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },

    userContainer:{
        flexDirection: 'row'
    },
    userTextContainer:{
        justifyContent:'center',
        marginLeft:horizontalScale(10),
    },
    username:{
        color: '#000',
        fontWeight:'600',
        fontSize: scaleFontSize(16)
    },
    message:{
        marginTop:verticalScale(5),
        color: '#000',
        textAlign:'left',
        fontWeight:'500',
        fontSize:scaleFontSize(14),
    },
    numberOfMessage:{
        marginTop:verticalScale(5),
        color: '#79869F',
        textAlign:'left',
        fontWeight:'600',
        fontSize:scaleFontSize(12),
    },
    postImage:{
        justifyContent:'center',
        padding:horizontalScale(15),
        aspectRatio: 1,
        alignContent:'center',
        alignItems:'center'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
      },
      userPostStats:{
        marginLeft:horizontalScale(10),
        flexDirection:'row'
      },
      userPostStatsText:{
        marginLeft:horizontalScale(3), color:'#79869F'
      },
      userPostStatsIcon:{
        flexDirection:'row', 
        marginLeft:horizontalScale(23)
      }
});

export default style;