import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { BLUE_COLOR, WHITE_COLOR } from "./lib/constants";
import Post from "./components/Post";

export default class App extends React.Component {
  state = {

  }

  render() {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Streamer</Text>
      </View>
      <Post />

      <View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header : {
    paddingTop: 20,
    backgroundColor: BLUE_COLOR,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 36,
    fontFamily: "Arial Rounded MT Bold",
    color: WHITE_COLOR
  }
});
