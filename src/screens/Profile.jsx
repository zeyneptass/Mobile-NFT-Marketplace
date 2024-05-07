import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from "react-native";


import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Zeyno } from '../components/WalletConnectModal';
import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";
const projectId = "bef4efc64d652f4633d602268040f5f4";

const providerMetadata = {
  name: "NFTApp",
  description: "toros university final project",
  url: "https://www.torosnft.com",
};
const Profile =() => {
  const [showModal, setShowModal] = useState(false);
  const { open, isConnected, address, provider } = useWalletConnectModal();

  const handleConnect = async (provider, session) => {
     if (isConnected) {
      return provider?.disconnect();
    }
    return open();
  };

  const handleDisconnect = async () => {
     if (!isConnected) {
      return open();
    }
    return provider?.disconnect();
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WalletConnect Modal RN Tutorial</Text>
      <Text>{isConnected ? address : "No Connected"}</Text>
      <Pressable onPress={handleConnect} style={styles.pressableMargin}>
        <Text>{isConnected ? "Disconnect" : "Connect"}</Text>
      </Pressable>

      <WalletConnectModal
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </View>
  );
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  pressableMargin: {
    marginTop: 16,
  },
});

export default Profile;