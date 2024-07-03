import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Card from '../components/Card';
import NFTCard from '../components/NFTCard';
import UserProfileCard from '../components/UserProfileCard';
import Section from '../components/Section';
import { getNFTs } from '../components/getNFTs';
import data from '../data/mockData';

const Home = () => {
  const [nftsData, setNftsData] = useState({
    notableDrops: [],
    trendingCollections: [],
    hotNewItems: [],
    expiringSoon: [],
    newTopSellers: []
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const notableDrops = await getNFTs();
        const trendingCollections = await getNFTs();
        const hotNewItems = await getNFTs();
        const expiringSoon = await getNFTs();
        const newTopSellers = await getNFTs();

        setNftsData({
          notableDrops,
          trendingCollections,
          hotNewItems,
          expiringSoon,
          newTopSellers
        });
      } catch (err) {
        console.error('Error fetching NFTs:', err);
        setError('Error fetching NFTs');
      }
    };

    fetchNFTs();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Section DataComponent={Card} data={data.categories} />
      <Section title="Notable Drops" DataComponent={NFTCard} data={nftsData.notableDrops} />
      <Section title="Trending Collections" DataComponent={UserProfileCard} data={nftsData.trendingCollections} />
      <Section title="Hot new items" DataComponent={NFTCard} data={nftsData.hotNewItems} />
      <Section title="Expiring Soon" DataComponent={NFTCard} data={nftsData.expiringSoon} />
      <Section title="New top sellers" DataComponent={NFTCard} data={nftsData.newTopSellers} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});

export default Home;