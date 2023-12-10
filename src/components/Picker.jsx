import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Picker =({label, LeftItem}) => {
    return (
      <TouchableOpacity style={styles.container}>
        {LeftItem}
        <Text style={styles.label}>{label}</Text>
        <Entypo style={styles.icon} name='chevron-down' size={24} color={"gray"} />
      </TouchableOpacity>
    )
  
}


const styles = StyleSheet.create({
    container:{
        borderWidth: 0.5,
        borderColor: '#ccc',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginHorizontal: 8
    },
    label:{
        paddingHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default Picker