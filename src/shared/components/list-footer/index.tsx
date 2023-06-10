import React from 'react';
import {View, useTheme} from 'native-base';
import {Button, Loading, Text} from '~/shared/components';
import styles from './styles';

interface Props {
  hasNext?: boolean;
  isLoading?: boolean;
  endOfList?: string;
  isEmpty?: boolean;
  onLoadMore?: () => void;
}

export default function ListFooter({
  hasNext,
  isLoading,
  isEmpty,
  endOfList = 'We reached the end of the list',
  onLoadMore,
}: Props) {
  const theme = useTheme();

  if (isLoading) {
    return <Loading />;
  }

  if (!hasNext && onLoadMore) {
    return (
      <View bgColor={theme.colors.container.dark} style={styles.container}>
        <Text style={styles.description}>{endOfList}</Text>
      </View>
    );
  }

  if (!isEmpty && onLoadMore) {
    return <Button variant="unstyled" title="Load more" onPress={onLoadMore} />;
  }

  return null;
}
