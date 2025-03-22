import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, Image 
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import CheckBox from "@react-native-community/checkbox";


// Definisikan tipe navigasi
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, "Register">;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png" }}
        style={styles.logo}
      />
      <Text style={styles.title}>Walled</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Fullname"
        placeholderTextColor={"#666"}
        value={fullname}
        onChangeText={setFullname}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"#666"}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"#666"}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Avatar Url"
        placeholderTextColor={"#666"}
        value={avatarUrl}
        onChangeText={setAvatarUrl}
      />

      {/* Checkbox untuk Terms & Conditions */}
      {/* <View style={styles.checkboxContainer}>
      <CheckBox
        value={isChecked}
        onValueChange={setIsChecked}
        tintColors={{ true: "#007AFF", false: "#8e8e93" }} // Warna ketika aktif & nonaktif
      />
        <Text style={styles.checkboxText}>
          I have read and agree to the{" "}
          <Text style={styles.termsLink}>Terms and Conditions</Text> <Text style={styles.required}>*</Text>
        </Text>
      </View> */}

      {/* Tombol Register */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      {/* Navigasi ke Login */}
      <Text style={styles.loginText}>
        Have an account?{" "}
        <Text style={styles.loginLink} onPress={() => navigation.navigate("Login")}>
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkboxText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 8,
  },
  termsLink: {
    color: "#2563eb",
    fontWeight: "bold",
  },
  required: {
    color: "red",
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
