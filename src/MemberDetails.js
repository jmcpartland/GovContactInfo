import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const MemberDetails = ({route, navigation}) => {
  const {congressman} = route.params;

  // console.log(congressman)

  // const congressmanFiltered = () => {
  //   if (Object.values(congressman).length > 0) {
  //     console.log("value exists")
  //   } else {
  //     console.log("value does NOT exist")
  //   }
  // };
  // congressmanFiltered();

    return (
      <View style={styles.container}>

        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {congressman.short_title} {congressman.first_name} {congressman.last_name}
          </Text>
        </View>
        <ScrollView>
          <View style={styles.detailsContainer}>
            <Text style={styles.label}>Title:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.title}</Text>
            </View>
            <Text style={styles.label}>State:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.state}</Text>
            </View>
            <Text style={styles.label}>Party:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.party}</Text>
            </View>
            <Text style={styles.label}>Middle Name:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.middle_name}</Text>
            </View>
            <Text style={styles.label}>Gender:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.gender}</Text>
            </View>
            <Text style={styles.label}>D.O.B.:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.date_of_birth}</Text>
            </View>
            <Text style={styles.label}>District:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.district}</Text>
            </View>
            <Text style={styles.label}>Office Address:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.office}</Text>
            </View>
            <Text style={styles.label}>Phone:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.phone}</Text>
            </View>
            <Text style={styles.label}>Fax:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.fax}</Text>
            </View>
            <Text style={styles.label}>URL:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.url}</Text>
            </View>
            <Text style={styles.label}>Facebook Account:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.facebook_account}</Text>
            </View>
            <Text style={styles.label}>Twitter Account:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.twitter_account}</Text>
            </View>
            <Text style={styles.label}>YouTube Account:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.youtube_account}</Text>
            </View>
            <Text style={styles.label}>RSS:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.rss_url}</Text>
            </View>
            <Text style={styles.label}>Next Election:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{congressman.next_election}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
  );
};

export default MemberDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'left',
    // alignItems: 'left',
    // marginHorizontal: 10,
    paddingBottom: 35,
    padding: 5,
    // backgroundColor: '#fff',
  },
  nameContainer: {
    // height: 50,
    alignItems: 'center',
    paddingTop: 10,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    // backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  detailsContainer: {
    // backgroundColor: '#fff',
    // marginHorizontal: 10,
    // padding: 12,
  },
  label: {
    fontSize: 12, 
    fontWeight: 'bold', 
    textAlign: 'left',
    paddingLeft: 10,
  },
  valueContainer: {
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
  value: {
    fontSize: 16, 
    marginBottom: 5,
    paddingLeft: 25,
    textAlign: 'left',
    height: 28,
  },
});