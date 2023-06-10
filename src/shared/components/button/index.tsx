import React from 'react';
import {IButtonProps, Button as NativeButton} from 'native-base';

type Props = IButtonProps & {
  title?: string;
  warning?: boolean;
};

export default function Button({title, variant, warning, ...rest}: Props) {
  const getBackgroundColor = () => {
    if (variant === 'solid' || !variant) {
      if (warning) {
        return 'button.background.warning';
      }
      return 'button.background.primary';
    }

    return null;
  };

  const getTextColor = () => {
    if (variant === 'link') {
      return 'button.text.link';
    }

    if (variant === 'unstyled') {
      return 'font.primary';
    }

    if (variant !== 'solid' && variant) {
      return 'button.background.primary';
    }

    return 'button.text.primary';
  };

  const getTextDecoration = () => {
    if (variant === 'link' || variant === 'unstyled') {
      return 'underline';
    }

    return 'none';
  };

  return (
    <NativeButton
      variant={variant}
      borderColor={warning ? 'button.background.warning' : 'primary.pure'}
      bgColor={getBackgroundColor()}
      _text={{color: getTextColor(), textDecorationLine: getTextDecoration()}}
      _spinner={{color: getTextColor()}}
      {...rest}>
      {title}
    </NativeButton>
  );
}
