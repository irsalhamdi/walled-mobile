import React, { useState } from "react";
import { 
  View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert 
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function TermsAndConditionsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    Alert.alert("Thank you!", "You have accepted the Terms & Conditions.");
    router.push("/register?acceptedTerms=true"); // Kembali ke halaman Register
  };

  return (
    <View style={styles.container}>
      {/* Header dengan tombol kembali dan judul yang sejajar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Terms & Conditions</Text>
        <View style={styles.placeholder} /> 
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.content}>
          Welcome to our application. Before using our services, please read these Terms & Conditions carefully. 
        </Text>
        <Text style={styles.content}>
          1. By using our application, you agree to comply with all terms and policies.
        </Text>
        <Text style={styles.content}>
          2. We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of the changes.
        </Text>
        <Text style={styles.content}>
          3. Unauthorized use of this app may result in legal action.
        </Text>
        <Text style={styles.content}>
          4. Your personal data will be protected according to our privacy policy.
        </Text>
        <Text style={styles.content}>
          5. If you disagree with any part of these terms, please do not use the application.
        </Text>
      </ScrollView>

      <TouchableOpacity 
        style={[styles.button, accepted ? styles.buttonDisabled : null]} 
        onPress={handleAccept}
        disabled={accepted}
      >
        <Text style={styles.buttonText}>{accepted ? "Accepted" : "Accept"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1, // Agar tetap di tengah
  },
  placeholder: {
    width: 40, // Untuk menjaga keseimbangan di header
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },
  content: {
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#2962FF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#AAA",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TermsAndConditionsScreen;
