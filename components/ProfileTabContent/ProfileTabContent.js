import React from "react";
import { Image, ScrollView, View } from "react-native";
import style from "./style";

const ProfileTabContent = ()=>{
    return (
    <>
        <ScrollView  
            showsVerticalScrollIndicator={false}
            style={style.profileTabContentContainer}>
            <View style={style.profileTabContent} >
                <Image resizeMode={'contain'} style={style.image} source={require('../../assets/images/mypost-1.png')} />
                <Image resizeMode={'contain'} style={style.image} source={require('../../assets/images/mypost-2.png')} />
                <Image resizeMode={'contain'} style={style.image} source={require('../../assets/images/mypost-3.png')} />
                <Image resizeMode={'contain'} style={style.image} source={require('../../assets/images/mypost-4.png')} />
                <Image resizeMode={'contain'} style={style.image} source={require('../../assets/images/mypost-5.png')} />
                <Image resizeMode={'contain'} style={style.image} source={require('../../assets/images/mypost-6.png')} />
            </View>
        </ScrollView>
    </>
    );
}

export default ProfileTabContent;