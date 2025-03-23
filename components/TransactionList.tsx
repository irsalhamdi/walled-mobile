import React from 'react';
import { FlatList, Text } from 'react-native';
import TransactionItem from './TransactionItem';
import styles from '../styles/styles';
import { Transaction } from '@/types/transactions';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <>
      <Text style={styles.transactionTitle}>Transaction History</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
      />
    </>
  );
};

export default TransactionList;
