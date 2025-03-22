import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

// Definisikan tipe untuk navigasi
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Logo dari URL */}
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png" }}
        style={styles.logo}
      />
      <Text style={styles.title}>Walled</Text>

      {/* Input Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"#666"}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        />

      {/* Input Password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"#666"}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Tombol Login */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Navigasi ke Register */}
      <Text style={styles.registerText}>
        Don’t have an account?{" "}
        <Text style={styles.registerLink} onPress={() => navigation.navigate("Register")}>
          Register here
        </Text>
      </Text>
    </View>
  );
};

// **Gaya**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerText: {
    marginTop: 15,
    fontSize: 14,
    color: "#666",
  },
  registerLink: {
    color: "#2563eb",
    fontWeight: "bold",
  },
});

export default LoginScreen;
