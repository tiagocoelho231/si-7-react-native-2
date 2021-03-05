import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={require('../assets/logo.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3d8af7',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  image: {
    height: 30,
    aspectRatio: 37 / 30
  }
});
