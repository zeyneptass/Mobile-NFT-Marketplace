import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const NFTCard =({ user,title,price,likes,image }) => {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.nftDetails}>
            <View style={styles.userDetails}>
                <Text style={styles.username}>{user.username}</Text>
                {user.verified && (
                <MaterialCommunityIcons 
                name="check-decagram" 
                size={20}
                color={"rgb(0,122,255)"} 
                style={styles.icon}
                />
            )}
            </View>

            <Text style={styles.title}>{title}</Text>
            <View style={styles.bottom}>
                <View style={styles.bottom}>
                    <Text style={styles.price}>{price}</Text>
                </View>
                
                <View style={styles.likesContainer}>
                    <MaterialCommunityIcons name='heart-outline' color="#ccc" size={20} />
                    <Text style={styles.likes}>{likes}</Text>
                </View>
            </View>
        </View>
      </TouchableOpacity>
    )
  
}

const styles = StyleSheet.create({
    container: {
        height: 350,
        width: 200,
        marginHorizontal: 10,
        borderWidth: 0.5,
        borderColor: '#ccc',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    image: {
        width: 180,
        height: 100,
        borderRadius: 10
    },
    userDetails:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    username: {
        fontSize: 15,
        color: 'gray',
        letterSpacing: 1
    },
    icon: {
        marginLeft: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 1
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:10
    },
    price: {
        fontWeight: 'bold',
        fontSize: 15
    }, 
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    likes: {
        fontWeight: 'bold',
        fontSize: 15,
        color: "gray",
        marginLeft: 7
    }
});
   
export default NFTCard