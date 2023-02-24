import React, { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useQuery } from 'react-query';
import { getNews } from './api';
import Article from './components/Article';
import SearchBar from './components/SearchBar';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  error: {
    color: 'red',
  },
});

const NewsSearch = () => {
  const [query, setQuery] = useState('');
  const { isLoading, error, data, refetch } = useQuery('news', () =>
    getNews({ query }),
  );

  const renderArticles = () => {
    if (isLoading) return <ActivityIndicator size="large" />;
    if (error) return <Text>{error}</Text>;
    return (
      data?.data?.articles &&
      data?.data?.articles.map((article, index) => (
        <Article {...article} key={`article-${index}`} />
      ))
    );
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.background}>
        <SearchBar
          onSearch={refetch}
          value={query}
          setValue={setQuery}
          isLoading={isLoading}
        />
        {renderArticles()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsSearch;
