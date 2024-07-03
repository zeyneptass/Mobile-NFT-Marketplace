import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

const NFTCard = ({ nft }) => {

     const generatePrice = () => {
    return (Math.random() * (4 - 0.1) + 0.1).toFixed(2)
  }

  const {
    identifier = '5',
    name = 'Unknown Name',
    description = 'No Description',
    image_url = 'https://via.placeholder.com/150',
    contract = '',
    price = generatePrice(),
    user = {},
    likes = 0,
  } = nft || {};

  const handleBuy = async () => {
    try {
      const accounts = await web3.eth.requestAccounts();
      const from = accounts[0];

      const transactionParameters = {
        to: contract,
        from: from,
        value: web3.utils.toHex(web3.utils.toWei(price.toString(), 'ether')),
        data: web3.eth.abi.encodeFunctionCall({
          name: 'transfer',
          type: 'function',
          inputs: [
            {
              type: 'address',
              name: 'to',
            },
            {
              type: 'uint256',
              name: 'tokenId',
            },
          ],
        }, [from, identifier]),
      };

      const txHash = await web3.eth.sendTransaction(transactionParameters);
      Alert.alert('Transaction sent', `Transaction hash: ${txHash}`);
    } catch (error) {
      console.error('Error buying NFT:', error);
      Alert.alert('Error', error.message);
    }
  };

 

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image_url }} style={styles.image} />
      </View>
      <View style={styles.nftDetails}>
        <View style={styles.userDetails}>
          <Text style={styles.username}>{user.username || 'Unknown User'}</Text>
          {user.verified && (
            <MaterialCommunityIcons 
              name="check-decagram" 
              size={20}
              color={"rgb(0,122,255)"} 
              style={styles.icon}
            />
          )}
        </View>

        <Text style={styles.title}>{name}</Text>
        {/* <Text style={styles.description}>{description}</Text> */}
        <View style={styles.bottom}>
          <Text style={styles.price}>{generatePrice()} ETH</Text>
          <View style={styles.likesContainer}>
            <MaterialCommunityIcons name='heart-outline' color="#ccc" size={20} />
            <Text style={styles.likes}>{likes}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
          <Text style={styles.buyButtonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: 200,
    marginHorizontal: 10,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  nftDetails: {
    padding: 10,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  username: {
    fontSize: 15,
    color: 'gray',
    letterSpacing: 1
  },
  icon: {
    marginLeft: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
    marginVertical: 5
  },
  description: {
    fontSize: 12,
    color: 'gray',
    marginVertical: 5
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  likes: {
    fontWeight: 'bold',
    fontSize: 15,
    color: "gray",
    marginLeft: 7
  },
  buyButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default NFTCard;