import React from 'react';
import { StyleSheet, Text as RNText, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    color: '#000000',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    fontWeight: 'bold',
    color: 'gray',
  },
});

const Text = ({ children, style }) => (
  <RNText style={[styles.text, style]}>{children}</RNText>
);

const Article = ({ author, content, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{`Author: ${author}`}</Text>
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

export default Article;
