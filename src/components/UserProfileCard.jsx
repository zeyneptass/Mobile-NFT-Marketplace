import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const UserProfileCard =({ title, username, coverImage, avatar, verified }) => {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.topContainer}>
          <Image source={{uri: coverImage}} style={styles.coverImage}/>
        </View>
          <Image source={{uri: avatar}} style={styles.avatar}/>

        <View style={styles.bottomContainer}>
          <View style={styles.usernsmeDetails}>
          <Text style={styles.title}>{title}</Text>
          {verified && <MaterialCommunityIcons name="check-decagram" size={15} color={"rgb(0,122,255)"} style={styles.icon} /> }
          </View>          
          <Text style={styles.username}>{username}</Text>
        </View>

      </TouchableOpacity>
    )
  
}

const styles = StyleSheet.create({
  container:{
    height: 250,
    height: 230,
    marginHorizontal: 10,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.20,
    shadowRadius: 3.41,
    elevation: 3,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius: 20
  },
  topContainer: {
    flex:1
  },
  coverImage: {
    width: 250,
    height: 115,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  avatar: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#fff',
    top: 90,
    left: 100    
  },
  bottomContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  usernameDetails: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'    
  },
  title: {
     fontSize: 17,
     marginBottom: 5
  },
  icon: {
    marginLeft: 20
  }, 
  username: {
    color: 'rgb(0,122,255)'
  }
})

export default UserProfileCard