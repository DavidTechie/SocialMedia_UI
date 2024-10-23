import React, {useState,useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import UserStory from '../../components/userStory/UserStory';
import Title from '../../components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import style from './style';
import UserPost from '../../components/UserPost/UserPost';
import { scaleFontSize } from '../../assets/styles/scaling';
import globalStyle from '../../assets/styles/globalStyle';
import { Routes } from '../../navigation/Routes';

const Home = ({navigation}) => {
  const userStories = [
    {
      firstName: 'Joseph',
      id:1,
      profileImage: require('../../assets/images/avatar-1.png')
    },
    {
      firstName: 'Angel',
      id:2,
      profileImage: require('../../assets/images/avatar-2.png')
    },
    {
      firstName: 'Walter',
      id:3,
      profileImage: require('../../assets/images/avatar-4.png')
    },
    {
      firstName: 'Olivier',
      id:4,
      profileImage: require('../../assets/images/avatar-1.png')
    },
    {
      firstName: 'Nata',
      id:5,
      profileImage: require('../../assets/images/avatar-3.png')
    },
    {
      firstName: 'Nicolas',
      id:6,
      profileImage: require('../../assets/images/avatar-1.png')
    },
    {
      firstName: 'Nemo',
      id:7,
      profileImage: require('../../assets/images/avatar-2.png')
    },
    {
      firstName: 'White',
      id:8,
      profileImage: require('../../assets/images/avatar-4.png')
    },
    {
      firstName: 'Gwen',
      id:9,
      profileImage: require('../../assets/images/avatar-3.png')
    },
  ];

  const userPosts = [
    {
      firstName:'Allison',
      lastName:'Becker',
      location:'Chennai,Tamil Nadu',
      profileImage: require('../../assets/images/avatar-1.png'),
      image: require('../../assets/images/post-1.jpg'),
      likes:126,
      comments:233,
      bookmarks:43,
      id:1,
    },
    {
      firstName:'Jennifer',
      lastName:'Wilkson',
      location:'Chennai,Tamil Nadu',
      profileImage: require('../../assets/images/avatar-2.png'),
      image: require('../../assets/images/post-2.jpg'),
      likes:432,
      comments:354,
      bookmarks:34,
      id:2,
    },
    {
      firstName:'Adam',
      lastName:'White',
      location:'Chennai,Tamil Nadu',
      profileImage: require('../../assets/images/avatar-4.png'),
      image: require('../../assets/images/post-3.jpg'),
      likes:366,
      comments:243,
      bookmarks:77,
      id:3,
    },
    {
      firstName:'Gwen',
      lastName:'Tennyson',
      location:'Chennai,Tamil Nadu',
      profileImage: require('../../assets/images/avatar-3.png'),
      image: require('../../assets/images/post-4.jpg'),
      likes:4764,
      comments:341,
      bookmarks:65,
      id:4,
    },
    {
      firstName:'Nicolas',
      lastName:'Pooran',
      location:'Chennai,Tamil Nadu',
      profileImage: require('../../assets/images/avatar-1.png'),
      image: require('../../assets/images/post-5.png'),
      likes:573,
      comments:421,
      bookmarks:98,
      id:5,
    },
  ]

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderData, setUserStoriesRenderData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);
  
  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderData, setUserPostsRenderData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);


  const pagination = (database, currentPage, pageSize) =>{
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if(startIndex>=database.length){
      return[];
    }
    return database.slice(startIndex,endIndex);
  };

  useEffect(()=>{
    setIsLoadingUserStories(true);
    const getInitalData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderData(getInitalData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitalDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderData(getInitalDataPosts);
    setIsLoadingUserPosts(false);
    
  },[]);


  return (

      <SafeAreaView style={globalStyle.backgroundWhite}>
          <View> 
            <FlatList 
            ListHeaderComponent={
              <>
              <View style={style.header}>
          <Title title={`Let's Explore`} />
            <TouchableOpacity style= {style.messageIcon}
            onPress={()=> {navigation.navigate(Routes.Message)}}>
              <FontAwesomeIcon icon={faMessage} size={scaleFontSize(20)} color={'#898DAE'} />
              <View style={style.messageNumContainer}>
                <Text style={style.messageNum}>2</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={style.userStoryContainer}>
            <FlatList 
            onEndReachedThreshold={0.5}
            onEndReached={()=>{
              if(isLoadingUserStories) {return;}
              setIsLoadingUserStories(true);
              const contentToAppend = pagination(userStories, userStoriesCurrentPage+1,userStoriesPageSize);
              if(contentToAppend.length>0){
                setUserStoriesCurrentPage(userStoriesCurrentPage+1);
                setUserStoriesRenderData(prev => [...prev,...contentToAppend]);
              }
              setIsLoadingUserStories(false);
            }
          }
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            data={userStoriesRenderData} 
            renderItem={({item})=>
              <UserStory 
              key={'userStory'+item.id}
              firstName={item.firstName} 
              profileImage={item.profileImage} />}
            />
          </View>
              </>
            }

              onEndReachedThreshold={0.5}
              onEndReached={()=>{
                if(isLoadingUserPosts) {return;}
                setIsLoadingUserPosts(true);
                const contentToAppend = pagination(userPosts, userPostsCurrentPage+1,userPostsPageSize);
                if(contentToAppend.length>0){
                  setUserPostsCurrentPage(userPostsCurrentPage+1);
                  setUserPostsRenderData(prev => [...prev,...contentToAppend]);
                }
                setIsLoadingUserPosts(false);
              }
            }
              data={userPostsRenderData} 
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={style.userPostContainer}>
                  <UserPost 
                    firstName={item.firstName} 
                    lastName={item.lastName}
                    location={item.location}
                    profileImage={item.profileImage}
                    image={item.image}
                    likes={item.likes}
                    comments={item.comments}
                    bookmarks={item.bookmarks} 
                  />   
                </View>
              )} 
            />    
          </View>
      </SafeAreaView>
    
  );
}

export default Home;