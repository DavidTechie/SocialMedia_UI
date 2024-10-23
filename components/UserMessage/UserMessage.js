import React from "react";
import { View,Image,Text } from "react-native";
import PropTypes, { number, string } from "prop-types";
import style from './style';
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { horizontalScale, scaleFontSize } from "../../assets/styles/scaling";

const UserMessage = (props)=>{
    return (<View style={style.userPostContainer}>
        <View style={style.postContainer}>
                <View style= {style.userContainer}> 
          <UserProfileImage profileImage={props.profileImage} imageDimensions={horizontalScale(50)} />
            <View style= {style.userTextContainer}>
                <Text style={style.username}>
                    {props.firstName} {props.lastName}
                </Text>
                <Text style={style.message}>{props.message}</Text>
                <Text style={style.numberOfMessage}>   {props.numberOfMessage}</Text>
                </View>
                </View>
        </View>     
    </View>
    );
};

UserMessage.propTypes={
    profileImage: PropTypes.any.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    numberOfMessage: PropTypes.number,
};

export default UserMessage;