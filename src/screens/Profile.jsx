import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import { WalletConnectModal } from "@walletconnect/modal-react-native";

import { useWeb3Modal } from '@web3modal/wagmi-react-native'


const projectId = "bef4efc64d652f4633d602268040f5f4";

const providerMetadata = {
  name: "NFTApp",
  description: "toros university final project",
  url: "https://www.torosnft.com",
};

export default function ConnectView() {
  const { open } = useWeb3Modal()

  return (
    <>
      <Pressable onPress={() => open()}>
        <Text>Open Connect Modal</Text>
      </Pressable>
    </>
  )
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