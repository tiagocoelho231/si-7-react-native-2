import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>ListView Activity - 2021</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    backgroundColor: '#606060',
    justifyContent: 'center',
    padding: 20
  },
  text: {
    color: '#ffffff',
    fontSize: 16
  }
});
