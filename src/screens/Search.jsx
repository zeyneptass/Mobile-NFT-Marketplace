import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import SearchInput from '../components/Search.Input'
import Section from '../components/Section';
import Card from '../components/Card';
import data from '../data/mockData';
import UserProfileCard from '../components/UserProfileCard';

const Search =() => {
    return (
      <ScrollView style={styles.container}>
        <SearchInput />
           <Section 
              containerStyle={styles.sectionContainer} 
              titleStyle={styles.sectionTitle}
              title="All Categories" 
              DataComponent={Card} 
              data={data.categories} 
           />   
           <Section 
              title="Trending collections"
              titleStyle={styles.secondSectionTitle}
              containerStyle={styles.secondSectionContainer}
              DataComponent={UserProfileCard}
              data={data.users}
              flatlist
           /> 
      </ScrollView>
    )
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  sectionContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 25
  },
  sectionTitle: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 0
  },
  secondSectionContainer: {
    marginTop: 0,
    marginVertical: 0
  },
  secondSectionTitle: {
    fontSize: 18,
    marginBottom: 25
  }

});

export default Search;