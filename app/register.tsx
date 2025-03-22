import React, { useState, useEffect } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, Image 
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const RegisterScreen = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (params.acceptedTerms === "true") {
      setAcceptedTerms(true);
    }
  }, [params]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let newErrors = { fullname: "", email: "", password: "" };
    let isValid = true;

    if (fullname.trim().length < 3) {
      newErrors.fullname = "Fullname must be at least 3 characters!";
      isValid = false;
    }
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

  const handleRegister = () => {
    if (!validateForm()) return;
    if (!acceptedTerms) {
      alert("You must accept the Terms & Conditions!");
      return;
    }

    router.push("/login");
  };

  return (
    <View style={styles.container}>
    <Image source={require("../assets/images/walled.png")} style={styles.logo} resizeMode="contain" />

      {/* Fullname Input */}
      <TextInput
        style={styles.input}
        placeholder="Fullname"
        placeholderTextColor={"#666"}
        value={fullname}
        onChangeText={setFullname}
      />
      {errors.fullname ? <Text style={styles.errorText}>{errors.fullname}</Text> : null}

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"#666"}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"#666"}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

      {/* Avatar URL Input (Tanpa Validasi) */}
      <TextInput
        style={styles.input}
        placeholder="Avatar Url (optional)"
        placeholderTextColor={"#666"}
        value={avatarUrl}
        onChangeText={setAvatarUrl}
      />

      {/* Checkbox untuk Terms & Conditions */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setAcceptedTerms((prev) => !prev)}>
          <Ionicons
            name={acceptedTerms ? "checkbox" : "square-outline"}
            size={24}
            color={acceptedTerms ? "#2563eb" : "#666"}
          />
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          I have read and agree to the{" "}
          <Text style={styles.termsLink} onPress={() => router.push("/term?fromRegister=true")}>
            Terms and Conditions
          </Text>
        </Text>
      </View>

      {/* Tombol Register */}
      <TouchableOpacity
        style={[styles.button, !acceptedTerms && styles.buttonDisabled]}
        onPress={handleRegister}
        disabled={!acceptedTerms}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      {/* Navigasi ke Login */}
      <Text style={styles.loginText}>
        Have an account?{" "}
        <Text style={styles.loginLink} onPress={() => router.push("/login")}>
          Login here
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
    width: 200,
    height: 200,
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
    marginBottom: 5,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#666",
  },
  termsLink: {
    color: "#2563eb",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 15,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#aaa",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    marginTop: 15,
    fontSize: 14,
    color: "#666",
  },
  loginLink: {
    color: "#2563eb",
    fontWeight: "bold",
  },
});

export default RegisterScreen;
