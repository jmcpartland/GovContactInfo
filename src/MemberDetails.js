/* eslint-disable max-len */
import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

const MemberDetails = ({route, navigation}) => {
  const {congressman} = route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.name}>
          {congressman.short_title} {congressman.first_name} {congressman.last_name}
        </Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Title:</Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{congressman.title}</Text>
          </View>
            <Text style={styles.label}>Party: </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{congressman.party}</Text>
          </View>
            <Text style={styles.label}>Middle Name: </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{congressman.middle_name}</Text>
          </View>
            <Text style={styles.label}>Gender: </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{congressman.gender}</Text>
          </View>
            <Text style={styles.label}>D.O.B.: </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{congressman.date_of_birth}</Text>
          </View>
            <Text style={styles.label}>District: </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{congressman.district}</Text>
          </View>
            <Text style={styles.label}>Office Address: </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{congressman.office}</Text>
          </View>
            <Text style={styles.label}>Phone: </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{congressman.phone}</Text>
          </View>
            <Text style={styles.label}>Fax: </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{congressman.fax}</Text>
          </View>
            <Text style={styles.label}>URL: </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{congressman.url}</Text>
          </View>
            <Text style={styles.label}>Facebook Account: </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{congressman.facebook_account}</Text>
          </View>
            <Text style={styles.label}>Twitter Account: </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{congressman.twitter_account}</Text>
          </View>
            <Text style={styles.label}>YouTube Account: </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{congressman.youtube_account}</Text>
          </View>
            <Text style={styles.label}>RSS: </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{congressman.rss_url}</Text>
          </View>
            <Text style={styles.label}>Next Election: </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{congressman.next_election}</Text>
          </View>
        </View>
      </View>
  );
};

export default MemberDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'left',
    // alignItems: 'left',
    marginHorizontal: 10,
    marginBottom: 15,
    // padding: 12,
  },
  detailsContainer: {
    // marginHorizontal: 10,
    // marginBottom: 15,
    // padding: 12,
  },
  label: {
    fontSize: 14, 
    fontWeight: 'bold', 
    textAlign: 'left',
    paddingLeft: 10,
  },
  valueContainer: {
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  value: {
    fontSize: 16, 
    marginBottom: 5,
    paddingLeft: 15,
    textAlign: 'left',
    height: 28,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});