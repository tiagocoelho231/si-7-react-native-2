/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Produtos</Text>
        <List />
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1
  },
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  title: {
    color: '#1da1f2',
    fontSize: 26,
    fontWeight: '700',
    margin: 30
  }
});
