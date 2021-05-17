import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SportEventTypes} from '../types';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgb(22,22,22)',
    marginHorizontal: 8,
    marginVertical: 4,
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  headingAndStateParent: {
    flex: 1,
    flexDirection: 'row',
  },
  headingParent: {
    flex: 1,
  },
  headingText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subHeading: {
    color: 'white',
    fontStyle: 'italic',
  },
  description: {
    color: 'white',
    marginTop: 4,
  },
});

interface Props {
  item: SportEventTypes;
  navigation?: any;
}

export default function PopularEventItemView({
  item,
  navigation,
}: Props): JSX.Element {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SportEventDetails', {data: item})}>
      <View style={styles.root}>
        <View style={styles.headingAndStateParent}>
          <View style={styles.headingParent}>
            <Text style={styles.headingText}>{item.name}</Text>
          </View>
          <View>
            <Text style={styles.headingText}>{item.state}</Text>
          </View>
        </View>

        <Text style={styles.subHeading}>{item.short_name}</Text>
        <Text style={styles.description}>
          {item.description
            ? item.description
            : 'Description of the event is not provided at the moment.'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
