import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Button({ children, style, buttonStyle, ...props }) {
  return (
    <View {...props} style={{ ...styles.button, ...style }}>
      <TouchableOpacity>
        <Text style={{ ...styles.buttonText, ...buttonStyle }}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  buttonText: {
    color: '#ffffff'
  }
});
