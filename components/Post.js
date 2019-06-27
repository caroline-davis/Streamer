import React from "react";
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import ProfilePic from "./ProfilePic";
import Comments from "./Comments";

export default function Post(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
      <ProfilePic />
      <Text style={styles.bigUsername}> fakename {props.usernameURL}</Text>
      </View>
    <Image style={styles.picture} source={{uri: props.postPicURL}}/>
      <View>
      <Text style={styles.smallUsername}>usernmaee{props.usernameURL}</Text>
      <Text style={styles.postTitleAndComments}> lalalal{props.postTitle}</Text>
      <Text style={styles.postTitleAndComments}> comments {props.comments} </Text>
      </View>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  headerView: {
    flexDirection: "row",
    paddingLeft: 10
  },
  bigUsername: {
    fontSize: 24,
    fontFamily: "Arial Rounded MT Bold"
  },
  smallUsername: {
    fontSize: 11,
    fontFamily: "Arial Rounded MT Bold",
  },
  picture: {
    width: "80%",
    height: 300
  },
  postTitleAndComments: {
    fontSize: 10,
    fontFamily: "Arial"
  }
});
