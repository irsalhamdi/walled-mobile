import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const transactions = [
  { id: '1', name: 'Adityo Gizwanda', type: 'Transfer', amount: '- 75.000,00', date: '08 December 2024', isPositive: false },
  { id: '2', name: 'Adityo Gizwanda', type: 'Topup', amount: '+ 75.000,00', date: '08 December 2024', isPositive: true },
  { id: '3', name: 'Adityo Gizwanda', type: 'Transfer', amount: '- 75.000,00', date: '08 December 2024', isPositive: false },
  { id: '4', name: 'Adityo Gizwanda', type: 'Transfer', amount: '- 75.000,00', date: '08 December 2024', isPositive: false },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://i.pravatar.cc/40' }} style={styles.profilePic} />
        <View>
          <Text style={styles.userName}>Chelsea Immanuela</Text>
          <Text style={styles.accountType}>Personal Account</Text>
        </View>
        <Icon name="sunny-outline" size={24} color="#FFA500" style={styles.sunIcon} />
      </View>

      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Good Morning, Chelsea</Text>
        <Text style={styles.subText}>Check all your incoming and outgoing transactions here</Text>
        <Icon name="sunny" size={40} color="#FFA500" style={styles.emoji} />
      </View>

      <View style={styles.accountInfo}>
        <Text style={styles.accountLabel}>Account No.</Text>
        <Text style={styles.accountNumber}>100899</Text>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Balance</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.balanceAmount}>Rp 10.000.000</Text>
          <Icon name="eye-outline" size={20} color="#555" />
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="add-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="paper-plane-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Text style={styles.transactionTitle}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <View style={styles.transactionLeft}>
              <Image source={{ uri: 'https://i.pravatar.cc/50' }} style={styles.avatar} />
              <View>
                <Text style={styles.transactionName}>{item.name}</Text>
                <Text style={styles.transactionType}>{item.type}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>
            </View>
            <Text style={[styles.transactionAmount, item.isPositive ? styles.positiveAmount : styles.negativeAmount]}>
              {item.amount}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8F8F8', 
    padding: 16, 
    paddingTop: 40 
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 16 
  },
  profilePic: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    marginRight: 12 
  },
  userName: { 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  accountType: { 
    fontSize: 12, 
    color: '#000000'
  },
  sunIcon: { 
    marginLeft: 'auto' 
  },
  greetingContainer: { 
    marginBottom: 16 
  },
  greetingText: { 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  subText: { 
    fontSize: 14, 
    color: '#555' 
  },
  emoji: { 
    position: 'absolute', 
    right: 0, 
    top: -5 
  },
  accountInfo: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    backgroundColor: '#1E88E5', 
    padding: 12, 
    borderRadius: 8 
  },
  accountLabel: { 
    color: 'white', 
    fontSize: 14 
  },
  accountNumber: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  balanceContainer: { 
    backgroundColor: 'white', 
    padding: 16, 
    borderRadius: 8, 
    marginTop: 12 
  },
  balanceLabel: { 
    fontSize: 14, 
    color: '#555' 
  },
  balanceRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginTop: 8 
  },
  balanceAmount: { 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  actions: { 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    marginTop: 12 
  },
  actionButton: { 
    backgroundColor: '#1E88E5', 
    padding: 12, 
    borderRadius: 30, 
    marginLeft: 12 
  },
  transactionTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginTop: 16 
  },
  transactionItem: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    padding: 12, 
    borderRadius: 8, 
    marginVertical: 6 
  },
  transactionLeft: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  avatar: { 
    width: 40, 
    height: 40, 
    borderRadius: 20 
  },
  transactionName: { 
    fontSize: 14, 
    fontWeight: 'bold' 
  },
  transactionType: { 
    fontSize: 12, 
    color: '#555' 
  },
  transactionDate: { 
    fontSize: 12, 
    color: '#999' 
  },
  transactionAmount: { 
    fontSize: 14, 
    fontWeight: 'bold' 
  },
  positiveAmount: { 
    color: 'green' 
  },
  negativeAmount: { 
    color: 'red' 
  },
});

export default HomeScreen;
