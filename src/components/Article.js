import React from 'react';
import { StyleSheet, Text as RNText, View } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#000000',
  },
  title: {
    fontWeight: 'bold',
  },
});

const Text = ({ children, style }) => (
  <RNText style={[styles.text, style]}>{children}</RNText>
);

const Article = ({
  author,
  content,
  description,
  publishedAt,
  source,
  title,
  url,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{`Author: ${author}`}</Text>
      <Text style={styles.text}>{`Description: ${author}`}</Text>
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

export default Article;
