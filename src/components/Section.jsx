import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const Section = ({ title, DataComponent, data, containerStyle, titleStyle, flatlist }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {title && <Text style={[styles.sectionTitle, titleStyle]}>{title}</Text>}
      {flatlist ? (
        <FlatList
          data={data}
          renderItem={({ item }) => <DataComponent nft={item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item, index }) => <DataComponent nft={item} key={index} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
  },
  sectionTitle: {
    marginBottom: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 1,
  },
});

export default Section;