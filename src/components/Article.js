import React from 'react';
import {
  Linking,
  StyleSheet,
  Text as RNText,
  TouchableOpacity,
  View,
} from 'react-native';

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
  link: {
    color: 'blue',
  },
});

const Text = ({ children, style }) => (
  <RNText style={[styles.text, style]}>{children}</RNText>
);

const Article = ({ author, content, title, url }) => {
  const openUrl = async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Invalid Url: ${url}`);
    }
  };

  return (
    <TouchableOpacity onPress={openUrl}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{`Author: ${author}`}</Text>
        <Text style={styles.text}>{content}</Text>
        <Text style={styles.link}>Read more...</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Article;
