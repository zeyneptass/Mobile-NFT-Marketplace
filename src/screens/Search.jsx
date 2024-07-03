import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import SearchInput from '../components/Search.Input';
import Section from '../components/Section';
import Card from '../components/Card';
import UserProfileCard from '../components/UserProfileCard';
import { getNFTs } from '../components/getNFTs';
import data from '../data/mockData';

const Search = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      const ownerAddress = '0xB5D3D2A70F3dFf7Ead8c9cF7FF702D924cE60BBb'; 
      const nfts = await getNFTs(ownerAddress);
      setNfts(nfts);
    };

    fetchNFTs();
  }, []);

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
      <Section 
        title="Hot new items" 
        DataComponent={NFTCard} 
        data={nfts} 
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  sectionContainer: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  secondSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  secondSectionContainer: {
    marginVertical: 10,
  },
});

export default Search;