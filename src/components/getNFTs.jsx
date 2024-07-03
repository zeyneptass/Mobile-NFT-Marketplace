import axios from 'axios';
import Web3 from 'web3';

const web3 = new Web3();

const addresses = [
  '0xB5D3D2A70F3dFf7Ead8c9cF7FF702D924cE60BBb',
  '0x314ADC3d43b1DD7b40Bb8B51E38A576CBb5A7b4E',
  '0x71688e5f22f818a31BC36BEcD1Fc83D198779b83',
  '0x9011Eb570D1bE09eA4d10f38c119DCDF29725c41',
  '0x12eA19217C65F36385bB030D00525c1034E2F0Af',
  '0x6c8984bAf566Db08675310b122BF0be9Ea269ecA'
];

const getRandomAddress = () => addresses[Math.floor(Math.random() * addresses.length)];

export const getNFTs = async () => {
  try {
    const selectedAddress = getRandomAddress();
    
    // NFT'leri al
    const response = await axios.get(`https://api.opensea.io/api/v2/chain/ethereum/account/${selectedAddress}/nfts`, {
      headers: {
        'accept': 'application/json',
        'x-api-key': 'bb9d172c7fb84ab18e1fe377411c15d7'
      }
    });

    const nfts = response.data.nfts;

    // Fiyat bilgilerini al
    const collection = 'theinfiniteuniverse';
    const priceResponse = await axios.get(`https://api.opensea.io/api/v2/listings/collection/${collection}/all`, {
      headers: {
        'accept': 'application/json',
        'x-api-key': 'bb9d172c7fb84ab18e1fe377411c15d7'
      }
    });

    const listings = priceResponse.data.listings;

    // NFT'lere fiyat ekle
    const nftsWithPrice = nfts.map(nft => {
      const listing = listings.find(listing => listing.protocol_data.parameters.offer[0].identifierOrCriteria === nft.identifier);
      return {
        ...nft,
        price: listing ? web3.utils.fromWei(listing.price.current.value, 'ether') : null
      };
    });

    return nftsWithPrice;
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    return [];
  }
};
