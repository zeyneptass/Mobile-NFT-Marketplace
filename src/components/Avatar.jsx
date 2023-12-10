import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'

const Avatar =({image, size=50, online, circle}) => {
    return (
      <View style={[styles.container,{
        width: size,
        height: size
      }]}>
        {circle && online && <FontAwesome5 style={[styles.icon, {
            left: size * 0.75,
            top: size * 0.02
        } ]} name="circle" size={15} color={"green"} />}
        <Image source={{uri:image}}  style={{
          width: size,
          height:size,
          borderRadius: circle ? size/2 : size/5,
          borderWidth: 0.5
        }} />
      </View>
    )
  
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    position: 'absolute',
    zIndex: 1
  }
})

export default Avatar