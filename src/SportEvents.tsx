import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import PopularEventItemView from './common/PopularEventItemView';
import {SportEventTypes} from './types';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: 'white',
  },
});

interface Props {
  loading: boolean;
  error: boolean;
  data?: Array<SportEventTypes> | null;
  navigation?: any;
}

export default function SportEvents({
  loading,
  data,
  error,
  navigation,
}: Props): JSX.Element {
  if (loading && !data) {
    return (
      <View style={styles.root}>
        <Text style={styles.textColor}>Loading...</Text>
      </View>
    );
  }

  if (!loading && error) {
    return (
      <View style={styles.root}>
        <Text style={styles.textColor}>
          Error while loading the sport events
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <PopularEventItemView item={item} navigation={navigation} />
      )}
    />
  );
}
