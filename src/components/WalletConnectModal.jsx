import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { WalletConnectModal } from "@walletconnect/modal-react-native";

const projectId = "bef4efc64d652f4633d602268040f5f4";

const providerMetadata = {
  name: "NFTApp",
  description: "toros university final project",
  url: "https://www.torosnft.com",
};

export default function Zeyno() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleButtonPress = async () => {
    if (isConnected) {
      provider.disconnect();
    } else {
      setShowModal(true);
    }
  };

  const handleConnect = async (provider, session) => {
    setIsConnected(true);
    setAddress(session.address);
    setProvider(provider);
    setShowModal(false);
  };

  const handleDisconnect = async () => {
    setIsConnected(false);
    setAddress("");
    setProvider(null);
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WalletConnect Modal RN Tutorial</Text>
      <Text>{isConnected ? address : "Not Connected"}</Text>
      <Pressable onPress={handleButtonPress} style={styles.pressableMargin}>
        <Text>{isConnected ? "Disconnect" : "Connect"}</Text>
      </Pressable>

      {showModal && (
        <WalletConnectModal
          projectId={projectId}
          providerMetadata={providerMetadata}
          onClose={() => setShowModal(false)}
          onConnect={handleConnect}
          onDisconnect={handleDisconnect}
        />
      )}
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
