import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../styles/styles";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: "https://i.pravatar.cc/40" }}
        style={styles.profilePic}
      />
      <View>
        <Text style={styles.userName}>Chelsea Immanuela</Text>
        <Text style={styles.accountType}>Personal Account</Text>
      </View>
      <Icon
        name="sunny-outline"
        size={24}
        color="#FFA500"
        style={styles.sunIcon}
      />
    </View>
  );
};

export default Header;
