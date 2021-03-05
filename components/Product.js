import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';
import Card from './Card';

function Description({ values: { price, brand, amount, ref } }) {
  return (
    <View style={styles.description}>
      <Text style={styles.descriptionItem}>
        <Text style={styles.itemName}>Valor: </Text>
        R$ {String(price).split('.')[0]},{String(price).split('.')[1] || '00'}
      </Text>

      <Text style={styles.descriptionItem}>
        <Text style={styles.itemName}>Marca: </Text>
        {brand}
      </Text>

      <Text style={styles.descriptionItem}>
        <Text style={styles.itemName}>Quantidade: </Text>
        {amount}
      </Text>

      <Text style={styles.descriptionItem}>
        <Text style={styles.itemName}>Ref: </Text>
        {ref}
      </Text>
    </View>
  );
}

export default function Product({
  data: { name, price, brand, amount, ref, discountPercentage, take, pay }
}) {
  return (
    <Card>
      <Text style={styles.title}>{name}</Text>
      <Description values={{ price, brand, amount, ref }} />
      <View style={styles.buttons}>
        <Button style={styles.discountButton}>
          {discountPercentage}% de desconto
        </Button>
        <Button style={styles.takePayButton}>
          Leve {take} pague {pay}
        </Button>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#8080d0',
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 20
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '700'
  },
  description: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10
  },
  descriptionItem: {
    color: '#ffffff',
    fontSize: 16,
    width: '50%'
  },
  itemName: {
    fontWeight: '700'
  },
  buttons: {
    flexDirection: 'row'
  },
  discountButton: {
    backgroundColor: '#72bb53',
    marginRight: 10
  },
  takePayButton: {
    backgroundColor: '#ff8351'
  }
});
