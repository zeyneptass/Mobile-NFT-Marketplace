import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// import Colors from "../theme/colors";

const socialNetworks = [
  {
    name: "Twitter",
    icon: "twitter",
    color : Colors.primary
  },
  {
    name: "Instagram",
    icon: "instagram",
    color : Colors.primary,
  },
  {
    name: "Discord",
    icon: "discord",
    color : Colors.primary
  },
  {
    name: "Youtube",
    icon: "youtube",
    color : Colors.primary
  },
]




const More =() => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.title}>About</Text>
            <MaterialCommunityIcons name='chevron-right' size={30} color={Colors.grey} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.title}>Blog</Text>
            <MaterialCommunityIcons name='chevron-right' size={30} color={Colors.grey} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.title}>Help</Text>
            <MaterialCommunityIcons name='chevron-right' size={30} color={Colors.grey} />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>Follow us</Text>
        <View style={styles.socialNetworks}>
            {socialNetworks.map(socialNetwork => <TouchableOpacity key={socialNetwork.name}
                style={[styles.socialNetwork, {
                    backgroundColor: socialNetwork.color
                }]}>
                  <View style={styles.content}>
                      <MaterialCommunityIcons name={socialNetwork.icon} size={30} color={Colors.white} />
                      <Text style={styles.name}>{socialNetwork.name}</Text>
                  </View>

                </TouchableOpacity>)
            }

        </View>
      </ScrollView>
    )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  top: {

  },
  link: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.light
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  sectionTitle: {
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 15
  },
  socialNetworks:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20
  },
  content: {
    marginLeft: 20,
    marginTop: 120
  },
  socialNetwork: {
    width: '47%',
    height: 200,
    marginBottom: 20,
    borderRadius:20
  },
  name: {
    fontWeight: 'bold',
    color: Colors.white,
    fontSize: 18,
    letterSpacing: 1,
    marginTop: 5
  }
})

export default More;