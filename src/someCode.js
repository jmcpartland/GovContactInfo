<View style={styles.container}>
  <ImageBackground 
    source={require('./assets/congress_faded.png')} 
    resizeMode="cover" 
    style={styles.image}
  >
  </ImageBackground>

  <FlatList
    data={allSenators}
    renderItem={({item}) => <Member senateMember={item}/>}
    keyExtractor={(item) => item.id}
  />
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },