import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function TermsAndConditionsScreen({  }) {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    Alert.alert("Thank you!", "You have accepted the Terms & Conditions.");
    // Jika ingin pindah ke halaman lain, bisa gunakan:
    // navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms & Conditions</Text>
      
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
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
