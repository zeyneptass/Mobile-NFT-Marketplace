import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const SearchInput =() => {
    return (
      <View style={styles.container}>
        <Feather name="search" size={20} color={"grey"} style={styles.icon} />
        <TextInput style={styles.input} placeholder="Search items" />
      </View>
    )
  
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        height: 60,
        width: '90%',
        alignSelf: 'center',
    },
    input: {
        padding: 1
    },
    input: {
        height: 60,
        width: '100%',
        paddingLeft: 10
    }
})

export default SearchInput;