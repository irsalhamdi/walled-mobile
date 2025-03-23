import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ModalSelector from "react-native-modal-selector";
import { useNavigation } from "@react-navigation/native";
import CustomModal from "@/components/CustomModal";

export default function TopUpScreen() {
  const paymentMethods = [
    { key: "byond", label: "BYOND Pay" },
    { key: "gopay", label: "GoPay" },
    { key: "ovo", label: "OVO" },
    { key: "dana", label: "Dana" },
  ];

  const navigation = useNavigation();
  const [amount, setAmount] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("byond");
  const [notes, setNotes] = useState("");
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

  const handleAmountChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setAmount(numericValue);
  };

  const handleTopUp = () => {
    setSuccessModalVisible(true);
  };

  const handleModalClose = () => {
    setSuccessModalVisible(false);
    setAmount(""); 
    setSelectedPayment("byond"); 
    setNotes(""); 
  };

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#2d6cdf" />
        </TouchableOpacity>
        <Text style={styles.header}>Top Up</Text>
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Amount</Text>
        <View style={styles.amountRow}>
          <Text style={styles.currency}>IDR</Text>
          <TextInput
            style={styles.inputAmount}
            keyboardType="numeric"
            placeholder="100000"
            placeholderTextColor="#000000"
            value={amount}
            onChangeText={handleAmountChange}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Payment Method</Text>
        <View>
          <ModalSelector
            data={paymentMethods}
            initValue={selectedPayment ? selectedPayment : "Select Payment Method"} // Gunakan nilai yang dipilih
            onChange={(option) => setSelectedPayment(option.label)} // Simpan label
            initValueTextStyle={styles.initValueText}
            selectTextStyle={styles.selectText}
            optionTextStyle={styles.optionText}
            optionContainerStyle={styles.optionContainer}
            selectedItemTextStyle={styles.selectedItemText}
            style={{ borderWidth: 0, backgroundColor: "transparent" }} // Hapus border bawaan
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#999"
          value={notes}
          onChangeText={setNotes}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleTopUp}>
          <Text style={styles.buttonText}>Top Up</Text>
        </TouchableOpacity>
      </View>

      <CustomModal
        visible={isSuccessModalVisible}
        message="Top Up Successful!"
        iconName="checkmark-circle"
        onClose={handleModalClose}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 20,
    paddingTop: 40,  //
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#2d6cdf",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: "#777",
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  currency: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  inputAmount: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
    marginTop: 5,
  },
  initValueText: {
    color: "#2d6cdf",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectText: {
    color: "#000",
    fontSize: 18,
  },
  optionText: {
    color: "#333",
    fontSize: 16,
  },
  optionContainer: {
    backgroundColor: "#e6f0ff",
    borderRadius: 10,
  },
  selectedItemText: {
    color: "#2d6cdf",
    fontWeight: "bold",
  },
  selectedPaymentText: {
    fontSize: 16,
    color: "#333",
    marginTop: 10,
    fontWeight: "bold",
  },
  selectedPaymentValue: {
    color: "#000",
    fontWeight: "bold",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  button: {
    backgroundColor: "#2d6cdf",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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
  modalButtonFullWidth: {
    marginTop: 15,
    backgroundColor: "#2d6cdf",
    padding: 12,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#333",
    textAlign: "center",
  },
  
});
