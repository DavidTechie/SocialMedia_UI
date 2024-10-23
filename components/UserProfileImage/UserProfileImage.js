import React from "react";
import { View,Image } from "react-native";
import PropTypes from "prop-types";
import style from './style';

const UserProfileImage = (props)=>{
    return <View style={[style.storyImageContainer,{borderRadius:props.imageDimensions}]}>
            <Image style={[style.storyImage,
            {width: props.imageDimensions,
                height: props.imageDimensions,
                borderRadius: props.imageDimensions,
            }]} source={props.profileImage}/>
           </View>;
}

UserProfileImage.propTypes = {
    profileImage: PropTypes.any.isRequired,
    imageDimensions: PropTypes.number.isRequired
}

export default UserProfileImage;