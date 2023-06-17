import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MemberDetails = ({route, navigation}) => {
  const { congressman } = route.params;
  console.log(congressman)

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {congressman.short_title} {congressman.first_name} {congressman.last_name}
      </Text>
      <View>
        <Text style={styles.details}>Title: {congressman.title}</Text>
        <Text style={styles.details}>Middle Name: {congressman.middle_name}</Text>
        <Text style={styles.details}>Gender: {congressman.gender}</Text>
        <Text style={styles.details}>D.O.B.: {congressman.date_of_birth}</Text>
        <Text style={styles.details}>District: {congressman.district}</Text>
        <Text style={styles.details}>Office Address: {congressman.office}</Text>
        <Text style={styles.details}>Phone: {congressman.phone}</Text>
        <Text style={styles.details}>Fax: {congressman.fax}</Text>
        <Text style={styles.details}>URL: {congressman.url}</Text>
        <Text style={styles.details}>Facebook Account: {congressman.facebook_account}</Text>
        <Text style={styles.details}>Twitter Account: {congressman.twitter_account}</Text>
        <Text style={styles.details}>YouTube Account: {congressman.youtube_account}</Text>
        <Text style={styles.details}>RSS: {congressman.rss_url}</Text>
        <Text style={styles.details}>RSS: {congressman.id}</Text>
        {/* <Text>{congressman.geoid}</Text> */}
        {/* <Text>{congressman.google_entity_id}</Text> */}
        {/* <Text>{congressman.govtrack_id}</Text> */}
        {/* <Text>{congressman.last_updated}</Text> */}
        {/* <Text>{congressman.leadership_role}</Text> */}
        {/* <Text>{congressman.next_election}</Text> */}
        {/* <Text>{congressman.party}</Text> */}
        {/* <Text>{congressman.seniority}</Text> */}
        {/* <Text>{congressman.short_title}</Text> */}
        {/* <Text>{congressman.state}</Text> */}
        {/* <Text>{congressman.suffix}</Text> */}
        {/* <Text>{congressman.total_present}</Text> */}
        {/* <Text>{congressman.total_votes}</Text> */}
        {/* <Text>{congressman.votes_against_party_pct}</Text> */}
        {/* <Text>{congressman.votes_with_party_pct}</Text> */}
        {/* <Text>{congressman.votesmart_id}</Text> */}
      </View>
    </View>
  );
};

export default MemberDetails;

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
  },
  container: {
    marginHorizontal: 25,
    marginBottom: 15,
    padding: 12,
  },
});