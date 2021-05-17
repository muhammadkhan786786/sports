import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  root: {
    height: windowHeight / 3,
    backgroundColor: 'rgb(22,22,22)',
    marginHorizontal: 8,
    marginVertical: 4,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  headingText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  parentView: {
    flexDirection: 'row',
  },
  headingParent: {
    flex: 1,
  },
  descriptionName: {
    flex: 1,
    marginTop: 8,
  },
  descriptionNameValue: {
    marginTop: 8,
  },
  topMargin: {
    marginTop: 8,
  },
  textColor: {
    color: 'white',
  },
  line: {
    borderBottomColor: 'rgb(52,52,53)',
    borderBottomWidth: 1,
  },
});

export default function SportEventDetails({navigation}: any): JSX.Element {
  const {state} = navigation;
  const event = state.params.data;

  return (
    <View style={styles.root}>
      <View style={styles.parentView}>
        <View style={styles.headingParent}>
          <Text style={styles.headingText}>{event.name}</Text>
        </View>
        <View>
          <Text style={styles.headingText}>{event.state}</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.parentView}>
        <View style={styles.descriptionName}>
          <Text style={styles.textColor}>{'Short Name'}</Text>
        </View>
        <View style={styles.topMargin}>
          <Text style={styles.textColor}>{event.short_name}</Text>
        </View>
      </View>
      <View style={styles.parentView}>
        <View style={styles.descriptionName}>
          <Text style={styles.textColor}>{'Bettable'}</Text>
        </View>
        <View style={styles.topMargin}>
          <Text style={styles.textColor}>{event.bettable ? 'Yes' : 'No'}</Text>
        </View>
      </View>
      <View style={styles.parentView}>
        <View style={styles.descriptionName}>
          <Text style={styles.textColor}>{'Start Date'}</Text>
        </View>
        <View style={styles.topMargin}>
          <Text style={styles.textColor}>{event.start_date}</Text>
        </View>
      </View>
      <View style={styles.parentView}>
        <View style={styles.descriptionName}>
          <Text style={styles.textColor}>{'End Date'}</Text>
        </View>
        <View style={styles.topMargin}>
          <Text style={styles.textColor}>
            {event.end_date ? event.end_date : '...'}
          </Text>
        </View>
      </View>
      <View style={styles.parentView}>
        <View style={styles.descriptionName}>
          <Text style={styles.textColor}>{'Bet Allowed'}</Text>
        </View>
        <View style={styles.topMargin}>
          <Text style={styles.textColor}>
            {event.bet_allowed ? 'Yes' : 'No'}
          </Text>
        </View>
      </View>
      <View style={styles.parentView}>
        <View style={styles.descriptionName}>
          <Text style={styles.textColor}>{'Orders'}</Text>
        </View>
        <View style={styles.topMargin}>
          <Text style={styles.textColor}>{event.display_order}</Text>
        </View>
      </View>
    </View>
  );
}
