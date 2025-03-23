import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../../styles/styles';
import AccountInfo from '@/components/AccountInfo';
import TransactionList from '@/components/TransactionList'
import { transactions } from '@/data/transactions';
import Header from '@/components/Header';
import Greeting from '@/components/Greeting';

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const userName = "Chelsea Immanuela";

  return (
    <View style={styles.container}>
      <Header/>

      <Greeting name={userName} />

      <AccountInfo onTopUpPress={() => router.push('/topup')} onTransferPress={() => router.push('/transfer')} />
      <TransactionList transactions={transactions}/>
    </View>
  );
};

export default HomeScreen;

