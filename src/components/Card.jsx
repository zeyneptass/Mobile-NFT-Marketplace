import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const Card =({title,image,size, type="default",onCardPress}) => {
  return (
    <TouchableOpacity style={styles.contaier} onPress={onCardPress}>
      <Image source={{ uri: image}} style={[styles.image,{
        width: size,
        height: size
      }]}/>
      <Text style={type === "category" ? styles.categoryTitle : styles.defaultTitle}>{title}</Text>
    </TouchableOpacity>
  ) 
}

const styles = StyleSheet.create({
  contaier:{
    marginHorizontal: 10,
    marginVertical: 20
  },
  image: {
    borderRadius:20,
  },
  defaultTitle: {
    color: "#000",
    fontSize: 20,
    width: 100,
    letterSpacing:1,
    marginTop: 10,
    marginLeft: 5
  },
  categoryTitle: {
    position: 'absolute', 
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 22,
    bottom: 20,
    left: 20
  }
})


export default Card