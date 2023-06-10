import {View} from 'native-base';
import React, {useState} from 'react';
import TextInput from '../text-input';
import Button from '../button';
import styles from './styles';
import {Keyboard} from 'react-native';

interface Props {
  onSearch: (text: string) => void;
  placeholder: string;
  isLoading: boolean;
}
export default function SearchInput({placeholder, isLoading, onSearch}: Props) {
  const [searchText, setSearchText] = useState('');

  const handleTextChange = (text: string) => {
    setSearchText(text);
  };
  const handleSearch = () => {
    onSearch(searchText);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TextInput
        borderTopRightRadius={0}
        borderBottomRightRadius={0}
        onChangeText={handleTextChange}
        placeholder={placeholder}
      />
      <Button
        style={styles.button}
        isLoading={isLoading}
        isDisabled={isLoading}
        title="Search"
        onPress={handleSearch}
      />
    </View>
  );
}
