import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let newErrors = { email: "", password: "" };
    let isValid = true;

    if (!isValidEmail(email)) {
      newErrors.email = "Please enter a valid email!";
      isValid = false;
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = () => {
    if (!validateForm()) return;

    if (email === "user@example.com" && password === "password") {
      router.replace("/(tabs)/dashboard"); 
    } else {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
    <Image source={require("../assets/images/walled.png")} style={styles.logo} resizeMode="contain" />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"#666"}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"#666"}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        Don’t have an account?{" "}
        <Text style={styles.registerLink} onPress={() => router.push("/register")}>
          Register here
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#fff", 
    paddingHorizontal: 20 
  },
  logo: { 
    width: 200, 
    height: 200, 
    marginBottom: 40  
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20 
  },
  input: { 
    width: "100%", 
    height: 50, 
    borderWidth: 1, 
    borderColor: "#ddd", 
    borderRadius: 10, 
    paddingHorizontal: 15, 
    backgroundColor: "#f9f9f9", 
    marginBottom: 15 
  },
  errorText: { 
    color: "red", 
    fontSize: 12, 
    marginBottom: 10, 
    alignSelf: "flex-start" 
  },
  button: { 
    backgroundColor: "#2563eb", 
    paddingVertical: 15, 
    width: "100%", 
    borderRadius: 10, 
    alignItems: "center", 
    marginTop: 20  // ✅ Menambah jarak antara field password dan tombol login
  },
  buttonText: { 
    color: "#fff", 
    fontWeight: "bold", 
    fontSize: 16 
  },
  registerText: { 
    marginTop: 20, 
    fontSize: 14, 
    color: "#666" 
  },
  registerLink: { 
    color: "#2563eb", 
    fontWeight: "bold" 
  },
});




