import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { Colors } from 'react-native/Libraries/NewAppScreen'

const Connect =() => {
    return (
      <View>
        <View style={styles.top}>
            <Entypo name='wallet' size={100} style={styles.icon} color={Colors.primary} />
            <Text style={styles.title}>Connect with wallet</Text>
            <Text style={styles.description}>Your crypto wallet securely stores your digital goods and cryptocurrentcies. Connect to one wallet provider. </Text>
        </View>
        <View style= {styles.middle}> 
          <TouchableOpacity style={styles.button}>
            <Image source={require('../../assets/metamesk.png')} style={styles.image} />
            <Text style={styles.buttonTitle}>MetaMask</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons name='shield' size={25} color={Colors.primary} />
            <Text style={styles.buttonTitle}>Trust Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Ionicons name='link' size={25} color={Colors.primary} /> 
            <Text style={styles.buttonTitle}>Enter ethereum address</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.new}>New to wallets?</Text>
          <TouchableOpacity>
              <Text style={styles.learnMore}>Learn more</Text>
          </TouchableOpacity>
        </View>              
      </View>
    );  
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    top: {
      flex: 1,
      alignItems: 'center'
    },
    title:{
      fontSize: 22,
      fontWeight: 'bold',
      marginVertical: 20
    },
    description: {
      fontWeight: 22,
      textAlign: 'center',
      width: '90%',
      fontWeight: 'bold',
      color: Colors.grey,
      letterSpacing: 1
    },
    middle:{
      flex: 1,
      marginTop: 20
    },
    button:{
      borderWidth: 1,
      borderColor: Colors.medium,
      width: '90%',
      alignSelf: 'center',
      padding: 20,
      flexDirection: 'row',
      borderRadius: 10,
    },
    image: {
      width: 25,
      height:25
    },
    buttonTitle: {
      fontWeight: 'bold',
      marginLeft: 15,
      fontSize: 16
    },
    bottom: {
      flex: 0.2,
      alignItems: 'center',
      justifyContent: 'center'
    },
    new: {
      color: Colors.grey,
      fontWeight: 'bold'
    },
    learnMore: {
      color: Colors.primary,
      fontWeight: 'bold'
    }

});

export default Connect;