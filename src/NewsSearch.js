import React, { useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useQuery } from 'react-query';
import { getNews } from './api';
import Article from './components/Article';

const NewsSearch = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [query, setQuery] = useState('');
  const { isLoading, error, data } = useQuery('news', () => getNews({ query }));

  console.log('data:', data);

  const renderContent = () => (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <TextInput
        onChangeText={(change) => {
          setQuery(change);
        }}
      />
      {data?.data?.articles &&
        data?.data?.articles.map((article) => <Article {...article} />)}
    </ScrollView>
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {isLoading ? <ActivityIndicator /> : renderContent()}
    </SafeAreaView>
  );
};

export default NewsSearch;
