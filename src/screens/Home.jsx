import React from 'react'
import { Text, View,ScrollView, StyleSheet} from 'react-native'

import Card from '../components/Card'
import NFTCard from '../components/NFTCard'
import Avatar from '../components/Avatar'
import UserProfileCard from '../components/UserProfileCard'
import Section from '../components/Section'
import data from '../data/mockData' 

const Home =() => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Section DataComponent={Card} data={data.categories} />    
        <Section title="Notable Drops" DataComponent={Card} data={data.notablaDrops}/>
        <Section title="Trending Collections" DataComponent={UserProfileCard} data={data.users}/>
        <Section title="Hot new items" DataComponent={NFTCard} data={data.nfts} />
        <Section title="Expiring Soon" DataComponent={NFTCard} data={data.nfts} />
        <Section title="New top sellers" DataComponent={NFTCard} data={data.nfts} />


      </ScrollView> 
    ); 
};

const styles = StyleSheet.create({
  container:{
   backgroundColor: '#fff'
  },

});


export default  Home