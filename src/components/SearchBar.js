import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 5,
    borderColor: 'black',
    color: 'black',
    padding: 10,
  },
});

const SearchBar = ({ setValue, value, onSearch, isLoading }) => {
  return (
    <View>
      <TextInput
        style={styles.searchBar}
        placeholder="Type search query here..."
        placeholderTextColor="gray"
        onChangeText={setValue}
        value={value}
        returnKeyType="search"
        onSubmitEditing={onSearch}
      />
      <Button title="Search" onPress={onSearch} disabled={isLoading} />
    </View>
  );
};

export default SearchBar;
