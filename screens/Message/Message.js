import React,{useState,useEffect} from "react";
import { SafeAreaView,Text, TouchableOpacity,FlatList,View } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import UserMessage from "../../components/UserMessage/UserMessage";
import style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { scaleFontSize } from "../../assets/styles/scaling";

const Message = ({navigation})=>{
    const userMessages = [
        {
            firstName:'Allison',
            lastName:'Becker',
            message:'Hey',
            profileImage: require('../../assets/images/avatar-1.png'),
            id:1,
          },
          {
            firstName:'Jennifer',
            lastName:'Wilkson',
            message:'Hello',
            profileImage: require('../../assets/images/avatar-2.png'),
            id:2,
          },
          {
            firstName:'Adam',
            lastName:'White',
            message:'What are you doing?',
            profileImage: require('../../assets/images/avatar-4.png'),
            id:3,
          },
          {
            firstName:'Gwen',
            lastName:'Tennyson',
            message:`Let's meet tonight`,
            profileImage: require('../../assets/images/avatar-3.png'),
            id:4,
          },
          {
            firstName:'Nicolas',
            lastName:'Pooran',
            message:'I need help',
            profileImage: require('../../assets/images/avatar-1.png'),
            id:5,
          },
    ];

 
    return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <FontAwesomeIcon icon={faArrowLeftLong} size={scaleFontSize(20)} color={'#898DAE'} />
        </TouchableOpacity>
        <FlatList
        onEndReachedThreshold={0.5}       
        data={userMessages} 
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={style.userPostContainer}>
            <UserMessage 
              firstName={item.firstName} 
              lastName={item.lastName}
              message={item.message}
              profileImage={item.profileImage}
              numberOfMessage={item.numberOfMessage}
            />   
          </View>
        )} 
      />    
    </SafeAreaView>
);
};

export default Message;