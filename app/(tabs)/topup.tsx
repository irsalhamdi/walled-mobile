import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function TopUpScreen() {
  const [amount, setAmount] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("byond");
  const [notes, setNotes] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Up</Text>

      {/* Input Amount */}
      <Text style={styles.label}>Amount</Text>
      <View style={styles.inputRow}>
        <Text style={styles.currency}>IDR</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      {/* Dropdown Payment menggunakan Picker */}
      <Text style={styles.label}>Payment Method</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedPayment}
          onValueChange={(itemValue) => setSelectedPayment(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="BYOND Pay" value="byond" />
          <Picker.Item label="GoPay" value="gopay" />
          <Picker.Item label="OVO" value="ovo" />
          <Picker.Item label="Dana" value="dana" />
        </Picker>
      </View>

      {/* Notes */}
      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={styles.noteInput}
        placeholder="Enter your notes"
        value={notes}
        onChangeText={setNotes}
      />

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Top Up</Text>
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
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
    color: "#777",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    marginBottom: 10,
  },
  currency: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 5,
  },
  pickerContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#CCC",
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  noteInput: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2962FF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
