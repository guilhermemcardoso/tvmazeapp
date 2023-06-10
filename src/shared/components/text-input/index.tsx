import React from 'react';
import {IInputProps, Input as InputBase} from 'native-base';

type Props = IInputProps & {
  entryType?: 'text' | 'number';
};

export default function TextInput({entryType = 'text', ...props}: Props) {
  const getKeyboardType = () => {
    if (entryType === 'number') {
      return 'numeric';
    }

    return 'default';
  };

  return (
    <InputBase
      _focus={{
        _ios: {
          selectionColor: 'primary.dark',
        },
        _android: {
          selectionColor: 'primary.dark',
        },
      }}
      color="font.primary"
      backgroundColor="container.light"
      borderColor="container.lighter"
      fontFamily={'body'}
      keyboardType={getKeyboardType()}
      p={3}
      flex={1}
      {...props}
    />
  );
}
