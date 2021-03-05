import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Product from './Product';

const products = [
  {
    id: 1,
    name: 'Arroz',
    price: 20,
    brand: 'Vasconcelos',
    amount: 12,
    ref: '001',
    discountPercentage: 10,
    take: 5,
    pay: 4
  },
  {
    id: 2,
    name: 'Feijão',
    price: 10,
    brand: 'Vasconcelos',
    amount: 15,
    ref: '002',
    discountPercentage: 5,
    take: 6,
    pay: 5
  },
  {
    id: 3,
    name: 'Detergente',
    price: 1.99,
    brand: 'Ypê',
    amount: 100,
    ref: '405',
    discountPercentage: 20,
    take: 10,
    pay: 9
  }
];

export default function List() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <Product data={item} />}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    paddingHorizontal: 20
  }
});
