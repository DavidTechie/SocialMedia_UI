import React from "react";
import { SafeAreaView, ScrollView, Image, View, Text } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";
import { ProfileTabNavigation } from "../../navigation/MainNavigation";

const Profile = ({navigation})=>{

    return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <ScrollView contentContainerStyle={[globalStyle.flexGrow]}>
            <View style={style.profileImageContainer}>
                <View style={style.profileImageContent}>
                    <Image style={style.profileImage} source={require('../../assets/images/my-avatar.png')} />
                </View>
            </View>
            <Text style={style.userName}>Matt Murdock</Text>
            <View style={style.statContainer}>
                <View>
                    <Text style={style.statAmount}>45</Text>
                    <Text style={style.statLabel}>Following</Text>
                </View>
                <View style={style.statBorder} />
                <View>
                    <Text style={style.statAmount}>2M</Text>
                    <Text style={style.statLabel}>Followers</Text>
                </View>
                <View style={style.statBorder} />
                <View>
                    <Text style={style.statAmount}>6</Text>
                    <Text style={style.statLabel}>Posts</Text>
                </View>
            </View>
            <View style={globalStyle.flex}>
             <ProfileTabNavigation /> 
            </View>
        </ScrollView> 
    </SafeAreaView>
);
};

export default Profile;