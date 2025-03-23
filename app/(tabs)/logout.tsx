import { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Redirect } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import CustomModal from "@/components/CustomModal";

const LogoutScreen = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  if (shouldRedirect) {
    return <Redirect href="/login" />; 
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2d6cdf" />
        </TouchableOpacity>
        <Text style={styles.header}>Logout</Text>
      </View>

      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Ionicons name="log-out-outline" size={100} color="#2d6cdf" />
        </TouchableOpacity>
      </View>

      <CustomModal
        visible={isModalVisible}
        message="Are you sure you want to logout?"
        onClose={() => setIsModalVisible(false)}
        onConfirm={() => setShouldRedirect(true)}
        confirmText="Yes"
        cancelText="No"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 40,
    left: 20,
  },
  backButton: {
    marginRight: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logoText: {
    fontSize: 18,
    marginTop: 10,
    color: "#333",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Spacing between buttons
    width: "100%",
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10, // Added horizontal margin for spacing
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default LogoutScreen;
