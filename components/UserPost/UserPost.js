import React from "react";
import { View,Image,Text } from "react-native";
import PropTypes, { string } from "prop-types";
import style from './style';
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { horizontalScale, scaleFontSize } from "../../assets/styles/scaling";

const UserPost = (props)=>{
    return (<View style={style.userPostContainer}>
        <View style={style.postContainer}>
                <View style= {style.userContainer}> 
          <UserProfileImage profileImage={props.profileImage} imageDimensions={horizontalScale(50)} />
            <View style= {style.userTextContainer}>
                <Text style={style.username}>
                    {props.firstName} {props.lastName}
                </Text>
                {props.location && <Text style={style.location}>{props.location}</Text>}
                </View>
                </View>
                <FontAwesomeIcon icon={faEllipsisH} size={scaleFontSize(24)} color= {'#79869F'} />
        </View>
        <View style={style.postImage}>
            <Image source={props.image} style={style.image} />
        </View>
        <View style = {style.userPostStats}>
        <View style = {{flexDirection:'row'}}>
            <FontAwesomeIcon icon={faHeart} color={'#79869F'} />    
            <Text style = {style.userPostStatsText}>{props.likes}</Text>    
        </View>
        <View style = {style.userPostStatsIcon}>
            <FontAwesomeIcon icon={faComment} color={'#79869F'} />    
            <Text style = {style.userPostStatsText}>{props.comments}</Text>    
        </View>
        <View style = {style.userPostStatsIcon}>
            <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />    
            <Text style = {style.userPostStatsText}>{props.bookmarks}</Text>    
        </View>
        </View>
    </View>
    );
};

UserPost.propTypes={
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.any.isRequired,
    profileImage: PropTypes.any.isRequired,
    likes: PropTypes.number.isRequired,
    comments:PropTypes.number.isRequired,
    bookmarks:PropTypes.number.isRequired,
};

export default UserPost;